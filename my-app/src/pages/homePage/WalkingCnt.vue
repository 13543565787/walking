<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:34:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 15:46:00
 * @Description: 地图 高精度和逆解析（用于没有权限的）
 -->
<template>
  <div class="Walking_wrapper">
    <div id="container"></div>
    <div class="hover_tips">
      <div class="locate_msg">
        <div>
          <span>定位信息：</span>
          {{ isLocateMsg }}
        </div>
        <div>
          <span>当前定位：</span>
          {{ locationData.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      locationData: {
        // 用于定位相关信息提交
        lat: "", // 纬度
        lon: "", // 经度
        address: "" // 精准定位
      },
      map: {}, // map对象
      markers: [], // 点标记
      isLocateMsg: "定位信息"
    };
  },
  methods: {
    init() {
      // 设置、获取地图中心点（setCenter、getCenter）
      // 设置、获取地图缩放级别（setZoom、getZoom）
      // let position = [110.4702652,21.2543418];
      // _thisSelf.map.setCenter(position); // 简写 var lnglat = [116, 39];
      this.map = new AMap.Map("container", {
        zoom: 16, //级别
        // center: [113.397219, 23.065121], //中心点坐标 TODO:广外 不要这个，会自动定位到城市中心
        viewMode: "3D", //使用3D视图
        resizeEnable: true
      });
      this.getLocation(); // TODO:获取精准定位
      // this.getLngLatLocation(); // TODO:这个是无法获得精准定位情况下，用IP获取
      // 绑定事件
      TODO: this.map.on("click", this.markHandle);
    },
    // 获取定位信息
    getLocation() {
      const _thisSelf = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LT", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 70), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        _thisSelf.map.addControl(geolocation); // TODO:这个是用来显示定位的按钮！！！
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        _thisSelf.isLocateMsg = "正在定位";

        function onComplete(data) {
          // data是具体的定位信息
          // 更新当前的位置信息
          _thisSelf.locationData.lat = data.position.lat;
          _thisSelf.locationData.lon = data.position.lng;

          // 转换为详细地址
          _thisSelf.regeocoder(data.position);
          _thisSelf.isLocateMsg = "定位成功";
        }

        function onError(data) {
          // 定位出错
          let str = JSON.stringify(data);
          _thisSelf.isLocateMsg = "定位失败" + str;
          // 失败之后调用这个方法，使用IP定位获取当前城市信息
          _thisSelf.getLngLatLocation();
        }
      });
    },
    // IP定位获取当前城市信息
    getLngLatLocation() {
      const _thisSelf = this;
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          //自动获取用户IP，返回当前城市
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            if (result && result.city && result.bounds) {
              _thisSelf.isLocateMsg = "无法精准定位，如果需要可以更换浏览器";
              var lnglat = result.rectangle.split(";")[0].split(",");
              // 转化为详细地址！
              _thisSelf.regeocoder(lnglat);
            }
          } else {
            _thisSelf.isLocateMsg = "定位失败，可以更换浏览器试一试！";
          }
        });
      });
    },
    //逆地理编码，讲经纬度转化为详细地址
    regeocoder(position) {
      const _thisSelf = this;
      // position是一个数组，或者对象
      AMap.plugin("AMap.Geocoder", function() {
        var geocoder = new AMap.Geocoder({
          city: "全国",
          radius: 1000, //逆地理编码时，以给定坐标为中心点，单位：米
          extensions: "base" //返回基本地址信息
        });
        geocoder.getAddress(position, function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // result为对应的地理位置详细信息
            let address = result.regeocode.formattedAddress; //返回地址描述
            _thisSelf.locationData.address = address;
          }
        });
      });
    },
    // 点击标记事件
    markHandle(e) {
      const _thisSelf = this;
      // 触发事件的对象
      let target = e.target;
      // console.log(target);

      // 触发事件的地理坐标，AMap.LngLat 类型
      let lnglat = e.lnglat;

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        map: _thisSelf.map,
        position: lnglat, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "标记",
        // // 设置是否可以拖拽
        // draggable: true,
        // cursor: "move",
        // // 设置拖拽效果
        // raiseOnDrag: true,
        // 点标记是否可点击
        clickable: true
      });

      marker.projectId = this.markers.length;
      // 将创建的点标记添加到已有的地图实例：
      marker.on("click", this.clearMarker, this);
      this.markers.push(marker);
    },
    // 清除指定点
    clearMarker(e) {
      let _amap_id = e.target._amap_id;
      this.markers.forEach((item, index) => {
        if (item._amap_id == _amap_id) {
          this.markers[index].setMap(null);
          this.markers[index].off("click", this.clearMarker, this);
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="less">
.Walking_wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  #container {
    z-index: 1; // 级别最低
    width: 100%;
    height: 100%;
  }
  .hover_tips {
    position: absolute;
    width: 170px;
    box-sizing: border-box;
    padding: 7px 10px;
    border-radius: 14px;
    height: auto;
    right: 4px;
    top: 55px;
    z-index: 99;
    font-size: 14px;
    background-color: #fff;
    .locate_msg {
      color: #141414;
      div {
        width: 100%;
        min-height: 21px;
        word-wrap: break-word;
        line-height: 1.5;
        font-size: 12px;
        text-decoration: underline;
        span {
          float: left;
        }
      }
    }
  }
}
</style>