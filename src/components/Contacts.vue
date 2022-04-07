<template>
  <div class="q-pa-md" style="max-width: 350px">

    <q-list >
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="cyan-5" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>

        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import config from "../config.js"

const offline = [ {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
} ]

export default {
  
  data(){
    return {
      contacts: [],
    }
  },
  created(){
    this.users();
  },
  methods:{
    async users(){
      let data = await config.get("/user");
      let cont = data.data;
      cont.forEach(this.setUsers)
    },
    setUsers(element){
      this.contacts.push({
        id: element.id,
        name: element.nombre,
        matricula: element.matricula
      })
    }
  }
}
</script>
