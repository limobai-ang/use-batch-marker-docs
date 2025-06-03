<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">基础用法</h1>
    <DemoBox :source="demoSource">
      <BasicUsage />
    </DemoBox>
  </div>
</template>

<script setup>
import BasicUsage from '@/demos/BasicUsage.vue'
import demoSource from '@/demos/BasicUsage.vue?raw'
import DemoBox from '@/components/DemoBox.vue'
</script>