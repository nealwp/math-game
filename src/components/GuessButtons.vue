<script setup lang="ts">
import { answer } from '../services/addition.service';

const generateWrongAnswers = () => {
    const wrongAnswers: number[] = []
    while (wrongAnswers.length < 4){
        const wrongAnswer = Math.floor(Math.random() * 18)
        if (wrongAnswer !== answer && !wrongAnswers.includes(wrongAnswer)){
            wrongAnswers.push(wrongAnswer)
        }
    }
    return wrongAnswers
}

const wrongAnswers = generateWrongAnswers()

const correctAnswerButtonIndex = Math.floor(Math.random() * 4)

</script>

<template>
    <div class="flex justify-center">
        <button
            v-for="n in 4"
            type="button" 
            class="border-2 p-10 mx-2 text-3xl rounded-lg hover:bg-teal-100 shadow-md">
            {{ n - 1 == correctAnswerButtonIndex ? answer : wrongAnswers[n - 1] }}
        </button>
    </div>
</template>

<style scoped>

</style>
