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

    <div class="home-about reveal">
      <div  class="details details--location">
        <h2 class="details__h2">Hi, I'm Allan Daile</h2>
        <span class="details__h1" >{{ typeValue }}</span>
        <span class="details__span" :class="{'typing': typeStatus}">&nbsp;</span>
      </div>

      <div class="personal__img"> 
        <img src="../assets/PersonalDetails/meAllanDaile.png" alt="logo">
      </div>

      <div class="button-contact">
        <a href="">Let's do this</a>
      </div>
    </div>

  </div>
</template>

<script>
import { setTimeout } from 'timers';
import { onMounted } from 'vue';
//import { animate,spring } from 'motion';
  onMounted(() => {
    console.log('sadsadasdasd');
    // const animation = animate(".box", {scale:1.1},
    // {
    //   duration: 1,
    //   easing: spring(),
    //   repeat: Infinity,
    //   direction: 'alternate',
    // });
  })
export default {
  name: "Home",

  data: () => {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      typeValue: '',
      typeStatus: false,
      typeArray: ['Software Engineer', 'Love Website Design ', 'Full Stack Developer',  'a Casual Photographer', 'Learning Digital Currency'], // gagawa ako ng per image ko
      typingSpeed: 150,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  mounted() {
  },
};
  
</script>

<style lang="scss">
  @import "../assets/sass/Module/home";
</style>