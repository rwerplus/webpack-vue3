<template>
  <div>
    <div ref="CMap" class="CMap"></div>
    <div id="popup" class="popup" ref="popup" >{{coordinate}}</div>
    <div class="marker" ref="marker">{{marker}}</div>
  </div>
</template>
<script>
  import { Map, View } from "ol";
  import TileLayer from "ol/layer/Tile";
  import TileImage from "ol/source/TileImage";
  import 'ol/ol.css'
  import OSM from "ol/source/OSM";
  import { overlay } from '../tool/yq.map'
  import * as olCoordinate  from 'ol/coordinate'
  import * as olProj from 'ol/proj'
  import TileGrid from 'ol/tilegrid/TileGrid'
  import TileArcGISRest from 'ol/source/TileArcGISRest'
  import * as olInteraction from 'ol/interaction';
  import {defaults} from 'ol/interaction';
  import Overlay from 'ol/Overlay';
  import {fromLonLat} from 'ol/proj';
  import mapconfig from './mapconfig'

  export default {
    name: 'YQMap',
    data() {
      return {
        coordinate: '',
        marker: 'markermarkermarkermarker'
      }
    },
    mounted () {
      const map = this.$refs.CMap
      //百度地图
      var projection = olProj.get("EPSG:3857");
      var resolutions = [];
      for (var i = 0; i < 19; i++) {
        resolutions[i] = Math.pow(2, 18 - i);
      }
      var tilegrid = new TileGrid({
        origin: [0, 0],
        resolutions: resolutions
      });

      var baidu_source = new TileImage({
        projection: projection,
        tileGrid: tilegrid,
        tileUrlFunction: function (tileCoord, pixelRatio, proj) {
          if (!tileCoord) {
            return "";
          }
          var z = tileCoord[0];
          var x = tileCoord[1];
          var y = tileCoord[2];
          if (x < 0) {
            x = "M" + (-x);
          }
          if (y < 0) {
            y = "M" + (-y);
          }
          return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + x + "&y=" + y + "&z=" + z + "&styles=pl&udt=20170809&scaler=1&p=1";
        }
      });

      var baiduMapLayer = new TileLayer({
        title : "百度地图卫星服务",
        preload: Infinity,
        source: baidu_source
      });
      /**
       * 创建一个Overlay叠加层对象用作显示弹窗
       * @type {Overlay}
       */
      const pop = this.$refs.popup
      this.popupOverlay = new Overlay({
        element: pop,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      });

      /**
       *代表位置的标记
       * @type {marker}
       */
        const pos = fromLonLat([118.798422,32.004679])
      const marker = this.$refs.marker
      console.log(pos)
      const markerLayer= new Overlay({
        position: pos,
        positioning: 'center-center',
        element: marker,
        stopEvent:false
      })
      /**
       * 文字注释
       * @type {Overlay}
       */
      /*      const posName = new  Overlay({
              position: pos,
              element: marker,

            })*/
      this.map = new Map({
        target: map,
        interactions: defaults({
          onFocusOnly: false
        }),
        layers: [
          baiduMapLayer
        ],
        overlays: [this.popupOverlay],
        view: new View({
          projection: "EPSG:3857",    //使用这个坐标系
          center: [118.798422,32.004679],  //深圳
          zoom: 3
        })
      });
      this.map.addOverlay(markerLayer)

      // this.map.addOverlay(posName)
      this.map.on('singleclick',(e) => {
        this.handleClick(e)
      })
      this.map.on('moveend',() => {
        console.log(this.map.getView().getZoom())
      })
    },
    methods: {
      handleClick(event) {
        const coordinate = event.coordinate
        console.log(coordinate)
        // xy坐标转换为经纬度坐标
        this.coordinate = coordinate
        this.popupOverlay.setPosition(coordinate);
        this.map.addOverlay(this.popupOverlay);
        const hdms = olCoordinate.toStringHDMS(olProj.toLonLat(coordinate))
        console.log(hdms)
      }
    }
  }
</script>
<style>
  .CMap {
    width: 100%;
    height: 100vh;
    tab-index: 2;
  }
  .popup {
    width: 400px;
    height: 80px;
    border: 1px solid #9c9c9c;
    background-color: #2c3e50;
    text-align: center;
    line-height: 80px;
    border-radius: 20px;
    color: #FFFFFF;
    font-size: 14px;
    font-family: Menlo;
  }
  .marker {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid deeppink;
    background-color: #2e6da4;
  }
</style>
