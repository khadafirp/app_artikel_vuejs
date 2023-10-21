<script>
import { mapState, mapActions } from 'vuex'
export default{
    name: 'ArtikelView',
    computed: {
        ...mapState(['artikelSlice'])
    },
    methods: {
        ...mapActions(['artikelSlice'])
    },
    mounted(){
        this.$store.dispatch('artikelSlice/getArtikel')
    }
}
</script>

<template>
    <div>
        <select class="form-control" :required="true" @change="artikelSlice.kategori">
            <option :selected="true" v-bind="artikelSlice.kategori = null">Semua Kategori</option>
            <option :selected="true" v-bind="artikelSlice.kategori = 1">Pemilu</option>
            <option :selected="true" v-bind="artikelSlice.kategori = 2">Keuangan</option>
        </select>
        <table v-if="artikelSlice.data != null">
            <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Detail</th>
            </tr>
            <tr v-for="(item, index) in artikelSlice.data" :key="item.news_id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.news_title }}</td>
                <td>{{ item.news_description }}</td>
            </tr>
        </table>
        <div v-else>
            Belum ada artikel
        </div>
    </div>
</template>

<style>
    table {
    border-collapse: collapse;
    width: 100%;
    }

    th {
        padding: 8px;
        text-align: center;
        font-weight: bold;
    } 
    td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    }

    tr:hover {background-color: hsla(160, 100%, 37%, 1);}
</style>