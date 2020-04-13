<template>
  <q-card>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :awss3="awss3"
      :options="dropzoneOptions"
    ></vue-dropzone>
  </q-card>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'UploadTest',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      awss3: {
        signingURL: 'http://aws-direct-s3.dev/',
        headers: { 'Access-Control-Allow-Origin': '*' },
        params: {},
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        sendFileToServer: true,
        withCredentials: false
      },
      dropzoneOptions: {
        method: 'put',
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {}
      }
    }
  },
  method: {
    s3UploadError (errorMessage) {
      console.log(errorMessage)
    },
    s3UploadSuccess (s3ObjectLocation) {
      console.log(s3ObjectLocation)
    }
  }
}
</script>
