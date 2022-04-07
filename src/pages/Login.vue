<template>
  <q-page>
    <q-card style="width: 700px" class="q-my-xl bg-cyan-5">
      <q-card-section>
        <q-input bottom-slots v-model="matricula" label="Matrícula">
          <template v-slot:before>
            <q-icon name="person" color="white" />
          </template>
        </q-input>

        <q-input bottom-slots v-model="pass" label="Contraseña">
          <template v-slot:before>
            <q-icon name="key" color="white" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat style="color: white" label="Entrar" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
import { ref } from "vue";
import config from "../config.js";
import { Notify } from "quasar";
export default {
  data() {
    return {
      matricula: ref(""),
      pass: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
  methods: {
    async login() {
      let formData = { matricula: this.matricula, password: this.pass };

      try {
        let data = await config.get(
          `/auth/login?matricula=${this.matricula}&password=${this.pass}`
        );
        if (data.data) {
          localStorage.setItem("userPassword", data.data.password);
          Notify.create({
            type: "positive",
            message: "Si existe",
          });
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
        Notify.create({
          type: "negative",
          message: "No existe",
        });
      }
    },
  },
};
</script>
