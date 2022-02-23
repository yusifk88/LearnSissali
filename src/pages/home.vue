<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="true" no-shadow>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Learn Sissali</f7-nav-title>

      <f7-nav-title-large>Learn Sissali</f7-nav-title-large>
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
      </f7-nav-right>

      <f7-searchbar
          class="searchbar-demo"
          expandable
          search-container=".search-list"
          search-in=".item-title"
          :disable-button="!theme.aurora"
      ></f7-searchbar>

    </f7-navbar>

    <f7-block margin>

    <f7-row>

      <f7-col class="" width="30" v-for="menu in menus" :key="menu.route">
        <div style="padding: 10px;">

          <center>

        <img :src="menu.icon" width="60"><br>
          {{menu.title}}
          </center>

        </div>

      </f7-col>

    </f7-row>

    </f7-block>

  </f7-page>
</template>
<script>
import { theme } from 'framework7-vue';

  export default {

    data(){
      return{
        theme,

        menus:[
          {
            title:"Greetings",
            icon:"/icons/handshake.png",
            route:"/view/greetings"
          },
          {
            title:"Conversation",
            icon:"/icons/chat.png",
            route:"/view/conversation"
          },
          {
            title:"Numbers",
            icon:"/icons/numbers.png",
            route:"/view/numbers"
          },
          {
            title:"Time & Date",
            icon:"/icons/clock.png",
            route:"/view/timedate"
          },
          {
            title:"Direction & places",
            icon:"/icons/map.png",
            route:"/view/direction"
          },
          {
            title:"Transport",
            icon:"/icons/bus.png",
            route:"/view/transportation"
          },
          {
            title:"Hospitality",
            icon:"/icons/house.png",
            route:"/view/accommodation"
          },
          {
            title:"Eating Out",
            icon:"/icons/cutlery.png",
            route:"/view/eating"
          },
          {
            title:"Shopping",
            icon:"/icons/shopping.png",
            route:"/view/shopping"
          },
          {
            title:"Colours",
            icon:"/icons/colors.png",
            route:"/view/colors"
          },
          {
            title:"Cities",
            icon:"/icons/city.png",
            route:"/view/cities"
          },
          {
            title:"Countries",
            icon:"/icons/globe.png",
            route:"/view/countries"
          },
          {
            title:"Tourist Attractions",
            icon:"/icons/gallery.png",
            route:"/view/tourist"
          },
          {
            title:"Family",
            icon:"/icons/family.png",
            route:"/view/family"
          },
          {
            title:"Dating",
            icon:"/icons/dating.png",
            route:"/view/dating"
          },
          {
            title:"Emergency",
            icon:"/icons/alert.png",
            route:"/view/emergency"
          },
          {
            title:"Feeling Sick",
            icon:"/icons/sick.png",
            route:"/view/feelingsick"
          },
          {
            title:"Tongue Twister",
            icon:"/icons/rocket.png",
            route:"/view/tongtwister"
          }

        ]

      }
    }


  }


</script>