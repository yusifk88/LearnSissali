<template>
  <f7-page name="about">
    <f7-navbar no-shadow :title="category.title" back-link="Back"></f7-navbar>

      <f7-list accordion-list style="margin-top: 0 !important; margin-bottom: 0 !important;"  >
        <f7-list-item accordion-item :title="cat.english" v-for="cat in category.items">
          <f7-accordion-content>
            <f7-block>
              <h1 style="color: #2e86ab; font-weight: normal;" >
              {{cat.sissali}}
              </h1>

              <f7-row>
                <f7-col>
                  <f7-button large x-small @click=""  ><f7-icon f7="play"></f7-icon></f7-button>

                </f7-col>
                  <f7-col>
                    <f7-button large x-small @click=""  ><f7-icon f7="square_on_square"></f7-icon></f7-button>

                  </f7-col>
              </f7-row>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>

  </f7-page>

</template>

<script>
import categories from "../assets/categories.json";
import {theme} from "framework7-vue";
export default {
  name: "preview",
  props: {
    f7route: Object,
    f7router: Object,
  },
  data(){
    return{
      theme,
      categories,
      list:[]
    }
  },

  methods:{

    getList(){
      this.categories
          .then(res=>{
            console.log(res);
          })
    }

  },

  computed:{
    category(){
      let item= this.categories.find(cat=>{
        return cat.tag === this.f7route.params.category
      });


       return item;


    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>