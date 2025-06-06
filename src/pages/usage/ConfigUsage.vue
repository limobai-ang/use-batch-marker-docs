<template>
  <div class="p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">🎯 基础用法</h3>

    <!-- 引导区：高德地图引入提示 -->
    <section class="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
      <strong>📌 注意：</strong>使用 <code>useBatchMarker</code> 前，请确保你已在 HTML 中引入高德地图 JS API：
      <pre class="bg-white border rounded p-3 mt-2 text-xs overflow-auto">
&lt;script src="https://webapi.amap.com/maps?v=2.0&key=你的Key"&gt;&lt;/script&gt;
      </pre>
      <p class="mt-2">
        👉 你可以在 <a href="https://lbs.amap.com/api/jsapi-v2/summary" target="_blank"
          class="text-blue-600 underline">高德地图官网</a> 申请 Key 并查看 API 文档。
      </p>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📦 安装</h2>
      <p class="text-gray-700 mb-4">
        你可以通过 <code class="bg-gray-100 px-1 rounded">npm</code>、<code class="bg-gray-100 px-1 rounded">yarn</code> 或
        <code class="bg-gray-100 px-1 rounded">pnpm</code> 快速安装 <strong>use-batch-marker</strong> 库，支持在 Vue / React /
        原生项目中引入并使用。
      </p>
      <pre class="bg-gray-100 rounded p-2 overflow-auto text-sm">
        <MarkdownViewer :content="textInstall" lang="bash"></MarkdownViewer>
      </pre>


    </div>
    <!-- 基础用法 -->
    <section>
      <p class="text-gray-700 leading-relaxed mb-4">
        <code>useBatchMarker</code> 是一个用于高性能渲染大量 <code>AMap.Marker</code> 的实用工具，适用于 Vue、React 和原生 JS 项目。
        以下示例展示了最简使用方式：传入数据源和渲染配置即可将标记点批量绘制在地图上。
      </p>

      <!-- 示例组件 -->
      <DemoBox :source="demoSource" title="基础示例" description="渲染一组简单的文本标记点。">
        <BasicUsage />
      </DemoBox>

      <!-- 说明卡片 -->
      <div class="mt-6 bg-gray-50 border border-gray-200 rounded p-4">
        <h2 class="text-lg font-semibold mb-2 text-gray-800">📝 参数说明</h2>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li><code>getPosition</code>：从每个数据项中提取经纬度坐标。</li>
          <li><code>renderMarker</code>：定义每个 Marker 的 DOM 内容，可返回字符串或元素。</li>
          <li><code>start()</code>：触发初次渲染并绑定地图事件。</li>
        </ul>
      </div>

      <!-- 跳转推荐 -->
      <div class="mt-6 text-sm text-gray-600">
        想了解更多功能？你可以继续查看：
        <router-link to="config-options" class="text-blue-600 hover:underline">聚合渲染</router-link>、
        <router-link to="config-options" class="text-blue-600 hover:underline">动态更新</router-link> 或
        <router-link to="config-options" class="text-blue-600 hover:underline">高级配置</router-link>。
      </div>
    </section>
  </div>
</template>

<script setup>
import BasicUsage from '@/demos/BasicUsage.vue'
import demoSource from '@/demos/BasicUsage.vue?raw'
import DemoBox from '@/components/DemoBox.vue'
import MarkdownViewer from '@/components/MarkdownViewer.vue'


const textInstall = `
npm install use-batch-marker
# 或者使用 yarn / pnpm
# yarn add use-batch-marker
# pnpm add use-batch-marker
`
</script>
