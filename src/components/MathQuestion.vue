<script setup lang="ts">
import {leftAddend, rightAddend } from '../services/addition.service'
</script>

<template>
    <div class="flex flex-col items-center my-16">
        <div class="text-5xl">{{ leftAddend }} + {{ rightAddend }} = ?</div>
    </div>
</template>

<style scoped>
</style>
