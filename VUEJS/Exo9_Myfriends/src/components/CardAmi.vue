<template>
    <div class="card mt-3" style="width: 30rem;">
        <div class="card-body">
            <h2 class="card-title">{{ name }}</h2>
            <button @click="displayPremium" class="btn" :class="{ 'btn-warning': premium, 'btn-secondary': !premium}">Premium</button>
            <br>
            <button @click="displayDetails" class="btn btn-primary mt-2">Voir +</button>

            <ul class="list-group list-group-flush" v-if="detail">
                <li class="list-group-item">{{ id }}</li>
                <li class="list-group-item">{{ email }}</li>
                <li class="list-group-item">{{ num }}</li>
                <li class="list-group-item">{{ adress }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardAmi',
  props: {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    num: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    premium: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  data(){
    return{
        detail: false
    }
  },
  emits: {
    'event-premium' : function(premium){
        if(premium){
            console.warn("premium");
            return true;
        }
        else{
            console.warn('pas premium');
            return false;
        }
    }
  },
  methods: {
    displayDetails(){
        this.detail = !this.detail
    },
    displayPremium(){
        this.$emit('event-premium')
    }
  },
}
</script>
