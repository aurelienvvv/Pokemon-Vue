<template >
  <div class="home">
    <h1>Pokemon Vue JS !</h1>
    <p>Choisissez un pokemon !</p>
    <ul class="pokemon-container">
      <li v-for="(pokemon, index) in arrPokemon" :key="index">
        <router-link :to="`/pokemon/${index + 1}`">{{ pokemon.name }}</router-link>
      </li>
    </ul>

    <div class="input-wrapper">
      <label for="poke-index">Tape un chiffre :</label>
      <input id="poke-index" v-model="numberInput" min="1" max="807" type="number" />
      <button @click="pageOnIndex">Go !</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
      namePokemon: "",
      idPokemon: 1,
      imagePokemon: "",
      arrPokemon: [],
      numberInput: 1
    };
  },

  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
      response.data.results.forEach(element => {
        this.arrPokemon.push(element);
      });
    });
  },

  methods: {
    pageOnIndex: function() {
      console.log(parseInt(this.numberInput));
      if (parseInt(this.numberInput) > 808) {
        alert("Tape un chiffre entre 1 et 807 ;)");
      } else if (parseInt(this.numberInput) < 0) {
        alert("Tape un chiffre entre 1 et 807 ;)");
      } else {
        this.$router.push(`/pokemon/${this.numberInput}`);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "Accueil.scss";
</style>