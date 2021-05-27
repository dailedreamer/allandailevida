<template>
  <div class="portfolio">
    <Home />
    <About />
    <Project />
    <ReachMe />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import ReachMe from "../components/ReachMe";
export default {
  name: "Portfolio",
  components: {
    Home,
    About,
    Project,
    ReachMe,
  },
};

    Project</script>