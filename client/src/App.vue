<script setup>
import { ref } from "vue";

import AuthInfo from "./components/AuthInfo.vue"
import AuthForm from "./components/AuthForm.vue"

const code = ref("");

const handleVerifyCode = (code) => {
  alert(code);
}


</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-900 to-black px-8">

    <div
      class=" flex flex-col items-center justify-center space-y-6 bg-slate-900 border-4 border-slate-800 rounded-lg min-h-max py-16 w-[600px]">

      <AuthInfo title="Authenticator kodu" description="giriş yapmak için kod gerekli..." />

      <AuthForm v-model="code" :handle-verify-code="handleVerifyCode" />

    </div>

  </div>
</template>

