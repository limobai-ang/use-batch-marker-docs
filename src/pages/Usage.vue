<template>
  <el-container class="min-h-screen">
    <!-- 左侧菜单 -->
    <el-aside width="220px" class="border-r border-gray-200 bg-white">
      <el-menu default-active="config" class="h-full">
        <el-sub-menu index="1">
          <template #title>配置项手册</template>
          <el-menu-item index="config-usage">使用方式</el-menu-item>
          <el-menu-item index="config-options">配置结构</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>API</template>
          <el-menu-item index="api-methods">方法</el-menu-item>
          <el-menu-item index="api-types">类型定义</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <!-- 中间内容 -->
    <el-main class="px-6 py-4 bg-gray-50">
      <section>
        <h2 id="section-title-1" class="text-2xl font-bold mb-2">配置项</h2>
        <p class="text-gray-600 mb-6">
          本节介绍如何在项目中初始化 useBatchMarker 工具，以及它支持的配置项。
        </p>
        <!-- 示例代码、演示区可以添加 slot or组件 -->
      </section>
      <section>
        <h2 id="section-title-2" class="text-2xl font-bold mb-2">API 说明</h2>
        <p class="text-gray-600">
          useBatchMarker 提供了丰富的 API 接口，可用于控制批量渲染行为。
        </p>
      </section>
    </el-main>

    <!-- 右侧锚点标题树结构 -->
    <el-aside width="200px" class="border-l border-gray-200 bg-white px-4 py-6">
      <h4 class="text-gray-500 text-sm mb-2">Contents</h4>
      <el-anchor direction="vertical" affix :offset="80">
        <el-anchor-link href="#section-title-1" title="配置项" />
        <el-anchor-link href="#section-title-2" title="API 说明" />
      </el-anchor>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
