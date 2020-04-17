<template>
  <q-card>
    <vue-dropzone
      id="drop1"
      :options="dropOptions"
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
      dropOptions: {
        url: 'http://localhost:3030/drawings',
        paramName: 'files'
      }
    }
  },
  method: {
  }
}
</script>
