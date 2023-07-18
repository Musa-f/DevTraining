Vue.createApp({ 
    data(){
        return {
            card1: false,
            card2: false,
            class: "class",
            class1: "class1",
            class2: "class2",
        };
    },
    methods: {
        selectCard(card){
            if(card === 1){
                this.card1 = !this.card1;
            }
            if(card === 2){
                this.card2 = !this.card2;
            }
        }
    } 
}).mount('#app');