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

                  <play-btn :item="cat"></play-btn>
                </f7-col>
                  <f7-col>
                    <copy-btn :content="cat.sissali"></copy-btn>

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
import store from "../js/store";
import CopyBtn from "../components/CopyBtn.vue";
import PlayBtn from "../components/PlayBtn.vue";

export default {
  name: "preview",
  components: {PlayBtn, CopyBtn},
  props: {
    f7route: Object,
    f7router: Object,
  },
  data(){
    return{
      theme,
      categories,
      list:[],
      store
    }
  },

  methods:{

    getList(){
      this.categories
          .then(res=>{
          })
    }

  },

  computed:{
    category(){
      return this.store.state.all.find(cat => {
         return cat.tag === this.f7route.params.category
       });


    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>