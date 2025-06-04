<template>
  <el-container class="min-h-screen">
    <!-- 左侧菜单 -->
    <el-aside width="220px" class="border-r border-gray-200 bg-white">
      <el-menu :default-active="path" router class="h-full" default-openeds="[1, 2]">
        <el-sub-menu index="1">
          <template #title>
            <strong>配置项文档</strong>
          </template>
          <el-menu-item index="/usage/config-usage">基本用法</el-menu-item>
          <el-menu-item index="config-options">属性配置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <strong>API文档</strong>
          </template>
          <el-menu-item index="api-methods">方法</el-menu-item>
          <el-menu-item index="api-types">类型定义</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <!-- 中间内容 -->
    <el-main class="bg-gray-50 px-0 py-0 h-screen">
        <el-scrollbar height="100%">
          <router-view />
        </el-scrollbar>

    </el-main>

    <!-- 右侧锚点标题树结构 -->
    <el-aside width="200px" class="border-l border-gray-200 bg-white px-4 py-6">
      <h4 class="text-gray-500 text-sm mb-2">本页目录</h4>
      <el-anchor direction="vertical" affix :offset="80">
        <el-anchor-link href="#section-title-1" title="配置项" />
        <el-anchor-link href="#section-title-2" title="API 说明" />
      </el-anchor>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';
const router = useRouter();
const path = computed(() => router.currentRoute.value.path);

</script>

<style scoped></style>
