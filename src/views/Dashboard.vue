<template>
  <section class="c-wrapper">
    <h1 class="titulo">Dashboard</h1>
    <header class="c-header">
      <div class="c-block c-block--faturamento">
        <img src="../assets/icone-carteira.svg" alt="carteira" class="icones">
        <div class="c-block--textos">
          <span class="titulosBlocos">Balanço Total</span>
          <span class="valores">R$00,00</span>
        </div>
      </div>

      <div class="c-block c-block--despesas">
        <img src="../assets/icone-carteira--despesas.svg" alt="carteira de despesas" class="icones">
        <div class="c-block--textos">
          <span class="titulosBlocos-noSelect">Total Despesas</span>
          <span class="valores-noSelect">R$00,00</span>
        </div>
      </div>

      <div class="c-block c-block--lucros">
        <img src="../assets/icon-lucro.svg" alt="carteira de despesas" class="icones">
        <div class="c-block--textos">
          <span class="titulosBlocos-noSelect">Total Lucro</span>
          <span class="valores-noSelect">R$00,00</span>
        </div>
      </div>
    </header>

    <main class="c-main">
      <span class="titulo">Visão Geral</span>
      <div v-for="(task, index) in  tasks" :key="index">
        <div :title="task.subject">
          <div class="c-lista">
            <div  :class="{'c-itens__saldo': true, 'c-itens__despesa':false}">
              {{ task.subject }} - R${{ task.description }} - {{ task.balanco }}
              <div>
                <button class="c-lista__button" @click="edit(index)">Editar</button>
                <button class="c-lista__button" @click="remove(task, index)">Excluir</button>
              </div>
            </div>
            <dialog class="c-modal" id="modal" title="Exclusão de tarefa">
              <div>
                Deseja realmente excluir essa tarefa?
                <button class="c-lista-button-modal" @click="hideModal"> Cancelar</button>
                <button class="c-lista-button-modal" @click="confirmRemoveTask">Excluir</button>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
      tasks: [],
      taskSelected: [],
    }
  },

  created() {
    this.tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
  },

  methods: {
    edit(index) {
      if(this.tasks[index].balanco === "saldo"){
        this.$router.push({ name: "saldo.editar", params: { index } })
      } else{
        this.$router.push({ name: "despesa.editar", params: { index } })
      }
    },
    remove(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;

      let dialog = document.querySelector("#modal")
      dialog.show();
    },

    hideModal() {
      let dialog = document.querySelector("#modal")
      dialog.close();
    },

    confirmRemoveTask() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.hideModal();
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Poppins&display=swap');

* {
  font-family: "Poppins";
  text-decoration: none;

}

.c-wrapper {
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  gap: 16px;


  width: 100%;
  padding: 16px;
}

.c-wrapper .titulo {
  color: #000;
  font-size: 32px;
  font-weight: 600;
}

.c-header {
  display: flex;
  justify-content: space-between;
}

.c-header .icones {
  width: 63px;
  height: 63px;
  margin-bottom: 50px;
}


.c-block {
  width: 230px;
  height: 200px;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
}

.c-block--faturamento {
  background: #292929;
}

.c-block--despesas {
  background-color: #fff;
}

.c-block--lucros {
  background-color: #fff;
}

.titulosBlocos {
  font-weight: 600;
  color: #6b6b6ba9;
  font-size: 18px;
}

.titulosBlocos-noSelect {
  font-weight: 600;
  color: #000000a9;
  font-size: 18px;
}

.c-block--textos {
  display: flex;
  flex-direction: column;
}

.valores {
  font-weight: 600;
  color: #fff;
  font-size: 32px;
  margin-top: 15px;
  margin-left: 5px;
}

.valores-noSelect {
  font-weight: 600;
  color: #000000;
  font-size: 32px;
  margin-top: 15px;
  margin-left: 5px;
}

.c-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  padding: 16px;
  background-color: #d9d9d9;
}

.c-lista {
  border-radius: 4px;
  width: 100%;
  height: 100%;
}

.c-itens__saldo {
  background: #a8a8a8;
  border-radius: 4px;
  padding: 8px;
  margin: 2px;
  justify-content: space-between;
  display: flex;
  font-weight: 300;
}

.c-itens__saldo:hover {
  background: #6ffc2d9c;
}

.c-itens__despesa {
  background: #a8a8a8;
  border-radius: 4px;
  padding: 8px;
  margin: 2px;
  justify-content: space-between;
  display: flex;
  font-weight: 300;
}

.c-itens__despesa:hover{
  background: rgba(255, 0, 0, 0.61);
}

.c-lista__button {
  height: auto;
  width: auto;
  padding: 4px;
  color: #a8a8a8;
  background: #535353;
  border: none;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
}

.c-modal{
  border: none;
  border-radius: 8px;
  background: #d9d9d9;
  box-shadow: 10px 10px 8px 10px #888888;
  font-weight: 600;

  }

.c-lista-button-modal{
  height: auto;
  width: auto;
  padding: 6px;
  color: #a8a8a8;
  background: #535353;
  border: none;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
}
</style>
