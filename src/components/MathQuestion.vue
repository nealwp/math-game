<script setup lang="ts">
import { ref } from 'vue'

const generateAddend = () => {
    return Math.floor(Math.random() * 10);
}

const leftAddend = generateAddend();
const rightAddend = generateAddend();

const answer = leftAddend + rightAddend;

</script>

<template>
    <div class="flex flex-col items-center my-16">
        <div class="text-5xl">{{ leftAddend }} + {{ rightAddend }} = ?</div>
        <div>the answer is {{ answer }}</div>
    </div>
</template>

<style scoped>
</style>
