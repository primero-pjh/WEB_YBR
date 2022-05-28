<template>
  
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import io from 'socket.io-client';
import '@/assets/css/site.css';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  components: {
  },
  methods: {
    
  },
  mounted: function() {
    this.$store.dispatch('get_user_info');
  },
  created: function() {
    const socket = io('http://localhost:3020', {
      withCredentials: false,
      transports : ['websocket'],  
    });
    socket.on("connection", function(data) {
      console.log("socket_id:", data);
    });
  },
}
</script>