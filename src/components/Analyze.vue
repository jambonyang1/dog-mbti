<template>
  <div class="analyze-container">
    <div class="analyze-analyze">
      <div class="box">
        <div>
          <img src="../assets/maltese.jpg" alt="real-1" class="real-1" />
          <img src="../assets/sample_icon1.png" alt="icon1" class="icon-1" />
          <div class="text-group">
            <div class="main-text"><span>DogMoji</span></div>
            <div class="main-text2"><span>Make your dog an emoji!</span></div>
            <b-button
              variant="warning"
              class="button"
              size="lg"
              @click="scrollToUpload"
              >Let's start!
            </b-button>
          </div>
          <img src="../assets/sample2.jpg" alt="real-2" class="real-2" />
          <div class="icon-2"></div>
          <img src="../assets/sample3.jpg" alt="real-3" class="real-3" />
          <div class="icon-3"></div>
        </div>
        <div class="container" ref="fileUpload" tabindex="0">
          <div>
            <h3>Upload Image</h3>
            <div class="drop_box">
              <div v-if="!imageFile">
                <header>
                  <h4>Select file here</h4>
                </header>
                <p>Files Supported: jpg, jpeg, png</p>
                <b-form-file
                  v-model="imageFile"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  :state="Boolean(imageFile)"
                  accept=".jpg, .png"
                  class="rounded-pill bg-light text-dark border-0 py-3 px-4 my-3"
                  @change="previewImage"
                >
                </b-form-file>
                <!-- <input
                v-model="imageFile"
                hidden
                accept=".jpg, .png, .jpeg"
                ref="fileID"
                style="display: none"
                @change="inputChanged()"
              />
              <b-button variant="warning" @click="uploadFile()"
                >upload</b-button
              > -->
              </div>
              <div v-else>
                <b-img :src="previewImageData" thumbnail></b-img>
                <div style="text-align: center; padding-top: 5px">
                  <b-button
                    variant="warning"
                    type="button"
                    v-on:click="analyzeImage"
                    class="rounded-pill px-4 m-1"
                    >Analyze</b-button
                  >
                  <b-button
                    variant="secondary"
                    type="button"
                    v-on:click="resetInput"
                    class="rounded-pill px-4 m-1"
                    >Reset</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="result" v-if="result">
          <h2>분석 결과</h2>
          <b-card class="mt-3" header="종 이름">
            <b-card-text class="m-0">{{ breedName }}</b-card-text>
          </b-card>
          <b-card class="mt-3" header="종 특징">
            <b-card-text class="m-0">{{ breedProp }}</b-card-text>
          </b-card>
          <b-card>
            <b-card-img src="imageURL" alt="image"></b-card-img>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Analyze",
  data() {
    return {
      imageFile: null,
      result: null,
      previewImageData: null,
      responseJson: null,
      responseImage: null,
      imageUrl: null,
      breedName: null,
      breedProp: null,
      image: null,
    };
  },
  props: {},
  methods: {
    uploadFile() {
      console.log(this.$refs.fileID);
      this.$refs.fileID.click();
    },
    inputChanged(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    previewImage(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.previewImageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    resetInput() {
      this.previewImageData = null;
      this.imageFile = null;
      this.result = null;
    },
    async analyzeImage() {
      this.breedName = null;
      this.breedProp = null;
      const formData = new FormData();
      formData.append("file", this.imageFile);
      this.responseJson = await axios.post(
        "http://3.133.59.45:8000/predict",
        formData
      );
      this.makeResult();

      this.responseImage = await axios.post(
        "http://3.133.59.45:8000/final",
        formData,
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([this.responseImage.data], { type: "image/png" });
      this.imageURL = URL.createObjectURL(blob);
      console.log(this.imageURL);
    },
    scrollToUpload() {
      const upload = this.$refs.fileUpload;
      upload.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  width: 95%;
  max-width: 450px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 5vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
}

.container {
  top: 1400px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  padding-bottom: 200px;
}

.drop_box {
  margin: 10px 0;
  padding: 30px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dotted #a3a3a3;
  border-radius: 5px;
}
.analyze-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.analyze-analyze {
  gap: 10px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  background-image: url("../assets/background.png");
  background-repeat: repeat;
  background-size: cover;
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
  left: 310px;
  top: 80px;

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
  top: 500px;
  left: 50%;
  width: 934px;
  height: 311px;
  display: flex;
  position: absolute;
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

.result {
  top: 2400px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  padding-bottom: 200px;
}
</style>
