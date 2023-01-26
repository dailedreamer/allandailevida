<template>
  <div class="reachme">

    <div class="nav__reach-me">
      <label class="lbl__reach-me"> Reach me</label>
    </div>

    <div class="reach-me__content">

      <div class="reach-me__details">
        <p class="main-content">Hello everyone, feel free to reach me out if you have any questions about Development. You can also send messages about how you feel on my designs and that would help me a lot on improving them.</p>
        <p class="sub-content">Follow my social journey and stay connected</p>

          <div class="card-ctr">  
            <div class="card">
              <div class="img-ctr">
                <img class="img-social-media-person" src="../assets/PersonalDetails/PersonSocialMedia.png" alt="LinkedIn"/>
              </div>
              <div class="btn-multi">
                <button><img class="img-social-media gmail" src="../assets/PersonalDetails/gmail.png" alt="Gmail"></button>
                <button><img class="img-social-media LinkedIn" src="../assets/PersonalDetails/LinkedIn.png" alt="LinkedIn"></button>
                <button><img class="img-social-media Upwork" src="../assets/PersonalDetails/upwork.png" alt="Upwork"></button>
                <button><img class="img-social-media Sitebio" src="../assets/PersonalDetails/siteBio.png" alt="SiteBio"></button>
              </div>
            </div>
          </div>
      </div>

      <div class="reach-me__mail">
          <h3><img class="img-ContactImage" src="../assets/PersonalDetails/MailHand.svg" alt="ContactImage"/>
          Please leave a Message</h3>
          <br>
          <label for="">Name :</label>
          <input  class="input-design" type="text" placeholder="First name & Last name">
          <label for="">Email :</label>
          <input  class="input-design" type="text" placeholder="example@domain.com">
          <label for="">Message :</label>
          <textarea  class="input-design textarea--enlarge" type="text" placeholder="Hi, Your work is cool"/>
          <div class="button-send">
            <a href="">Send</a>
          </div>
      </div>
      
    </div>


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