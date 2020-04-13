<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
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
            <q-btn color="red">
              Supprimer
            </q-btn>
          </q-img>
        </div>

        <div class="col-6">
          <q-img :src="url">
            <q-btn color="red">
              Supprimer
            </q-btn>
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
    url: 'https://live.staticflickr.com/6140/5936324357_1e1bf0aa40_z.jpg',
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
.my-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
