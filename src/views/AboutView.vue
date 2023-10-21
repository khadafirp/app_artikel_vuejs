<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['masukSlice'])
    },
    methods: {
      ...mapActions(['masukSlice']),
      daftarPage(){
        this.$router.push('/daftar')
      }
    }
  }

</script>

<template>
  <div>
    <h1 class="green">LOGIN</h1>
    <div>
      Email
    </div>
    <div>
      <input v-model="masukSlice.email"/>
    </div>
    <div>
      Password
    </div>
    <div>
      <input type="password" v-model="masukSlice.password"/>
    </div>
    <div>
      <button @click="$store.dispatch('masukSlice/masuk')">Masuk</button>
    </div>
    <div>
      Belum punya akun ? 
      <a style="color: hsla(160, 100%, 37%, 1);" v-on:click="daftarPage()">Daftar</a>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
