<template>
  <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">BatchMarker 配置项说明</h1>
      <p class="mb-6 text-gray-600">
        <b>BatchMarker</b> 组件支持大批量数据高效渲染，灵活自定义 Marker 内容与聚合方式，适用于地图可视化、海量点标记等场景。<br>
      </p>
      <span class="text-green-600">优势：</span>
      <ul class="list-disc ml-6 text-base text-gray-700">
        <li>支持批量渲染，不卡顿，提升性能</li>
        <li>可自定义 Marker/聚合内容，满足多样需求</li>
        <li>支持按视野优化、智能内容对比，减少无效渲染</li>
        <li>事件绑定灵活，易于扩展</li>
      </ul>
      <el-table :data="options" border stripe class="mb-8">
        <el-table-column prop="name" label="参数名" width="150"/>
        <el-table-column prop="type" label="类型" width="220"/>
        <el-table-column prop="desc" label="说明"/>
        <el-table-column prop="required" label="必填" width="60"/>
        <el-table-column prop="default" label="默认值" width="90"/>
      </el-table>
  </div>
</template>

<script setup lang="ts">
const options = [
  {
    name: 'data',
    type: 'T[]',
    desc: '需要渲染的原始数据数组。',
    required: '是',
    default: '-'
  },
  {
    name: 'getPosition',
    type: '(item: T) => [number, number]',
    desc: '获取每个数据项的经纬度坐标。',
    required: '是',
    default: '-'
  },
  {
    name: 'renderMarker',
    type: '(item: T) => string | HTMLElement',
    desc: '自定义每个 Marker 的渲染内容。',
    required: '是',
    default: '-'
  },
  {
    name: 'enableCluster',
    type: 'boolean',
    desc: '是否启用聚合。',
    required: '否',
    default: 'false'
  },
  {
    name: 'renderClusterMarker',
    type: '(items: ClusterItem<T>) => string | HTMLElement',
    desc: '自定义聚合 Marker 的渲染内容。',
    required: '否',
    default: '-'
  },
  {
    name: 'getMarkerOffset',
    type: '(el: HTMLElement) => AMap.Pixel',
    desc: '自定义 Marker 的偏移量，适用于根据 DOM 宽高调整。',
    required: '否',
    default: '-'
  },
  {
    name: 'batchSize',
    type: 'number',
    desc: '每批渲染的 Marker 数量。',
    required: '否',
    default: '100'
  },
  {
    name: 'interval',
    type: 'number',
    desc: '每批渲染的时间间隔（毫秒）。',
    required: '否',
    default: '16'
  },
  {
    name: 'optimizeByBounds',
    type: 'boolean',
    desc: '是否只渲染视野内的 Marker。',
    required: '否',
    default: 'false'
  },
  {
    name: 'smartDiffRender',
    type: 'boolean',
    desc: '是否启用智能内容对比更新，减少无效渲染。',
    required: '否',
    default: 'false'
  },
  {
    name: 'getId',
    type: '(item: T) => string | number',
    desc: '自定义唯一 ID 提取函数。',
    required: '否',
    default: '-'
  },
  {
    name: 'compareContent',
    type: '(oldHtml: string, newHtml: string) => boolean',
    desc: '内容对比函数，用于判断 Marker 内容是否需要更新。',
    required: '否',
    default: '-'
  },
  {
    name: 'events',
    type: 'Partial<Record<string, (item: T, marker: AMap.Marker) => void>>',
    desc: '自定义事件绑定。',
    required: '否',
    default: '-'
  },
  {
    name: 'onCompleted',
    type: '() => void',
    desc: '所有 Marker 渲染完成后的回调。',
    required: '否',
    default: '-'
  },
  {
    name: 'scheduler',
    type: "'raf' | 'idle'",
    desc: '调度方式，支持 requestAnimationFrame 或 requestIdleCallback。',
    required: '否',
    default: '-'
  }
]
</script>

<style scoped>
/* 可根据需要自定义样式 */
</style>