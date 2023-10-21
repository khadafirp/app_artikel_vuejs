import { createStore } from 'vuex'
import daftarSlice from '../slices/daftarSlice/daftarSlice'
import masukSlice from '../slices/masukSlice/masukSlice'
import profilSlice from '../slices/profilSlice/profilSlice'

export default createStore({
    modules: {
        daftarSlice,
        masukSlice,
        profilSlice
    }
})