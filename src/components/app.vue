<template>
  <f7-app v-bind="f7params" >

  <!-- Left panel with cover effect when hidden -->
  <f7-panel left cover :visible-breakpoint="960">
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block-title>Left View Navigation</f7-block-title>
        <f7-list>
          <f7-list-item link="/left-page-1/" title="Left Page 1"></f7-list-item>
          <f7-list-item link="/left-page-2/" title="Left Page 2"></f7-list-item>
        </f7-list>
        <f7-block-title>Control Main View</f7-block-title>
        <f7-list>
          <f7-list-item link="/about/" view=".view-main" panel-close title="About"></f7-list-item>
          <f7-list-item link="/form/" view=".view-main" panel-close title="Form"></f7-list-item>
          <f7-list-item link="#" view=".view-main" back panel-close title="Back in history"></f7-list-item>
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
    setup() {

      // Framework7 Parameters
      const f7params = {
        name: 'Lean Sissali', // App name
        theme: 'auto', // Automatic theme detection



        // App store
        store: store,
        // App routes
        routes: routes,
      };
      // Login screen data
      const username = ref('');
      const password = ref('');

      const alertLoginData = () => {
        f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });
      }
      onMounted(() => {
        f7ready(() => {


          // Call F7 APIs here
        });
      });

      return {
        f7params,
        username,
        password,
        alertLoginData
      }
    }
  }
</script>