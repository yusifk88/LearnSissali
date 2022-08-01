<template>
  <f7-button large x-small @click="copy"  ><f7-icon f7="square_on_square"></f7-icon></f7-button>
<textarea style="display: none" v-model="content" id="copyBox"></textarea>
</template>

<script>
import { Toast } from '@capacitor/toast';
import { Clipboard } from '@capacitor/clipboard';

export default {
  props:{
    content:String,
  },
  name: "CopyBtn",
  methods:{
   async copy(){


      await Clipboard.write({
        string:this.content
      })
        await Toast.show({
          text: "Copied, you can now paste anywhere",
          position: "bottom",
          duration: "long"

        });

    }
  }
}
</script>

<style scoped>

</style>