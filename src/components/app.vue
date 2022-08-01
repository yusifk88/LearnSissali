<template>
  <f7-app :theme-dark="darkMode" v-bind="f7params">

    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover :visible-breakpoint="960" nonce>
      <f7-card
          style="background-color:#2e86ab; color: #ffffff; margin: 0; padding: 50px; text-align: center; border: none;"
          no-shadow
      >
        <h1 style="font-weight: lighter; margin-bottom: 0;">LN Sissali</h1>
        <h3 style="font-weight: normal; margin-top: 0;">La yikoro nɛ!</h3>
      </f7-card>
      <f7-view style="margin-top: 0;">
        <f7-page>

          <f7-list>
            <f7-list-item link="/about/" view=".view-main" panel-close title="About"></f7-list-item>
            <f7-list-item
                title="Dark Theme"
            >
              <template #after>
                <f7-toggle @toggle:change="toggleTheme()" :value="darkMode" :checked="darkMode"/>
              </template>
            </f7-list-item>
          </f7-list>

        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>

      <f7-popup v-model:opened="isOpened">
          <f7-block>
            <f7-swiper pagination>
              <f7-swiper-slide>
                
                <img src="/icons/festive.svg" height="200">
                <h1 style="font-weight: normal; color: #08AC96;">Welcome to LN Sissali</h1>
                <h2 style="font-weight: lighter; line-height: 25px">
                  We hope to make your journey in learning to read and write the Sissali dialect a breeze...
                </h2>

              </f7-swiper-slide>
              <f7-swiper-slide>
                <img src="/icons/search.svg" height="200">
                <h1 style="font-weight: normal; color: #08AC96;">Let's search for it</h1>
                <h2 style="font-weight: lighter; line-height: 25px">
                  We make it easy to search for that English word to find out how it is spelt and pronounced in Sissali...
                </h2>

              </f7-swiper-slide>
              <f7-swiper-slide>
                <img src="/icons/start.svg" height="200">
                <h1 style="font-weight: normal; color: #08AC96;">ŋ lɔliŋ</h1>
                <h2 style="font-weight: lighter; line-height: 25px">
                  Let's get you started...
                </h2>
                <f7-button large @click="closeStartup" fill round>Get started <f7-icon icon="icon-forward"></f7-icon></f7-button>
              </f7-swiper-slide>
            </f7-swiper>

          </f7-block>
      </f7-popup>


  </f7-app>
</template>
<script>
import {ref, onMounted} from 'vue';
import {f7, f7ready} from 'framework7-vue';
import { App } from '@capacitor/app';

import routes from '../js/routes.js';
import store from '../js/store';
import categories from '../assets/categories.json';

export default {
  data() {
    return {
      darkMode: false,
      isOpened:false,
      f7params: {
        name: 'Lean Sissali', // App name
        theme: 'auto', // Automatic theme detection


        // App store
        store: store,
        // App routes
        routes: routes,

      }
    }
  },

  methods: {
    closeStartup(){
      this.isOpened=false;
      localStorage.setItem("started",'true');
    },
    toggleTheme() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        localStorage.setItem("darkTheme", "true");
      } else {
        localStorage.removeItem("darkTheme");

      }
    }
  },
  mounted() {

    this.isOpened=!Boolean(localStorage.getItem("started"));
  },
  setup() {
    let darkMode= false;


        onMounted(() => {

          darkMode = Boolean(localStorage.getItem("darkTheme"));



        f7ready(function (){

          App.addListener('backButton', () => {
            f7.views.main.router.back();
          });

          store.state.all = categories;


        });

        }
    )

  }

}
</script>

<style>
.swiper-slide {
  text-align: center;
  line-height: 14px;
  height: 60vh;
  margin: auto;
  padding-top: 200px;
}
</style>