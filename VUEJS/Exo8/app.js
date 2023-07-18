Vue.createApp({ 
    data(){
        return {
            message: "",
            firstText: "",
            p1: false,
        };
    },
    methods: {
        displayText(){
            this.firstText = this.message;
            if(this.firstText == "hello"){
                this.p1 = !this.p1;
            }
            if(this.firstText == "world"){
                this.p1 = !this.p1;
            }
            return this.firstText;
        }
    } 
}).mount('#app');