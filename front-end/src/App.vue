<template>
  <main >
    <h1 class="titulo">Personagens</h1>
    <ul class="lista_cards">
      <personagemCard
        v-for="(personagem, index) in personagens"
        :key="index"
        :personagem="personagem"
      />
    </ul>
  </main>
</template>

<script>
import axios from "axios";
import personagemCard from "./components/personagemCard.vue";

export default {
  name: "App",
  components: {
    personagemCard,
  },
  data() {
    return {
      personagens: [],
    };
  },
  methods: {
    async buscarPersonagens() {
      try {
        const response = await axios.get("http://localhost:3333/personagens");
        this.personagens = response.data;
      } catch (error) {
        console.error("erro ao buscar personagem:", error);
      }
    },
  },
  created() {
    this.buscarPersonagens();
  },
};
</script>

<style scoped>
main {
  max-width: 1300px;
  margin: 0 auto;
}
.titulo {
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  font-size: 2.2rem
}

.lista_cards {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .lista_cards {
    grid-template-columns: 1fr 1fr;
  }
}
@media ( min-width: 1024px) {
  .lista_cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
