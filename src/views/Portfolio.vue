<template>
  <div class="portfolio">
    <Home />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/Home";
import About from "../components/About";
export default {
  name: "Portfolio",
  components: {
    Home,
    About,
  },
};
</script>