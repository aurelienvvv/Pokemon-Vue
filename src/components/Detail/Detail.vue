<template>
  <div>
    <div class="links-nav">
      <router-link :to="`/`">Acceuil</router-link>
      <router-link :to="`/pokemon/${parseInt(this.id) - 1}`">Pokemon précédent</router-link>
      <router-link :to="`/pokemon/${parseInt(this.id) + 1}`">Pokemon suivant</router-link>
    </div>
    <div v-for="(infos, index) in arrData" :key="index">
      <h1>{{ infos.name.toUpperCase() }}</h1>
      <div class="pokemon-container">
        <img :src="infos.sprites.front_default" />

        <div class="pokemon-infos">
          <h2>Basic infos</h2>
          <ul class="basic-infos">
            <li>Weight : {{ infos.weight }}</li>
            <li>Height : {{ infos.height }}</li>
            <li class="list-type">
              Type :
              <span v-for="(type, index) in infos.types" :key="index">
                {{ capitalize(type.type.name) }}
                <span class="slash">/</span>
              </span>
            </li>
          </ul>

          <h2>Main abilities</h2>
          <ul class="abilities">
            <li
              v-for="(ability, index) in infos.abilities"
              :key="index"
            >{{ capitalize(ability.ability.name) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detail",

  data() {
    return {
      id: this.$route.params.id,
      arrData: []
    };
  },

  mounted() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(response => {
      this.arrData.push(response.data);
    });
  },

  methods: {
    capitalize: function(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },

    goNextPokemon: function() {
      this.$router.push(`/pokemon/${parseInt(this.id) + 1}`);
    },

    goPreviousPokemon: function() {
      this.$router.push(`/pokemon/${parseInt(this.id) - 1}`);
    },

    goHome: function() {
      this.$router.push(`/`);
    }
  }
};
</script>

<style lang="scss">
@import "Detail.scss";
</style>