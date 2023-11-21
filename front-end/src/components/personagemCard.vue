<template>
  <li class="card">
    <img :src="personagem.image" />
    <h2>{{ personagem.name }}</h2>
    <p><b>Visto por última em:</b> {{ personagem.location.name }}</p>
    <p>
      <b>Gênero: </b
      >{{ personagem.gender == "Male" ? "Masculino" : "Feminino" }}
    </p>
    <p>
      <b>Aparições na 1° temporada</b>:
      {{ personagem.aparicoesPorTemporada.primeiraTemporada }}
    </p>
    <p>
      <b>Aparições na 2° temporada</b>:
      {{ personagem.aparicoesPorTemporada.segundaTemporada }}
    </p>
    <p>
      <b>Aparições na 3° temporada</b>:
      {{ personagem.aparicoesPorTemporada.terceiraTemporada }}
    </p>
    <p>
      <b>Aparições no total:</b>
      {{ personagem.aparicoesPorTemporada.totalAparicoes }}
    </p>
    <p>
      <b>Status:</b>
      {{ personagem.status == "Alive" ? "Vivo" : "Morto" }}
    </p>
  </li>
</template>

<script>
export default {
  name: "personagemCard",
  props: {
    personagem: Object,
  }
};
</script>

<style scoped>
.card {
  list-style-type: none;
  padding: 10px;
  max-width: 320px;
  height: 650px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  margin: 30px auto;
}

.card p {
  margin-top: 20px;
}
</style>
