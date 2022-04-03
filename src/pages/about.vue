<template>
  <f7-page name="about">
    <f7-navbar no-shadow title="About" back-link="Back"></f7-navbar>
    <f7-block-title>About Ln Sissali</f7-block-title>
    <f7-block strong>
      <p>
        "Ln Sissali" pronounced learn Sissali is a community-sourced project meant to simplify the learning curve of the Sissili
        dialect, the aim of this project is to make it easier to lookup words in English and find their Sissali equivalents.
      </p>
      <h2>What it is.</h2>
      <p>
        Ln Sissali is meant to be your guide to what an everyday word or phrase may mean in Sissali, it is also meant to help complete non-speakers
        easily make up conversations with native speakers.
      </p>
      <h2>What it is NOT</h2>

      <p>
        LN Sissali is not meant to be your go-to source for academic validations, we are committed to increasing it's accuracy but
        as a community we do not recommend it as an academically certified source for the language/dialect.
      </p>
      <h2>Contributors/Team</h2>

      <f7-card class="demo-card-header-pic" v-for="person in people" no-shadow>
        <f7-card-header
            class="no-border"
            valign="bottom"
            :style='"background-image:url("+person.photo_url+")"'
        >{{person.name}}</f7-card-header>
        <f7-card-content>
          <p class="date">{{person.title}}</p>
          <p>{{person.profession}}</p>
        </f7-card-content>

      </f7-card>
    </f7-block>
    <f7-block>


         </f7-block>
  </f7-page>
</template>
<script>
export default {
  data(){
    return{
      people:[
        {
          name:"Haruna Kuri",
          title:"Project coordinator",
          profession:"Professional Teacher",
          photo_url:"/people/kuri.jpeg"
        },
        {
          name:"Emanuela Lieku",
          title:"Translator",
          profession:"Fashion designer",
          photo_url:"/people/ema.jpeg"

        },
        {
          name:"Yusif katulie",
          title:"Developer",
          profession:"Senior software engineer",
          photo_url:"/people/yusif.jpeg"

        },

      ]
    }
  }


}
</script>

<style>
.demo-card-header-pic .card-header {
  height: 80vw;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.demo-card-header-pic .card-content-padding .date{
  color: #8e8e93;
}
</style>
