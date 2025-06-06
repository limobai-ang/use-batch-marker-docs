<template>
  <div class="p-6 space-y-6">
    <!-- 标题说明 -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">📘 API 方法说明</h2>
      <p class="text-sm text-gray-600 leading-relaxed">
        调用 <code class="px-1 py-0.5 bg-gray-100 text-sm rounded text-blue-600">useBatchMarker(map, options)</code> 方法后，返回一个控制器对象，
        你可以通过该对象调用以下方法来控制 Marker 渲染与更新流程：
      </p>
    </div>

    <!-- 方法列表 -->
    <div v-for="method in methods" :key="method.name" class="border rounded-md p-4 bg-white shadow-sm">
      <div class="flex justify-between items-center mb-2">
        <div class="text-base font-semibold text-gray-800">
          <code class="bg-gray-100 px-1 py-0.5 rounded text-sm">{{ method.name }}</code>
          <span v-if="method.signature" class="text-sm text-gray-500 ml-1">({{ method.signature }})</span>
        </div>
        <div v-if="method.returns" class="text-xs text-gray-500">
          返回值：<code>{{ method.returns }}</code>
        </div>
      </div>
      <p class="text-sm text-gray-700 leading-relaxed">{{ method.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MethodInfo {
  name: string
  signature?: string
  returns?: string
  description: string
}

const methods: MethodInfo[] = [
  {
    name: 'start',
    description: '初始化渲染逻辑，挂载 Marker 到地图，并监听地图的缩放/移动事件。该方法应在初始化后手动调用一次。'
  },
  {
    name: 'clear',
    description: '清除所有已渲染的 Marker，并解绑地图事件，释放资源。适合组件卸载或数据清空时使用。'
  },
  {
    name: 'update',
    signature: 'items: T[]',
    returns: 'void',
    description: '根据传入的数据集合，使用 ID 进行内容差异对比并进行增量更新（支持位置和 DOM 内容变化）。'
  },
  {
    name: 'getMarkers',
    returns: 'AMap.Marker[]',
    description: '获取当前已渲染的所有 Marker 实例（包含普通点和聚合点），可用于手动控制 Marker 或调试。'
  }
]
</script>
