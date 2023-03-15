<script setup>
import { ref } from "vue";

import AuthInfo from "../components/AuthInfo.vue"
import AuthForm from "../components/AuthForm.vue"
import images from "../data/images";

const code = ref("");

</script>
<template>
    <div
        class=" flex flex-col items-center justify-center space-y-4 bg-slate-900 border-4 border-slate-800 rounded-lg min-h-max py-16 w-[600px]">

        <div class="flex space-x-3">
            <img :src="image" v-for="image in images" :key="image" class="w-10 h-10">
        </div>

        <AuthInfo title="Authenticator Code " description="Giriş yapmak için kodu giriniz..." />

        <AuthForm v-model="code" :handle-verify-code="handleVerifyCode" />

    </div>
</template>
<style scoped></style>