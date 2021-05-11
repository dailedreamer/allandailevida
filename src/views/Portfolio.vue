<template>
  <div class="portfolio">
    <Home />
    <About />
    <ReachMe />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/Home";
import About from "../components/About";
import ReachMe from "../components/ReachMe";
export default {
  name: "Portfolio",
  components: {
    Home,
    About,
    ReachMe,
  },
};
</script>