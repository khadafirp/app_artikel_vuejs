import Axios from 'axios'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import router from '../../../router'

export default {
    namespaced: true,
    state: {
        email: null,
        password: null,
        nama_lengkap: null,
        endpoint: 'http://localhost:8080/'
    },
    mutations: {
        daftar(state){

            var data = {
                email : state.email,
                password : state.password,
                nama_lengkap : state.nama_lengkap
            }

            Axios.post(
                state.endpoint + 'daftar',
                data,
            ).then((response) => {
                console.log(response.data)
                Swal.showLoading()
                if(response.data['status-code'] === 200){
                    Swal.hideLoading()
                    Swal.fire({
                        title: 'Berhasil !',
                        text: 'Pendaftaran telah berhasil.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    })
                    router.go(-2)
                }
            }).catch(err => {
                console.log(err.response);
            });
        }
    },
    actions: {
        daftar({commit}){
            commit('daftar')
        }        
    }
}