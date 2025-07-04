<template>
  <div class="p-6">
    <!-- 标题区 -->
    <h1 class="text-2xl font-bold text-gray-900 mb-3">配置项说明</h1>
    <p class="text-gray-600 text-base leading-relaxed mb-4">
      <b class="font-semibold text-gray-800">BatchMarker</b>
      是一个用于高性能批量渲染 AMap.Marker 的工具方法，适用于海量点标记、地图可视化等场景。
      通过灵活配置数据源、渲染逻辑、聚合行为与渲染策略，可以在保持性能的同时实现自定义展示。
    </p>
    <!-- 优势模块卡片样式 -->
    <div class="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
      <h2 class="text-lg font-semibold text-green-500 mb-4 flex items-center gap-2">
        主要优势
      </h2>
      <div class="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-base leading-relaxed">
        <div class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✔️</span>
          <span>支持切片渲染，不卡顿，提升大数据渲染性能</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✔️</span>
          <span>可自定义 Marker 与聚合内容，满足多样业务需求</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✔️</span>
          <span>支持按地图视野范围进行裁剪优化，减少冗余渲染</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✔️</span>
          <span>启用智能内容对比更新，避免无效 DOM 重建</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-green-500 mt-1">✔️</span>
          <span>事件绑定灵活，可与业务逻辑深度集成</span>
        </div>
      </div>
    </div>



    <!-- 表格区域 -->
    <el-table :data="options" border stripe class="text-sm" style="font-size: 14px;">
      <el-table-column prop="name" label="参数名" width="160" />
      <el-table-column prop="type" label="类型" width="250" />
      <el-table-column prop="desc" label="说明" />
      <el-table-column prop="required" label="必填" width="60" align="center" />
      <el-table-column prop="default" label="默认值" width="90" align="center" />
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
    desc: '自定义每个 Marker 的渲染内容（HTML 字符串或 DOM 元素）。',
    required: '是',
    default: '-'
  },
  {
    name: 'enableCluster',
    type: 'boolean',
    desc: '是否启用聚合显示。',
    required: '否',
    default: 'false'
  },
  {
    name: 'renderClusterMarker',
    type: '(items: ClusterItem<T>) => string | HTMLElement',
    desc: '自定义聚合点的渲染内容（接收聚合后的点集合）。',
    required: '否',
    default: '-'
  },
  {
    name: 'getMarkerOffset',
    type: '(el: HTMLElement) => AMap.Pixel',
    desc: '自定义 Marker 的偏移量，适用于根据 DOM 尺寸动态计算位置。',
    required: '否',
    default: '-'
  },
  {
    name: 'batchSize',
    type: 'number',
    desc: '每批次渲染的 Marker 数量。',
    required: '否',
    default: '100'
  },
  {
    name: 'interval',
    type: 'number',
    desc: '每批次之间的时间间隔（单位：ms）。',
    required: '否',
    default: '16'
  },
  {
    name: 'optimizeByBounds',
    type: 'boolean',
    desc: '是否仅渲染地图视野内的点，提高渲染性能。',
    required: '否',
    default: 'false'
  },
  {
    name: 'smartDiffRender',
    type: 'boolean',
    desc: '是否启用智能内容对比，避免重复渲染相同内容。',
    required: '否',
    default: 'false'
  },
  {
    name: 'getId',
    type: '(item: T) => string | number',
    desc: '自定义获取唯一 ID 的方法，用于差异更新识别。',
    required: '否',
    default: '-'
  },
  {
    name: 'compareContent',
    type: '(oldHtml: string, newHtml: string) => boolean',
    desc: '对比新旧渲染内容，判断是否需要更新。',
    required: '否',
    default: '-'
  },
  {
    name: 'events',
    type: 'Partial<Record<string, (item: T, marker: AMap.Marker) => void>>',
    desc: '为每个 Marker 绑定事件（如 click、mouseover 等）。',
    required: '否',
    default: '-'
  },
  {
    name: 'onCompleted',
    type: '() => void',
    desc: '所有 Marker 渲染完成后的回调函数。',
    required: '否',
    default: '-'
  },
  {
    name: 'scheduler',
    type: "'raf' | 'idle'",
    desc: '渲染调度策略，可选值为 requestAnimationFrame 或 requestIdleCallback。',
    required: '否',
    default: 'raf'
  }
]
</script>

<style scoped>
/* 如果使用 Tailwind，可以省略大部分自定义样式 */
</style>
