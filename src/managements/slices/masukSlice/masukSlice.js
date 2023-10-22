import Axios from 'axios'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import router from '../../../router'
export default {
    namespaced: true,
    state: {
        email: null,
        password: null,
        endpoint: 'http://localhost:8080/'
    },
    mutations: {
        masuk(state){
            Swal.showLoading()
            Axios.post(
                state.endpoint + 'masuk',
                {
                    email: state.email,
                    password: state.password
                }
            ).then((response) => {
                if(response.data['status-code'] === 200){
                    localStorage.setItem('isLogin', true)
                    localStorage.setItem('email', response.data['data']['email'])
                    localStorage.setItem('password', response.data['data']['password'])
                    Swal.fire({
                        title: 'Berhasil !',
                        text: 'Login berhasil.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        showLoaderOnConfirm: true,
                        preConfirm: () => {
                            window.location.reload()
                        },
                        allowOutsideClick: () => window.location.reload()
                    })
                    router.push('/')
                } else {
                    Swal.fire({
                        title: 'Login Gagal !',
                        text: response.data,
                        icon: 'failed',
                        confirmButtonText: 'Tutup',
                    })
                }
            })
        }
    },
    actions: {
        masuk({commit}){
            commit('masuk')
        }       
    }
}