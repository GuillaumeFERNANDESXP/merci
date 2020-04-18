<template>
  <div class="q-pa-lg">

    <q-form class="q-gutter-md q-pa-md">
      <h6 class="text-center">Upload your drawing!</h6>
      <vue-dropzone
        id="drop1"
        :options="dropOptions"
      ></vue-dropzone>
    </q-form>

  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'Upload',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropOptions: {
      url: 'http://localhost:3030/drawings',
      paramName: 'files'
    }
  })
}
</script>
<style lang="sass" scoped>
.q-file
  max-width: 200px
  margin-left: auto
  margin-right: auto

.q-form
  max-width: 600px
  margin-left: auto
  margin-right: auto
</style>
