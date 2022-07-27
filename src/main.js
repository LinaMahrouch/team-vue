import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*font awesome pour icons*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";


/*import des fichiers css et js de */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./styles.css"; //stylesheet dyal lmain
createApp(App).use(store).use(router).mount('#app')
