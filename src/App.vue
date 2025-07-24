<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DefaultHeader from './layout/DefaultHeader.vue'
</script>

<template>
  <default-header></default-header>
  <RouterView />
</template>
<style>
@import '@/scss/common.scss';
</style>
