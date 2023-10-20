<script>
  export default {
    computed: {
    },
    methods: {
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
      Username
    </div>
    <div>
      <input/>
    </div>
    <div>
      Password
    </div>
    <div>
      <input/>
    </div>
    <div>
      <button>Masuk</button>
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
