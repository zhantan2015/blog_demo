<template>
  <div class="home" mode="out-in">
    <transition name="cover">
      <Cover v-if="cover_show" @cover_hide="cover_show = false"></Cover>
    </transition>
  </div>
</template>

<script setup>
// @ is an alias to /src
import Cover from "@/components/Cover";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
let cover_show = computed(() => store.state.cover_show);
</script>

<style lang="less" scoped>
.cover-leave-active {
  transition: all, 0.3s ease-in;
}

.cover-leave-to {
  transform: translateY(-100%);
}
</style>
