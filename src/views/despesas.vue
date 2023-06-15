<template>
  <div class="c-main">
    <h1 class="titulo">
      Adicionar Despesa
    </h1>
    <form class="c-form">
      <label label-for="subject">
        Descrição:
      </label>

      <input id="subject" v-model="form.subject" type="text" class="c-input"
        placeholder="Exemplo: Salário mensal, Freelancers, Rendimentos">

      <label label-for="description" class="c-label">
        Valor:
      </label>

      <input id="description" v-model="form.description" type="number" class="c-input" placeholder="R$1300,00">

    </form>
    <button class="c-button" type="submit" @click="saveTask">
      Adicionar nova despesa
    </button>
  </div>
</template>

<script>
export default {
  name: 'Despesa',
  data() {
    return {
      form: {
        subject: "",
        description: "",
        balanco: "DESPESA"
      },
      methodSave: "new"
    }
  },

  created() {
    if (this.$route.params.index === 0 || this.$route.params.index !== undefined) {
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.form = tasks[this.$route.params.index];
    }
  },

  methods: {
    saveTask() {
      if (this.methodSave === "update") {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({ name: "dashboard" });
        return
      }

      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push({ name: "dashboard" });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Poppins&display=swap');

* {
  font-family: "Poppins";
  text-decoration: none;

}

.c-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6f6f6;
  background: #292929;

  width: 100%;
  padding: 16px;
}

.c-main h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 600;
}

.c-form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  color: #fff;
  font-weight: 600;
  font-size: 20px;
}

.c-label {
  margin-top: 16px;
}

.c-input {
  border-radius: 4px;
  border: none;
  width: 600px;
  height: 30px;
  display: flex;
  background: #494949;
  color: #fff;
}

.c-button {
  margin: 36px;
  width: 250px;
  height: 40px;
  padding: 4px;

  border-radius: 4px;
  border: none;
  background: #494949;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.c-button:hover {
  background-color: #fc2d2dd3;
  transition-duration: 0.5s;
}
</style>
