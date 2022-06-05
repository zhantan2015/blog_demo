<template>
  <div class="app__outer">
    <transition name="fade" mode="in-out">
      <header v-show="!cover_show">
        <h1>守望者旃檀</h1>
      </header>
    </transition>
    <router-view />
  </div>
</template>
<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

let cover_show = computed(() => store.state.cover_show);
</script>

<style>
/* color: #2c3e50; */
@font-face {
  font-family: fzxk;
  src: url("./assets/fonts/fzxk.ttf");
}
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #224488;
}

.app__outer {
  transform-style: preserve-3d;
  transform: perspective(888px);
}

#app {
  position: relative;
  margin: auto;
}

header {
  color: #2c3e50;
  margin: 0.8rem;
  text-align: center;
  background: #eee;
  border-radius: 0.6rem;
  padding: 1rem 0 1.6rem;
  box-shadow: 0 3px 22px #333666;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotateX(-45deg) translateY(-100%);
  box-shadow: 0 0 0 #33333333;
}
</style>
