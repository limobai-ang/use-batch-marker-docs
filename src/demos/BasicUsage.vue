<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useBatchMarker } from 'use-batch-marker'
import { createApp, h } from 'vue';
import ClusterMarker from './ClusterMarker.vue';
let map: AMap.Map
const createAMap = async () => {
  map = new AMap.Map("container", {
    // 设置地图容器id
    viewMode: "3D", // 是否为3D地图模式
    zoom: 13, // 初始化地图级别
    center: [116.397428, 39.90923], // 初始化地图中心点位置
  });
  initAMap();
}

function getMockMarkerList(count: number = 10000): MockMarker[] {
  const typeList = Array.from({ length: 10 }, (_, i) => `type${i + 1}`);
  const result: MockMarker[] = [];

  // 北京经纬度范围（大致）
  const minLng = 115.7;
  const maxLng = 117.4;
  const minLat = 39.4;
  const maxLat = 41.1;

  for (let i = 0; i < count; i++) {
    const lng = +(Math.random() * (maxLng - minLng) + minLng).toFixed(6);
    const lat = +(Math.random() * (maxLat - minLat) + minLat).toFixed(6);
    const type = typeList[Math.floor(Math.random() * typeList.length)];

    result.push({
      id: i + 1,
      lng,
      lat,
      type,
      label: `点位 ${i + 1}`
    });
  }

  return result;
}

const initAMap = () => {
  const markerList = getMockMarkerList(1000);
  const { start, clear, update, getMarkers } = useBatchMarker(map, {
    data: markerList,
    getPosition: item => [item.lng, item.lat],
    renderMarker: item => `<div class="marker marker-${item.type}">${item.label}</div>`,
    getMarkerOffset: (element) => {
      // 判断element 否是 HTMLElement
      if (!(element instanceof HTMLElement)) return new AMap.Pixel(0, 0);
      // 获取元素的宽度和高度
      const rect = element.getBoundingClientRect();
      return new AMap.Pixel(-rect.width / 2, -rect.height);
    },
    // 开启分批渲染
    sliceRender: true,
    batchSize: 10,
    // 开启边缘优化
    optimizeByBounds: true,
    scheduler: 'idle', // 使用空闲时间渲染
    // 注册点位事件
    events: {
      click: item => {
        console.log(item)
      }
    },
    // 开启聚合
    enableCluster: true,
    renderClusterMarker(items) {
      const container = document.createElement('div');
      const app = createApp({
        render: () => h(ClusterMarker, { items })
      });
      app.mount(container);
      return container
    },

    // 点位渲染完成时的回调
    onCompleted() {
      console.log('点位渲染完成onCompleted');
    }
  });

  start();

  map.on('moveend', () => {
    const markers = getMarkers()
  });
  map.on('click', (ev) => {

    //触发事件的地理坐标，AMap.LngLat 类型
    var lnglat = ev.lnglat;
    console.log(lnglat, '地图点击事件');
  });
}


onMounted(() => {
  createAMap()
})
onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 60vh;
}
</style>

<style>
.marker {
  width: 30px;
  height: 30px;
  background-color: gray;
  /* 默认颜色，类型覆盖 */
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.cluster-popup {
  position: relative;
  display: inline-block;
}

.cluster-bubble {
  background: white;
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.4;
  position: relative;
}

.cluster-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 20px;
  border-width: 8px 8px 0 8px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

/* 内容字体正向显示 */
.marker::after {
  content: attr(data-id);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(45deg) translate(-50%, -50%);
  color: #fff;
}

/* 类型样式 */
.marker-type1 {
  background-color: #409EFF;
  /* 蓝色 */
}

.marker-type2 {
  background-color: #67C23A;
  /* 绿色 */
}

.marker-type3 {
  background-color: #E6A23C;
  /* 橙色 */
}
</style>