<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();

const handleLogout = () => {
    authStore.isAuth = false;
    router.push({ name: "login" })
};
</script>
<template>
    <div class="flex flex-col items-center space-y-2">
        <h1 class="text-6xl text-emerald-600 font-bold">Başarılı!</h1>
        <span class="text-white cursor-pointer" @click="handleLogout">Çıkış yap</span>
    </div>
</template>
<style scoped></style>