<template>
<q-page>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
      bg-color="cyan-5"
        name="Jane"
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
  <q-footer elevated class="bg-white q-pa-md">
    <q-input filled rounded bottom-slots v-model="text" label="Type a message" counter maxlength="50" :dense="dense">

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="dialog = true" />
        </template>
      </q-input>
  </q-footer>
  <q-dialog v-model="dialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Upload file</div>
        </q-card-section>

        <q-file  bottom-slots v-model="model" label="File" counter class="q-pa-md">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
        </template>
      </q-file>

        <q-card-actions align="right" class="text-cyan">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Send" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
      dialog: ref(false),
    }
  }
}
</script>
