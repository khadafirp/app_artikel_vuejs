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
                Swal.fire({
                    title: 'Berhasil !',
                    text: 'Data berhasil dimuat.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 2000
                })
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
                Swal.fire({
                    title: 'Berhasil !',
                    text: 'Data telah dimuat.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 2000
                })
                if(response.data['status-code'] === 200){
                    state.judul = response.data.data.news_title
                    state.detail = response.data.data.news_description
                    state.dataEdit = response.data.data
                }
            })
        },
        ubahData(state){
            if(state.judul == null && state.detail == null){
                Swal.fire({
                    title: 'Gagal !',
                    text: 'Data harus diisi.',
                    icon: 'failed',
                    confirmButtonText: 'OK'
                })
            } else {
                Swal.showLoading()
                Axios.post(
                    state.endpoint + 'edit-berita',
                    {
                        news_id: state.news_id,
                        kategori_id: state.dataEdit.kategori_id,
                        news_title: state.judul, 
                        news_description: state.detail,
                        created_at: state.dataEdit.created_at,
                        edited_at: Date('Y-m-d H:i:s')
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                ).then((response) => {
                    if(response.data['status-code'] == 200){
                        Swal.fire({
                            title: 'Berhasil !',
                            text: 'Data berhasil diubah.',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            timer: 2000
                        })
                    } else {
                        Swal.fire({
                            title: 'Gagal !',
                            text: 'Data gagal diubah.',
                            icon: 'failed',
                            confirmButtonText: 'OK',
                        })
                    }
                })
            }
        }
    },
    actions: {
        getArtikel({commit}){
            commit('getArtikel')
        },
        filter({commit}){
            commit('filterData')
        },
        ubah({commit}){
            commit('ubahData')
        }
    }
}