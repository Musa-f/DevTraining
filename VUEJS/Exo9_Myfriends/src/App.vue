<template>
  <HeaderAmi title="Les amis"/>

  <NewFriend @addFriend="addNewFriend"/>

  <CardAmi
  v-for="friend in friends" 
  :key="friend.id"
  :id="friend.id"
  :name="friend.name"
  :num="friend.num"
  :email="friend.email"
  :adress="friend.adress"
  :premium="friend.premium"
  />

</template>

<script>
import HeaderAmi from './components/HeaderAmi.vue'
import CardAmi from './components/CardAmi.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  name: 'App',
  components: {
    HeaderAmi,
    CardAmi,
    NewFriend
  },
  data(){
    return{
      friends: [
        {
            id: 1,
            name: "Anaïs",
            num: "06 12 34 56 78",
            email: "anais@example.com",
            adress: "123 rue des Lilas, 75020 Paris, France",
            premium: true,
        },
        {
            id: 2,
            name: "Ahmed",
            num: "01 23 45 67 89",
            email: "ahmed@example.com",
            adress: "456 avenue des Ormes, 92000 Nanterre, France",
            premium: false,
        },
        {
            id: 3,
            name:"Sarah",
            num: "06 98 76 54 32",
            email: "sarah@example.com",
            adress: "789 chemin des Oliviers, 13090 Aix-en-Provence, France",
            premium: true,
        },
        {
            id: 4,
            name:"Marc",
            num: "04 12 34 56 78",
            email:'marc@example.com',
            adress: '101 rue de la Paix, 75008 Paris, France',
            premium: false,
        },
    ],
    }
  },
  methods:{
    addNewFriend(name, num, email, adress){
      let myNewFriend = {
        id: new Date().toISOString(),
        name:name,
        num:num,
        email:email,
        adress:adress, 
        premium: false
      }
      this.friends.push(myNewFriend);
      console.log(this.friends)
      console.log(myNewFriend)
    }
  },
}
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 60px;
}
</style>
