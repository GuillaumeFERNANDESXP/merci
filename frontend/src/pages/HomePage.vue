<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <div
        v-for="url in urls"
        v-bind:key="url.index"
      >
        <div class="col-6">
          <q-img :src="url">
          </q-img>
        </div>
      </div>
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
    urls: [],
    model: null,
    loading: false,
    nextPage
  }),
  created () {
    const { Drawing } = this.$FeathersVuex.api
    const query = {
      query: {
        flaggedAsDeleted: false
      }
    }
    return Drawing.find(query)
      .then(response => {
        console.log(response.data.imgId)
        for (var i = 0; i < response.data.length; i++) {
          this.urls.push(`https://merci.imgix.net/${response.data[i].imgId}`)
          console.log(this.urls)
          // axios.get(`https://bravoes.imgix.net/${response.data[i].imgId}`)
          //   .then(response => {
          //     // handle success
          //     this.data = response.data
          //     console.log(this.data)
          //     console.log(response)
          //   })
          //   .catch(function (error) {
          //     // handle error
          //     console.log(error)
          //   })
          //   .then(function () {
          //     // always executed
          //   })
        }
      })
  },
  computed: {
    dataRender: function () {
      return function () {
        const { Drawing } = this.$FeathersVuex.api
        const query = {
          query: {
            flaggedAsDeleted: false
          }
        }
        return Drawing.find(query)
          .then(response => {
            console.log(response.data.imgId)
            for (var i = 0; i < response.data.length; i++) {
              console.log(response.data[i].imgId)
              axios.get(`https://bravoes.imgix.net/${response.data[i].imgId}`)
                .then(function (response) {
                  // handle success
                  console.log(this.data)
                  console.log(response)
                })
                .catch(function (error) {
                  // handle error
                  console.log(error)
                })
                .then(function () {
                  // always executed
                })
            }
          })
          .catch(this.handleError)
      }
    },
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
