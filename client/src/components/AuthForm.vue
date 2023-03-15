<script setup>
import { computed } from "vue";
const emits = defineEmits(['update:modelValue']);

import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();

const props = defineProps({
    modelValue: String,
    handleVerifyCode: Function
})

const buttonStatus = computed(() => {
    if (props.modelValue.length != 6) {
        return false;
    }

    return true;
});

</script>
<template>
    <form class="flex items-center flex-col space-y-4 w-full"
        @submit.prevent="authStore.verifyAuthenticator(props.modelValue)">

        <input :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)"
            placeholder="lütfen kodu girin..."
            class="text-xs w-64 py-3 px-4 bg-transparent outline-none border-2 transition-all duration-300 focus:border-emerald-600 focus:text-slate-200 text-slate-400 border-slate-600 rounded-full" />

        <button type="submit"
            class="w-64 border-none outline-none py-2 font-semibold rounded-full text-white transition-colors ease-linear duration-500"
            :class="buttonStatus ? 'bg-emerald-600' : 'bg-slate-400'" :disabled="!buttonStatus">giriş
            yap</button>

    </form>
</template>
<style scoped></style>