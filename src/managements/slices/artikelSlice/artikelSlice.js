import Axios from "axios";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default {
    namespaced: true,
    state: {
        data: null,
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
        }
    },
    actions: {
        getArtikel({commit}){
            commit('getArtikel')
        }
    }
}