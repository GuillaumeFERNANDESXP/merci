<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-img
          :src="url"
          style="width: 100%"
        >
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
          <q-icon
            @click="hello"
            class="absolute all-pointer-events"
            size="25px"
            name="info"
            color="white"
            style="top: 6px; left: 6px"
          >
            <q-tooltip>
              Tooltip
            </q-tooltip>
          </q-icon>
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>
      <div class="col-6">
        <q-img
          :src="url"
          style="width: 100%"
        >
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>
      <div class="col-6">
        <q-img
          :src="url"
          style="width: 100%"
        >
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>

      <div class="col-6">
        <q-img :src="url">
        </q-img>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data: () => ({
    url: 'https://live.staticflickr.com/6140/5936324357_1e1bf0aa40_z.jpg'
  }),
  methods: {
    hello () {
      console.log('hello')
    }
  }
}
</script>
<style lang="sass" scoped>
.q-card
  height: 450px
</style>
