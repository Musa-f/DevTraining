Vue.createApp({ 
    data(){
        return {
            message: "",
            message2: "",
            msg: "",
        };
    },
    methods: {
        displayMsg(){
            return this.message;
       },
       enterMsg(e){
        this.msg = e.target.value
       }
    } 
    }).mount('#app');