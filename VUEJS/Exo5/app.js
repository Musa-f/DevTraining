Vue.createApp({ 
    data(){
        return {
            number: 0,
            winningNb: 13
        };
    },
    methods: {
        addOne(){
            this.number = this.number + 1;
            return this.number;
        },
        addFive(){
            this.number = this.number + 5;
            return this.number;
        },
    },
    computed: {
      findNb(){
        console.log(this.number)
        if(this.winningNb == this.number){
            result = this.winningNb + " ..Bingo !"
            this.number = 0;
            return result;
        }
        if(this.number>this.winningNb){
            this.number = 0;
            return "Le nombre est trop grand !"
        }
        else{
            return 'Essaie encore !';
        }
      }
    },
    watch: {
        number(value){
            setTimeout(() => {
                this.number = 0;
            }, 5000);
        }
    }
}).mount('#app');