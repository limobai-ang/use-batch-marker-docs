<template>
  <div class="rounded-xl border p-4 mb-6 bg-white shadow">
    <div class="mb-4">
      <slot />
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="查看源码" name="1">
        <pre class="bg-gray-100 rounded p-2 overflow-auto text-sm">
          <code>{{ source }}</code>
        </pre>
        <el-button size="small" @click="copy">复制代码</el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ source: string }>()
const activeNames = ref([])
const copy = () => navigator.clipboard.writeText(props.source)
</script>
