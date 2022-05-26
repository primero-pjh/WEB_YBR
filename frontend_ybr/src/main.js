import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import { router } from './router.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

var app = createApp(App).use(Quasar, quasarUserOptions);

app.use(store);
app.use(router);
app.mount('#app');
