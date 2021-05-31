<template>
  <div class="about">
    <div class="about-main">
      <div class="nav__about-me">
        <label class="lbl__about-me">About me</label>
      </div>

      <div class="about-me__main">
        <div class="about-me__img">
          <img src="../assets/PersonalDetails/profile.jpg" alt="logo">
        </div>
        <div class="about-me__details">
          <h1 class="presonal-details">
              I'm Allan Daile Vida
              Agile web developer working with different project
              In-house Systems in Fujitsu. Daile holds a 
              Bachelor Degree in Information Technology 
              from City College of Tagaytay, Philippines.
          </h1>

          <h1 class="organization-details">
              I'm proud to have collaborated with 
              my awesome School and Company:
          </h1>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">
  @import "../assets/sass/Module/about";
</style>