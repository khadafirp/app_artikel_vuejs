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
}
</script>
<template>
    <div>
        <div>
            Kategori
        </div>
        <div>
            <select class="form-control" :required="true" v-model="artikelSlice.kategori_id">
                <option :selected="true" :value="null">Semua Kategori</option>
                <option :selected="true" :value="1">Pemilu</option>
                <option :selected="true" :value="2">Keuangan</option>
            </select>
        </div>
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
            <button @click="$store.dispatch('artikelSlice/tambah')">Ubah</button>
            <button @click="$router.back()">Batal</button>
        </div>
    </div>
</template>