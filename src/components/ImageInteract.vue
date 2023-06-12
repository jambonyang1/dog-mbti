<template>
  <b-container class="mt-3">
    <div>
      <b-form-file
        v-model="imageFile"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        :state="Boolean(imageFile)"
        accept=".jpg, .png"
        class="rounded-pill bg-light text-dark border-0 py-3 px-4 my-3"
        @change="previewImage"
      ></b-form-file>
      <b-img :src="previewImageData" fluid thumbnail> </b-img>
      <b-button
        variant="primary"
        type="button"
        class="rounded-pill px-4 m-1"
        v-on:click="analyzeImage"
      >
        Analyze Image
      </b-button>
      <b-button
        variant="danger"
        type="button"
        class="rounded-pill px-4 m-1"
        @click="resetInput"
      >
        Reset
      </b-button>
      <div>
        <div v-if="breedProp" class="mt-3">
          <h2>분석 결과</h2>
          <b-card class="mt-3" header="종 이름">
            <b-card-text class="m-0">{{ breedName }}</b-card-text>
          </b-card>
          <b-card class="mt-3" header="종 특징">
            <b-card-text class="m-0">{{ breedProp }}</b-card-text>
          </b-card>
          <b-img src="imageUrl" fluid alt="image"></b-img>
        </div>
        <!-- <div v-else class="text-center mt-3 d-flex justify-content-center">
          <b-spinner :variant="primary" :key="primary"></b-spinner>
        </div> -->
      </div>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageInteract",
  data() {
    return {
      imageFile: null,
      result: null,
      previewImageData: null,
      responseJson: null,
      responseImage: null,
      imageURL: null,
      breedName: null,
      breedProp: null,
    };
  },
  methods: {
    async makeResult() {
      const response = this.responseJson;
      this.breedName = response["data"]["breed"].toUpperCase();
      var gpt_addr =
        "https://gshnajsid6.execute-api.us-east-1.amazonaws.com/dev/" +
        this.breedName;
      var gptResponse = await axios.get(gpt_addr);
      this.breedProp = gptResponse["data"];
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
    resetInput() {
      this.imageFile = null;
      this.result = null;
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
  },
};
</script>

<style></style>
