<template>
  <f7-app :theme-dark="darkMode" v-bind="f7params" >

  <!-- Left panel with cover effect when hidden -->
  <f7-panel left cover :visible-breakpoint="960" nonce>
    <f7-view>
      <f7-page>

        <f7-list>
          <f7-list-item link="/about/" view=".view-main" panel-close title="About"></f7-list-item>
          <f7-list-item
              title="Dark Theme"
          >
            <template #after>
              <f7-toggle @toggle:change="toggleTheme()" :value="darkMode" :checked="darkMode" />
            </template>
          </f7-list-item>
        </f7-list>

      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>


  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';


  import routes from '../js/routes.js';
  import store from '../js/store';

  export default {
    data(){
      return{
        darkMode:false,
        f7params : {
          name: 'Lean Sissali', // App name
          theme: 'auto', // Automatic theme detection



          // App store
          store: store,
          // App routes
          routes: routes,

        }
      }
    },
    methods:{
      toggleTheme(){
        this.darkMode=!this.darkMode;
        if (this.darkMode){
          localStorage.setItem("darkTheme","true");
        }else {
          localStorage.removeItem("darkTheme");

        }
      }
    },
    mounted() {

      this.darkMode = Boolean(localStorage.getItem("darkTheme"));

    }

  }
</script>