import Axios from 'axios'
import 'sweetalert2/src/sweetalert2.scss'

export default {
    namespaced: true,
    state: {
        nama_lengkap: null,
        endpoint: 'http://localhost:8080/'
    },
    mutations: {
        getProfil(state){
            if(localStorage.getItem('isLogin') == true){
            Axios.post(
                state.endpoint + 'profil-pengguna',
                {
                    email: localStorage.getItem('email'),
                    password: localStorage.getItem('password')
                }
            ).then((response) => {
                if(response.data['status-code'] === 200){
                    state.nama_lengkap = response.data['data']['nama_lengkap']
                    localStorage.setItem('token', response.data['token'])
                }
            })
        }
        }
    },
    actions: {
        getProfil({commit}){
            commit('getProfil')
        }
    }
}