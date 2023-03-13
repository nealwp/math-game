<script setup lang="ts">
import { ref } from 'vue';
import { answer } from '../services/addition.service';

let clicked = ref();
const correctIndex = Math.floor(Math.random() * 4)

const generateResponseOptions = () => {
    
    const responses: number[] = [];

    while (responses.length < 4) {
        const response = Math.floor(Math.random() * 18)
        if (response !== answer && !responses.includes(response)){
            responses.push(response)
        }
    }

    responses[correctIndex] = answer

    return responses
}

const responseOptions = generateResponseOptions()

const answerButtonClicked = (response: number) => {
    clicked.value = response;
}

</script>

<template>
    <div class="flex justify-center">
        <button
            v-for="n in 4"
            type="button" 
            class="border-2 p-10 mx-2 text-3xl rounded-lg hover:bg-teal-100 shadow-md"
            @click="answerButtonClicked(responseOptions[n-1])">
            {{ responseOptions[n - 1] }}
        </button>
    </div>
</template>

<style scoped>

</style>
