<template>
  <div class="main-container">
    <div class="main-main">
      <div class="box">
        <img src="../assets/maltese.jpg" alt="real-1" class="real-1" />
        <img src="../assets/sample_icon1.png" alt="icon1" class="icon-1" />
        <div class="text-group">
          <div class="main-text"><span>DogMoji</span></div>
          <div class="main-text2"><span>Make your dog an emoji!</span></div>
          <b-button variant="warning" class="button" size="lg"
            >Let's start!
          </b-button>
        </div>
        <img src="../assets/sample2.jpg" alt="real-2" class="real-2" />
        <div class="icon-2"></div>
        <img src="../assets/sample3.jpg" alt="real-3" class="real-3" />
        <div class="icon-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>

<style scoped>
.box {
  height: 100vh;
  width: 95%;
  max-width: 500px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 5vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-items: center;
}
.main-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.main-main {
  gap: 10px;
  width: 100%;
  height: 982px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  background-image: url("../assets/background.png");
  background-size: cover;
}
.real-1 {
  position: absolute;
  width: 169px;
  height: 169px;
  left: calc(50% - 169px / 2 + 151.5px);
  top: calc(50% - 169px / 2 - 317.5px);

  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  border-radius: 89px;
}
.icon-1 {
  position: absolute;
  width: 114px;
  height: 114px;
  left: 254px;
  top: 173px;

  background: #fdffa2;
  object-fit: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 57px;
}
.text-group {
  top: 242px;
  left: 289px;
  width: 934px;
  height: 311px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  align-items: center;
  flex-direction: column;
}
.main-text {
  color: rgba(251, 234, 88, 1);
  width: 934px;
  height: auto;
  position: absolute;
  font-size: 96px;
  font-style: Bold;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  text-shadow: 1px 2px 2px #888;
}
.main-text2 {
  top: 130px;
  left: 221px;
  color: rgba(0, 0, 0, 1);
  width: 491px;
  height: auto;
  position: absolute;
  font-size: 36px;
  font-style: Bold;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  text-shadow: 1px 2px 2px #bbb;
}

.button {
  position: absolute;
  top: 190px;
  filter: drop-shadow(1px 2px 2px #bbb);
}
.main-text4 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Lexend;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  text-decoration: none;
}
.real-2 {
  position: absolute;
  width: 170px;
  height: 170px;
  left: 263px;
  top: 724px;

  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 85px;
}
.icon-2 {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 370px;
  top: 679px;

  background: url(../assets/sample_icon2.png), #fdffa2;
  background-size: 70px;
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 49px;
}
.real-3 {
  position: absolute;
  width: 141px;
  height: 141px;
  left: 29px;
  top: 578px;

  object-fit: cover;
  object-position: top;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 61px;
}
.icon-3 {
  position: absolute;
  width: 93px;
  height: 93px;
  left: 125px;
  top: 660px;

  background: url(../assets/sample_icon3.png), #fdffa2;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 46.5px;
}
</style>

<!-- <template>
  <div class="main-container">
    <div class="main-main">
      <div class="main-frame1"></div>
      <img src="../assets/maltese.jpg" alt="maltese" class="real-1" />
      <img
        src="../assets/sample_icon1.png"
        alt="sample_icon1.png"
        class="icon-1"
      />
      <div class="main-group3">
        <span class="name">DogMoji</span>
        <span class="content">Make your dog an emoji!</span>
        <button class="start-button">
          <span class="button-content"><span>Let’s start!</span></span>
        </button>
      </div>
      <img src="../assets/sample2.jpg" alt="sample2" class="real-2" />
      <div class="icon-2"></div>
      <img src="../assets/black_dog.jpg" alt="sample3" class="real-3" />
      <div class="icon-3"></div>
      <img src="../assets/paw-yellow.png" alt="paw" class="paw" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 100vh;
  align-items: center;
  flex-direction: column;
}
.main-main {
  gap: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  background-image: url("../assets/background.png");
  background-size: cover;
}
.main-frame1 {
  top: 116px;
  left: 578px;
  width: 100px;
  height: 100px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.real-1 {
  position: absolute;
  width: 395px;
  height: 395px;
  left: calc(50% - 395px / 2 + 539.5px);
  top: calc(50% - 395px / 2 - 91.5px);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  border-radius: 73px;
  object-fit: cover;
}
.real-2 {
  position: absolute;
  width: 330px;
  height: 330px;
  left: 676px;
  top: 83px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 95px;
  object-fit: cover;
}

.real-3 {
  position: absolute;
  width: 265px;
  height: 265px;
  left: 363px;
  top: 630px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 61px;
  object-fit: cover;
}
.icon-1 {
  position: absolute;
  width: 288px;
  height: 287px;
  left: 1008px;
  top: 551px;

  background: #fdffa2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  object-fit: cover;
}
.icon-2 {
  position: absolute;
  width: 191px;
  height: 194px;
  left: 532px;
  top: 77px;

  background: url(../assets/sample_icon2.png), #fdffa2;
  background-size: 155px;
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
}

.icon-3 {
  position: absolute;
  width: 203px;
  height: 211px;
  left: 588px;
  top: 732px;

  background: url(../assets/sample_icon3.png), #fdffa2;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 170px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 62px;
}
.main-group3 {
  top: 329px;
  left: 0px;
  width: 934px;
  height: 289px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.name {
  top: 93px;
  color: rgb(38, 38, 38);
  right: -277px;
  width: 934px;
  height: auto;
  position: absolute;
  font-size: 96px;
  font-style: Bold;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.content {
  top: 202px;
  left: 283px;
  color: rgb(89, 89, 89);
  width: 491px;
  height: auto;
  position: absolute;
  font-size: 36px;
  font-style: Bold;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.start-button {
  gap: 10px;
  top: 162px;
  right: 19px;
  display: flex;
  padding: 20px 48px;
  position: absolute;
  align-items: flex-start;
  border-radius: 4px;
  background-color: rgba(251, 234, 88, 1);
  border-style: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button-content {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Medium;
  text-align: left;
  font-family: Lexend;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  text-decoration: none;
}
.main-polygon2 {
  top: 73.09272003173828px;
  left: 1023.7996826171875px;
  width: 52px;
  height: 54px;
  rotate: 45deg;
  position: absolute;
}
.main-polygon8 {
  top: 793.9488525390625px;
  left: 119.70709991455078px;
  width: 52px;
  height: 54px;
  position: absolute;
}
.main-polygon7 {
  top: 666.6641235351562px;
  left: 856.7377319335938px;
  width: 52px;
  height: 54px;
  rotate: 160deg;
  position: absolute;
}
.main-polygon5 {
  top: 716.2874145507812px;
  left: 1365.2640380859375px;
  width: 52px;
  height: 54px;
  position: absolute;
}
.main-polygon6 {
  top: 950.5469360351562px;
  left: 955.1228637695312px;
  width: 52px;
  height: 54px;
  position: absolute;
}
.main-polygon3 {
  top: 185.76168823242188px;
  left: 117px;
  width: 52px;
  height: 54px;
  rotate: 270deg;
  position: absolute;
}
.main-polygon4 {
  top: 304.4760437011719px;
  left: 362.8023986816406px;
  width: 52px;
  height: 54px;
  rotate: 80deg;
  position: absolute;
}
.main-polygon9 {
  top: 153.18133544921875px;
  left: 1348px;
  width: 52px;
  height: 54px;
  position: absolute;
}
.paw {
  top: 411px;
  left: 101px;
  width: 161px;
  height: 161px;
  position: absolute;
  filter: drop-shadow(1px 5px 5px #aaa);
}
</style> -->
