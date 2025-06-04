<template>
    <div v-html="renderedHtml" class="markdown-body"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { createHighlighter } from 'shiki'
const props = defineProps<{ content: string; lang?: string }>()
const renderedHtml = ref('')

watchEffect(async () => {
    const highlighter = await createHighlighter({
        themes: ['min-light'],
        langs: ['javascript', 'vue', 'html', 'css', 'json', 'bash', 'typescript'],
    })
    const html = highlighter.codeToHtml(props.content.trim(), {
        lang: props.lang ?? 'vue',
        theme: 'min-light'
    })
    
    renderedHtml.value = html
})
</script>

<style scoped>
.markdown-body {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}

.markdown-body :deep(pre) {
    background-color: transparent !important;
}
</style>