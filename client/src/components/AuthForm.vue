<script setup>
import { computed } from "vue";
const emits = defineEmits(['update:modelValue']);

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
    <form class="flex items-center flex-col space-y-6 w-full" @submit.prevent="handleVerifyCode(props.modelValue)">

        <input :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)"
            placeholder="lütfen kodu girin..."
            class="text-xs w-72 py-3 px-2 bg-transparent outline-none border-2 transition-all duration-300 focus:border-emerald-400 focus:text-slate-200 text-slate-400 border-slate-600 rounded-lg" />

        <button type="submit"
            class="w-72 border-none outline-none py-2 font-bold rounded-lg text-white transition-colors ease-linear duration-500"
            :class="buttonStatus ? 'bg-emerald-400' : 'bg-slate-400'" :disabled="!buttonStatus">giriş
            yap</button>

    </form>
</template>
<style scoped></style>