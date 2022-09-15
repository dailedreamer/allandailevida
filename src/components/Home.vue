<template>
  <div class="home">
    <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      <img src="../assets/PersonalDetails/DaileDreamerlogo.png" alt="logo">

      <ul class="navbar-menu" >
        <li class="navbar-a">
          Home
        </li>
        <li class="navbar-a">
          About
        </li>
        <li class="navbar-a">
          Project
        </li>
        <li class="navbar-a">
          Reach me
        </li>
   
      </ul>

      <!-- <ul class="nav-min">
        <router-link :to="{ name: 'Admin' }" class="nav-a">
          <font-awesome-icon icon="bars" size="2x" class="hamburger" />
          </router-link>
      </ul> -->
    </div>
<!-- 
    <div  class="details details--location">
      <h2 class="details__h2">Hi, I'm Daile</h2>
      <h1 class="details__h1">Web Developer</h1>
    </div>

    <div class="button-contact">
      <a href="">Let's do this</a>
    </div> -->

  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted(){
  
  },
  method: {

  }
};

</script>

<style lang="scss">
  @import "../assets/sass/Module/home";
</style>