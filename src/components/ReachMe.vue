<template>
  <div class="reachme">

    <div class="nav__reach-me">
      <label class="lbl__reach-me"> Reach me</label>
    </div>

    <div class="reach-me__content">

      <div class="reach-me__details">
        <p class="main-content">Hello everyone, feel free to reach me out if you have any questions about Development. You can also send messages about how you feel on my designs and that would help me a lot on improving them.</p>
        <p class="sub-content">Follow my social journey and stay connected</p>
        <img src="../assets/PersonalDetails/LinkedIn.png" alt="LinkedIn">
        <img src="../assets/PersonalDetails/GitHub.png" alt="GitHub">
        <img src="../assets/PersonalDetails/gmail.png" alt="Gmail">
      </div>

      <div class="reach-me__mail">
          <label for="">Name :</label>
          <input  class="input-design" type="text" placeholder="First name & Last name">
          <label for="">Email :</label>
          <input  class="input-design" type="text" placeholder="example@domain.com">
          <label for="">Message :</label>
          <textarea  class="input-design textarea--enlarge" type="text" placeholder="Hi, Your is cool"/>
          <button type="button">Send</button>
      </div>

    </div>

    <footer>
      <label for="lbl__footer">© 2021  | All Rights Reserved. Allan Daile Vida</label>
    </footer>

  </div>
</template>

<script>
export default {
  name: "ReachMe",
  data () {
    return {

    }
  },
  method: {
 
  }
};

</script>

<style lang="scss">
  @import "../assets/sass/Module/reachme";
</style>