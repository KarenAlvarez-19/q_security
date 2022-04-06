<template>
<q-page>
<q-card style="width: 700px" class="q-my-xl bg-cyan-5" >
      <q-card-section>
        <q-input  bottom-slots v-model="text" label="Matrícula" >
        <template v-slot:before>
          <q-icon name="person" color="white" />
        </template>
      </q-input>

      <q-input  bottom-slots v-model="text" label="Contraseña" >
        <template v-slot:before>
          <q-icon name="key" color="white"/>
        </template>
      </q-input>
      </q-card-section>
<q-card-actions align="right">
 <q-btn flat style="color: white" label="Entrar" />
</q-card-actions>
    </q-card>
      </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>