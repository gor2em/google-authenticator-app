<script setup>
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-900 to-black">

    <div
      class="flex flex-col items-center justify-center space-y-6 border-4 border-slate-600 hover:border-white transition-all duration-200 rounded-lg h-96 w-[600px]">

      <h4 class="text-2xl font-bold text-white tracking-widest">QR oku ve kodu gir!</h4>

      <img src="" class="w-32 h-32" alt="">

      <!--input length-->
      <input type="text" placeholder="Kodu girin."
        class="bg-transparent outline-none text-slate-600 border-2 p-2 border-slate-600 w-60 focus:border-emerald-400 transition-all duration-200 focus:text-white">

      <!--button active and color-->
      <button class="bg-emerald-400 w-60 py-2 font-bold">Kodu Gonder</button>
    </div>

  </div>
</template>

