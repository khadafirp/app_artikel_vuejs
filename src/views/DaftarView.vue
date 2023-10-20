<script>
  import{ mapState, mapActions } from 'vuex'
  export default {
      name: "DaftarView",
      computed: {
        ...mapState(['daftarSlice'])
      },
      methods: {
        ...mapActions(['daftarSlice'])
      }
  }

</script>

<template>
  <div>
    <h1 class="green">REGISTER</h1>
    <div>
      Nama Lengkap
    </div>
    <div>
      <input v-model="daftarSlice.nama_lengkap"/>
    </div>
    <div>
      Email
    </div>
    <div>
      <input v-model="daftarSlice.email"/>
    </div>
    <div>
      Password
    </div>
    <div>
      <input type="password" v-model="daftarSlice.password"/>
    </div>
    <div>
      <button @click="$store.dispatch('daftarSlice/daftar')">Daftar</button>
    </div>
    <div>
      Sudah punya akun ? 
      <a style="color: hsla(160, 100%, 37%, 1);">Masuk</a>
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
