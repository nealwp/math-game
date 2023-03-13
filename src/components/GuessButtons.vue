<script setup lang="ts">
import { answer } from '../services/addition.service';

const correctAnswerButton = Math.floor(Math.random() * 4)

</script>

<template>
    <div class="flex justify-center">
        <button
            v-for="n in 4"
            type="button" 
            class="border-2 p-10 mx-2 text-3xl rounded-lg hover:bg-teal-100 shadow-md">
            {{ n - 1 == correctAnswerButton ? answer : 0 }}
        </button>
    </div>
</template>

<style scoped>

</style>
