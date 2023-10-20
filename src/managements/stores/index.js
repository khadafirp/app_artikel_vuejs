import { createStore } from 'vuex'
import daftarSlice from '../slices/daftarSlice/daftarSlice'
import masukSlice from '../slices/masukSlice/masukSlice'

export default createStore({
    modules: {
        daftarSlice,
        masukSlice
    }
})