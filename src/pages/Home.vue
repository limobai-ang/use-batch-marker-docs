<template>
  <el-container class="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
    <el-main class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
        use-batch-marker
      </h1>
      <p class="text-lg md:text-xl text-gray-700 mb-6">
        🚀 高性能批量渲染 <span class="font-mono">AMap.Marker</span> 工具，适用于 Vue / React / 原生项目。
      </p>
      <p class="text-gray-500 mb-12">
        支持聚合、视野裁剪、差异更新与切片渲染
      </p>

      <el-row :gutter="20" justify="center">
        <FeatureCard icon="⚡" title="切片渲染支持" desc="渲染大量地图标记时自动分片处理，提升页面响应性能。" />
        <FeatureCard icon="✨" title="聚合显示" desc="自动分组并以聚合图标展示，提升性能与视觉效果。" />
        <FeatureCard icon="👓" title="视野范围裁剪" desc="仅渲染用户当前视野范围内的标记，节省资源。" />
        <FeatureCard icon="🔁" title="数据增量更新" desc="通过智能对比，仅更新变动数据，避免全量刷新。" />
      </el-row>

      <div class="mt-12">
        <router-link to="/usage">
          <el-button color="#626aef" type="primary" size="large">
            立即开始使用
          </el-button>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { ElCard, ElRow, ElCol } from 'element-plus'
import FeatureCard from '@/components/FeatureCard.vue'
</script>

<style scoped></style>
