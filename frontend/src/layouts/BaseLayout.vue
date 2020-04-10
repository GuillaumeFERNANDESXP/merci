<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>
          <q-btn
            flat
            @click="$router.push({ name: 'HomePage' })"
          >MERCI Project</q-btn>
        </q-toolbar-title>
        <div v-if="!user">
          <q-btn
            flat
            @click="$router.push({ name: 'Upload' })"
          >Upload</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'BaseLayout',
  data: () => ({
  }),
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
