Vue.createApp({ 
    data(){
        return {
            number: "",
            userName: "",
        };
    },
    methods: {
        minus(){
            result = this.number--;
            return result;
        },
        add(){
            result = this.number++;
            return result;
        },
    },
    computed: {
        func(){
            console.log("hello");
            if(this.userName == ""){
                return "test";
            }else{
                return "un autre test";
            }
        }
    }
}).mount('#app');