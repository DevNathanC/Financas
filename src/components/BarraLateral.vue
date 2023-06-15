<template>
  <div class="barraLateral">
    <img src="../assets/logo.png" alt="balança" class="imgBalanca">
    <h1 class="titulo">GERENCIAR</h1>

    <nav>
      <router-link to="/" class="button">
        <Icon icon="ri:dashboard-fill" class="icones" />Dashboard
      </router-link>
      <router-link to="/saldo" class="button">
        <Icon icon="simple-icons:plausibleanalytics" class="icones" />SALDO
      </router-link>
      <router-link to="/despesas" class="button">
        <Icon icon="mingcute:performance-fill" class="icones"/>DESPESAS
      </router-link>
    </nav>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'BarraLateral',
  components:{
    Icon,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Poppins&display=swap');

* {
  font-family: "Poppins";
  text-decoration: none;
  color: #fff;

}
.barraLateral {
  background: #252525;
  height: 100;
  width: 280px;
  text-align: center;

}

.imgBalanca {
  max-width: 250px;
  max-height: 180px;
  width: auto;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
}

.barraLateral .titulo {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin: 20px;
  text-align: start;
}

.barraLateral nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  text-align: start;
}

.barraLateral nav img {
  border-radius: 0;
  justify-content: center;
}

.barraLateral .button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.barraLateral .button:hover{
  color: #6FFC2D ;
}
.barraLateral .icones {
  margin: 5px;
  width: 24px;
  height: 24px;
  color:#808080;
}

.router-link-active,.router-link-active .icones{
  color: #6FFC2D;
}








</style>
