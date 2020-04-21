<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select
        class="q-gutter-md q-pa-md"
        filled
        v-model="model"
        multiple
        :options="options"
        :loading="loading"
        @virtual-scroll="onScroll"
      />
    </div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-zoom
          background-color="blue-grey-1"
          scale
        >
          <q-img :src="url" />
        </q-zoom>
      </div>
      <div class="col-6">
        <q-img :src="url">
          <q-icon
            class="absolute all-pointer-events"
            size="25px"
            name="info"
            color="white"
            style="top: 6px; left: 6px"
          >
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
import axios from 'axios'

const options = []
for (let i = 0; i <= 100000; i++) {
  options.push('Opt ' + i)
}

const pageSize = 50
const nextPage = 2
const lastPage = Math.ceil(options.length / pageSize)

export default {
  name: 'HomePage',
  data: () => ({
    url: 'https://bravoes.imgix.net/bravoes_logo.jpg',
    model: null,
    loading: false,
    nextPage
  }),
  computed: {
    options () {
      return Object.freeze(options.slice(0, pageSize * (this.nextPage - 1)))
    }
  },
  methods: {
    getImg () {
      let img = 'bravoes_logo.jpg'
      return axios.get(`https://bravoes.imgix.net/${img}`)
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    },
    onScroll ({ to, ref }) {
      const lastIndex = this.options.length - 1

      if (this.loading !== true && this.nextPage < lastPage && to === lastIndex) {
        this.loading = true

        setTimeout(() => {
          this.nextPage++
          this.$nextTick(() => {
            ref.refresh()
            this.loading = false
          })
        }, 500)
      }
    }
  }
}
</script>
<style lang="stylus">
.q-select {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.my-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
