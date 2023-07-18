<template>
    <form action="" class="mt-4 form-control" style="width: 40rem;">
        <h4>Ajouter un nouvel ami</h4>
        <hr>
        <div class="form-group">
            <input v-model="enteredName" type="text" placeholder="Nom">
        </div>
        <div class="form-group mt-3">
            <input v-model="enteredEmail" type="text" placeholder="Email">
        </div>
        <div class="form-group mt-3">
            <input v-model="enteredNum" type="text" placeholder="Numéro">
        </div>
        <div class="form-group mt-3">
            <input v-model="enteredAdress" type="text" placeholder="Adresse">
        </div>
        <button @click.prevent="addFriend" class="btn btn-primary mt-3">Ajouter</button>
    </form>
</template>

<script>
    export default {
        name: 'NewFriend',
        emits:['addFriend'],
        data(){
            return{
                enteredName: "",
                enteredEmail: "",
                enteredAdress: "",
                enteredNum: ""
            }
        },
        methods:{
            addFriend(){
                this.$emit('addFriend', this.enteredName, this.enteredEmail, this.enteredAdress, this.enteredNum)
            }
        }
    }
</script>

