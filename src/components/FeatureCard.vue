<template>
    <el-col :span="12" class="mb-6">
        <el-card shadow="hover" class="rounded-xl h-full">
            <div class="text-3xl mb-3">{{ icon }}</div>
            <div class="text-xl font-semibold text-indigo-600 mb-1">{{ title }}</div>
            <div class="text-gray-600 text-sm text-center">{{ desc }}</div>
        </el-card>
    </el-col>
</template>

<script setup lang="ts">
const { icon, title, desc } = defineProps<{
    icon: string;
    title: string;
    desc: string;
}>();
</script>

<style scoped></style>