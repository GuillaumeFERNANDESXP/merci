<template>
  <div class="text-center fixed-center">
    <h6>Upload</h6>
    <q-uploader
      url="http://localhost:4444/upload"
      label="Filtered (png only)"
      multiple
      :filter="checkFileType"
      style="max-width: 300px"
    />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data: () => ({
  }),
  methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 2048)
    },

    checkFileType (files) {
      return files.filter(file => file.type === 'image/png')
    }
  }
}
</script>
<style lang="sass" scoped>
.q-card
  height: 450px
</style>
