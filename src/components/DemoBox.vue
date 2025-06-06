<template>
  <div class="rounded-xl border p-4 mb-6 bg-white shadow">
    <div class="mb-4">
      <slot></slot>
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1" title="代码示例" class="border-b">
        <template #icon>
          <div class="flex items-center space-x-2 text-gray-500 text-base">
            <el-icon @click.stop="copy" class="text-gray-500 hover:text-gray-700">
              <CopyDocument />
            </el-icon>
            <el-icon class="text-gray-500 hover:text-gray-700">
              <View />
            </el-icon>
          </div>
        </template>
        <pre class="bg-gray-100 rounded p-2 overflow-auto text-sm">
          <MarkdownViewer :content="source" lang="vue"></MarkdownViewer>
        </pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import { CopyDocument, View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
const props = defineProps<{ source: string }>()
const activeNames = ref([])
const copy = () => {
  navigator.clipboard.writeText(props.source).then(() => {
    ElMessage.success('代码已复制到剪贴板')
  }).catch(() => {
    ElMessage.error('复制失败，请手动复制')
  })
}
</script>
