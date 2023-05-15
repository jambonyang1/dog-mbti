<template>
  <div>
    <div class="test-app">
      <div class="background"></div>
      <div class="main-page">
        <div class="main-page-deco">
          <div class="main-subtitle-deco">
            <svg class="svg">
              <defs>
                <path
                  id="text-curve"
                  class="path"
                  d="M 155 50 C 230 5 330 5 400 50"
                ></path>
              </defs>
              <text x="0" y="100">
                <textPath href="#text-curve">
                  우리 강아지의 높은 점수를 확인하자!
                </textPath>
              </text>
            </svg>
          </div>
          <div class="main-subtitle">AI가 본 우리 강아지 외모 순위는?</div>
          <div class="main-title">DOG-SCORE</div>

          <b-container>
            <b-row class="justify-content-md-center">
              <b-col md="auto"
                ><img class="image_real" src="../assets/sample1.jpg"
              /></b-col>
              <b-col md="2"
                ><img class="image_arrow" src="../assets/arrow.png"
              /></b-col>
              <b-col md="auto"
                ><img class="image_pic_1" src="../assets/sample_icon1.png"
              /></b-col>
            </b-row>
          </b-container>
          <b-container>
            <b-row class="justify-content-md-center">
              <b-col md="auto"
                ><img class="image_real" src="../assets/sample2.jpg"
              /></b-col>
              <b-col md="2"
                ><img class="image_arrow" src="../assets/arrow.png"
              /></b-col>
              <b-col md="auto"
                ><img class="image_pic_1" src="../assets/sample_icon2.png"
              /></b-col>
            </b-row>
          </b-container>
          <b-container>
            <b-row class="justify-content-md-center">
              <b-col md="auto"
                ><img class="image_real" src="../assets/sample3.jpg"
              /></b-col>
              <b-col md="2"
                ><img class="image_arrow" src="../assets/arrow.png"
              /></b-col>
              <b-col md="auto"
                ><img class="image_pic_3" src="../assets/sample_icon3.png"
              /></b-col>
            </b-row>
          </b-container>
          <table>
            <tbody>
              <tr class="table_grid">
                <td class="td_right">
                  <img
                    class="image_real"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample1.jpg"
                  />
                </td>
                <td>
                  <img
                    class="image_arrow"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/icon/arrow.png"
                  />
                </td>
                <td class="td_left">
                  <img
                    class="image_pic_1"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample_icon1.png"
                  />
                </td>
              </tr>

              <tr class="table_grid">
                <td class="td_right">
                  <img
                    class="image_real"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample2.jpg"
                  />
                </td>
                <td>
                  <img
                    class="image_arrow"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/icon/arrow.png"
                  />
                </td>
                <td class="td_left">
                  <img
                    class="image_pic_2"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample_icon2.png"
                  />
                </td>
              </tr>

              <tr class="table_grid">
                <td class="td_right">
                  <img
                    class="image_real"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample3.jpg"
                  />
                </td>
                <td>
                  <img
                    class="image_arrow"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/icon/arrow.png"
                  />
                </td>
                <td class="td_left">
                  <img
                    class="image_pic_3"
                    src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/images/dog_AI/sample_icon3.png"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <label for="avatar" class="button">
            <div class="button_grid">
              <img
                class="image_carmera"
                src="https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/icon/camera.png"
              />
              <div>
                사진 분석하기
                <br />
                <div class="button_text">Dog Face AI</div>
              </div>
            </div>
          </label>
          <form
            action="/dog_AI/analysis/"
            enctype="multipart/form-data"
            method="POST"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              value="ui49ewvFKqTpQKixDhjxTrYQcMiQrL5E1jHTHdRlBVtU8Dh72XieS0zswXikh7gN"
            />
            <input
              type="file"
              name="images"
              id="avatar"
              accept="image/*"
              class="input"
              onchange="analysis()"
            />
            <button type="submit" style="display: none" id="final_button">
              분석하기
            </button>
          </form>
        </div>
      </div>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import ImageInteract from "./components/ImageInteract.vue";
// import NavigationBar from "./components/NavigationBar.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default {
  name: "Home",
  // components: {
  //   "image-interact": ImageInteract,
  //   "navigaion-bar": NavigationBar,
  // },
  // data() {
  //   return {
  //     sample_images: [
  //       {
  //         real: "../assets/sample1.jpg",
  //         icon: "../assets/sample_icon1.png",
  //       },
  //       {
  //         real: "../assets/sample2.jpg",
  //         icon: "../assets/sample_icon2.png",
  //       },
  //       {
  //         real: "../assets/sample3.jpg",
  //         icon: "../assets/sample_icon3.png",
  //       },
  //     ]
  //   },
  // },
  methods: {
    analysis() {
      document.getElementById("final_button").click();
    },
  },
};
</script>

