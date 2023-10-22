<script>
import { mapState, mapActions } from 'vuex'
export default{
    name: 'EditArtikelView',
    computed: {
        ...mapState(['artikelSlice'])
    },
    methods: {
        ...mapActions(['artikelSlice']),
    },
    mounted(){
        if(localStorage.getItem('email') != null){
            this.$store.dispatch('artikelSlice/filter')
        }
    }
}
</script>
<template>
    <div>
        <div>
            {{ artikelSlice.judul }}
        </div>
        <div>
            {{ artikelSlice.detail }}
        </div>
    </div>
</template>