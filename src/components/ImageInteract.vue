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
        type="submit"
        class="rounded-pill px-4 m-1"
        v-on:click="analyzeImage"
      >
        Analyze Image
      </b-button>
      <b-button
        variant="danger"
        type="submit"
        class="rounded-pill px-4 m-1"
        @click="resetInput"
      >
        Reset
      </b-button>
      <div v-if="result" class="mt-3">
        <h2>분석 결과</h2>
        <b-card class="mt-3" header="종 이름">
          <pre class="m-0">{{ result }}</pre>
        </b-card>
        <b-card class="mt-3" header="종 특징">
          <pre class="m-0">특징</pre>
        </b-card>
        <!-- <img :src="resultImage" class="img-fluid rounded" /> -->
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
    };
  },
  methods: {
    makeResult(response) {
      var breed = response["data"]["breed"];
      this.result = breed.toUpperCase();
    },
    async analyzeImage() {
      const formData = new FormData();
      formData.append("file", this.imageFile);
      console.log(formData);
      const response = await axios.post(
        "http://18.221.211.75:8000/predict",
        formData
      );
      this.responseJson = response;
      this.makeResult(response);
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
