import Axios from "axios";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default {
    namespaced: true,
    state: {
        data: null,
        dataEdit: null,
        news_id: null,
        judul: null,
        detail: null,
        kategori: null,
        endpoint: 'http://localhost:8080/'
    },
    mutations: {
        getArtikel(state){
            Swal.showLoading()
            Axios.get(
                state.endpoint + 'semua-berita',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }
            ).then((response) => {
                Swal.hideLoading()
                if(response.data['status-code'] == 200){
                    state.data = response.data.data
                } else {
                    Swal.fire({
                        title: 'Gagal !',
                        text: response.data.message,
                        icon: 'failed',
                        confirmButtonText: 'OK',
                    })
                }
            })
        },
        filterData(state){
            Swal.showLoading()
            Axios.post(
                state.endpoint + 'filter-berita',
                {
                    news_id: state.news_id
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            ).then((response) => {
                Swal.hideLoading()
                if(response.data['status-code'] === 200){
                    state.judul = response.data.data.news_title
                    state.detail = response.data.data.news_description
                    state.dataEdit = response.data.data
                }
            })
        }
    },
    actions: {
        getArtikel({commit}){
            commit('getArtikel')
        },
        filter({commit}){
            commit('filterData')
        }
    }
}