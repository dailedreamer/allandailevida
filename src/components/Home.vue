<template>
  <div class="home">
    <div>
      <img src="" alt="">

      <ul class="nav-menu">
        <li class="nav-a">
          Home
        </li>
   
      </ul>

      <!-- <ul class="nav-min">
        <router-link :to="{ name: 'Admin' }" class="nav-a">
          <font-awesome-icon icon="bars" size="2x" class="hamburger" />
          </router-link>
      </ul> -->
    </div>

    <div  class="details details--location">
      <h2 class="details__h2">Hi, I'm Daile</h2>
      <h1 class="details__h1">Web Developer</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
  @import "../assets/sass/Module/home";
</style>