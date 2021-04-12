export  default {
    data(){
      return {
          timeOut: ''
      }
    },
    methods:{
        debounce(func, wait = 1000) {
            //khong cho ngta nhap lien tuc
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(func, wait)
        }
    }
}
