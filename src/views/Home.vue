<template>
  <div class="home">
    <Cover></Cover>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Cover,
  },
});
</script>
