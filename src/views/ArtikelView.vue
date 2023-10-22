<script>
import { mapState, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default{
    name: 'ArtikelView',
    computed: {
        ...mapState(['artikelSlice'])
    },
    methods: {
        ...mapActions(['artikelSlice']),
        editPage(id){
            this.artikelSlice.news_id = id
            this.$router.push({
                path: 'edit-artikel',
            })
        },
        hapus(id){
            this.artikelSlice.news_id = id
            Swal.fire({
                title: 'Hapus Data ?',
                text: 'Jika anda yakin, maka tekan hapus.',
                icon: 'question',
                cancelButtonText: 'Batal',
                showCancelButton: true,
                cancelButtonColor: 'green',
                confirmButtonText: 'Hapus',
                confirmButtonColor: 'red',
                preConfirm: () => this.$store.dispatch('artikelSlice/hapus'),
            })
        }
    },
    mounted(){
        this.$store.dispatch('artikelSlice/getArtikel')
    }
}
</script>

<template>
    <div>
        <div>
            <select class="form-control" :required="true" v-model="artikelSlice.kategori">
                <option :selected="true" :value="null">Semua Kategori</option>
                <option :selected="true" :value="1">Pemilu</option>
                <option :selected="true" :value="2">Keuangan</option>
            </select>
            <button style="margin-left: 32px;" @click="$router.push('/tambah-artikel')">Tambah Artikel</button>
        </div>
        <table v-if="artikelSlice.data != null">
            <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Detail</th>
                <th>Aksi</th>
            </tr>
            <tr v-for="(item, index) in artikelSlice.kategori == null ? artikelSlice.data : artikelSlice.data.filter((data) => data.kategori_id == artikelSlice.kategori)" :key="item.news_id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.news_title }}</td>
                <td><div class="desc">{{ item.news_description }}</div></td>
                <td>
                    <button class="button button2" @click="editPage(item.news_id)">Ubah</button>
                    <button class="button button3" @click="hapus(item.news_id)">Hapus</button>
                </td>
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
    white-space: nowrap;
    }

    tr:hover {background-color: hsla(160, 100%, 37%, 1);}

    .desc {
        width : 50%;
        overflow:hidden;
        display:inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 16px;
    }

    .button2 {
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
    }

    .button2:hover {
    background-color: #008CBA;
    color: white;
    }

    .button3 {
    background-color: white; 
    color: black; 
    border: 2px solid #f44336;
    }

    .button3:hover {
    background-color: #f44336;
    color: white;
    }

</style>