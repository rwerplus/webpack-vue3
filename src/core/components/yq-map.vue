<template>
  <div ref="CMap" class="CMap"></div>
</template>
<script lang="js">
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
  export default {
    name: 'YQMap',
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
        preload: Infinity,
        source: baidu_source
      });

      this.map = new Map({
        target: map,
        interactions: defaults({
          onFocusOnly: false
        }),
        layers: [
          baiduMapLayer
        ],
        // overlays: [overlay],
        view: new View({
          projection: "EPSG:3857",    //使用这个坐标系
          center: [118.798422,32.004679],  //深圳
          zoom: 3
        })
      });
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
</style>
