<script>
import { mapState, mapActions } from 'vuex'
export default{
    name: 'EditArtikelView',
    computed: {
        ...mapState(['artikelSlice'])
    },
    methods: {
        ...mapActions(['artikelSlice'])
    },
    mounted(){
        this.$store.dispatch('artikelSlice/filter')
    }
}
</script>
<template>
    <div>
        <div>
            Judul
        </div>
        <div>
            <input v-model="artikelSlice.judul"/>
        </div>
        <div>
            Detail
        </div>
        <div>
            <textarea v-model="artikelSlice.detail"></textarea>
        </div>
        <div>
            <button @click="$store.dispatch('artikelSlice/ubah')">Ubah</button>
            <button @click="$router.back()">Batal</button>
        </div>
    </div>
</template>