<style>
td {
  text-align: center;
}

.td_right {
  text-align: right;
}

.td_left {
  text-align: left;
}

.table_grid {
  display: grid;
  grid-template-columns: 250px 100px 200px;
}

.image_real {
  width: 160px;
  margin-top: 20px;
  text-align: right;
  border-radius: 10px;
}

.image_pic_1 {
  width: 150px;
  margin-left: -25px;
}

.image_pic_2 {
  padding-top: 20px;
  width: 100px;
}

.image_pic_3 {
  padding-top: 20px;
  width: 115px;
  margin-left: -5px;
}

.image_arrow {
  padding-top: 100px;
  width: 20px;
}

.main-subtitle {
  font-family: "KOTRA_BOLD-Bold";
  color: white;
  text-align: center;
  background-color: var(--maincolor);
  margin-left: 80px;
  margin-right: 80px;
  font-size: 22px;
  padding: 10px;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.main-title {
  font-family: "RixInooAriDuriR";
  color: var(--maincolor);
  font-size: 70px;
  text-align: center;
}

.button {
  display: block;
  font-family: "KOTRA_BOLD-Bold";
  font-size: 15px;
  color: white;
  background-color: rgb(19, 18, 18);
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 320px;
  padding-top: 13px;
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.image_carmera {
  width: 80px;
  margin-top: -10px;
  margin-left: 10px;
  margin-bottom: -10px;
}

.button_grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  text-align: left;
}

.button_text {
  font-family: "InfinitySans-RegularA1";
  font-size: 30px;
  font-weight: bold;
  margin-top: -5px;
}

.input {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}

:root {
  --maincolor: rgb(92, 93, 184);
}

body {
  font-family: "Cafe24Ssurround";
  margin: 0px;
  background-color: var(--maincolor);
}

.text {
  font-size: 200px;
}

.test-app {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  background-color: var(--maincolor);
}

/*main*/
.main-page {
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 300px 300px 10px 10px;
}

.main-page-deco {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border: 3px solid var(--maincolor);
  border-radius: 290px 290px 4px 4px;
  height: calc(100% - 24px);
  text-align: center;
}

.main-subtitle-deco {
  height: 100px;
}

/*svg*/
.svg {
  width: 100%;
  height: 100%;
}

text {
  fill: var(--maincolor);
  font-size: 17px;
  font-weight: bold;
}

.path {
  fill: transparent;
  stroke: crimson;
}

textPath {
  text-align: center;
}
.pop_up_background {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #606060;
  border: none;
  opacity: 0.7;
  z-index: 2;
}

.pop_up_body {
  position: fixed;
  top: calc(50vh - 300px);
  left: calc(50vw - 300px);
  width: 600px;
  height: 600px;
  background-color: #ffffff;
  background-image: url("https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/event/goods_event.png");
  background-size: 600px;
  border-radius: 10px;
  text-align: right;
  z-index: 2;
}

.pop_up_body2 {
  position: fixed;
  top: calc(50vh - 300px);
  left: calc(50vw - 300px);
  width: 600px;
  height: 600px;
  background-color: var(--maincolor);
  background-size: 600px;
  border-radius: 10px;
  text-align: right;
  z-index: 2;
}

.pop_up_body3 {
  width: 100%;
  text-align: center;
}

.pop_up_border {
  margin: 14px;
  margin-top: -11px;
  width: calc(540px - 38px);
  height: calc(540px - 38px);
  border: 5px solid var(--maincolor);
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
}

.pop_up_score_body {
  position: fixed;
  top: calc(50vh - 300px);
  left: calc(50vw - 300px);
  width: 600px;
  height: 600px;
  background-color: #ffffff;
  background-image: url("https://dogmbti.s3.ap-northeast-2.amazonaws.com/static/event/goods_event.png");
  background-size: 600px;
  border-radius: 10px;
  text-align: right;
  z-index: 2;
}

.pop_up_body_X {
  background-color: transparent;
  padding: 5px;
}

.pop_up_score_body_X {
  background-color: transparent;
  padding: 5px;
}

.image_x_button {
  width: 15px;
}

.pop_up_body_kakao_button {
  margin-top: 500px;
  margin-right: 15px;
  width: 225px;
  height: 55px;
  border-radius: 30px;
  font-family: "InfinitySans-RegularA1";
  font-size: 17px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.pop_up_body_kakao_button:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.questions {
  padding: 5px;
}

.image_event {
  width: 250px;
  border-radius: 50%;
  margin: 20px;
}
</style>
