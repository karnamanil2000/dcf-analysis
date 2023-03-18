import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Bootstrap, Jquery, Popper
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
