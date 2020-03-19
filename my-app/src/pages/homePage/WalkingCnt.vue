<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:34:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 14:21:19
 * @Description: 地图
 -->
<template>
  <div class="LoginPage_wrapper">
    <h2>行走</h2>
    <div id="container"></div>

    <div class="hoverTips">{{ txt }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    txt() {
      if (this.locationData && this.locationData.lat) {
        return (
          this.locationData.lat +
          "|" +
          this.locationData.lon +
          "|" +
          this.isLocateMsg
        );
      } else {
        return this.isLocateMsg;
      }
    }
  },
  data() {
    return {
      // lng: 113.397219, // 经度
      // lat: 23.065121, // 维度
      locationData: {
        // 用于定位相关信息提交
        lat: "", // 纬度
        lon: "", // 经度
        province: "", // 省
        city: "", // 市
        district: "", // 区 县
        nowPlace: "", // 省-市-区
        Address: "" // 详细地址
      },
      map: {}, // map对象
      markers: [], // 点标记

      isLocateMsg: "定位信息"
    };
  },
  methods: {
    init() {
      const _thisSelf = this;
      _thisSelf.map = new AMap.Map("container", {
        zoom: 16, //级别
        center: [113.397219, 23.065121], //中心点坐标 TODO:广外
        viewMode: "3D", //使用3D视图
        resizeEnable: true
      });
      // 定位
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 50), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
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
          _thisSelf.newGetAddress(data.position.lat, data.position.lng);
          console.log("!!!!定位成功");
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

      // 绑定事件
      _thisSelf.map.on("click", this.markHandle);
    },
    // IP定位获取当前城市信息
    getLngLatLocation() {
      const _thisSelf = this;
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
             if (result && result.city && result.bounds) {
               _thisSelf.isLocateMsg = "ok!!!"
               _thisSelf.isLocateMsg = result ;
             }
          }else{
            _thisSelf.isLocateMsg = "定位失败，可以更换浏览器试一试！" ;
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
      console.log(this.markers);
    },
    // 清除指定点
    clearMarker(e) {
      let _amap_id = e.target._amap_id;
      this.markers.forEach((item, index) => {
        if (item._amap_id == _amap_id) {
          console.log("!!!二次点击取消");
          this.markers[index].setMap(null);
          this.markers[index].off("click", this.clearMarker, this);
        }
      });
    },
    newGetAddress(latitude, longitude) {
      this.locationData.lat = latitude;
      this.locationData.lon = longitude;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="less">
.LoginPage_wrapper {
  #container {
    width: 100%;
    height: calc(100vh - 60px);
  }
  .hoverTips {
    position: fixed;
    right: 0px;
    top: 55px;
  }
}
</style>