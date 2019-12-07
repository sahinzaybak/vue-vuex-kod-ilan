
<template>
  <div></div>
</template>



<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      list: []
    };
  },
  created() {
    axios.post("https://deneme-3ed40.firebaseio.com/family.json", {
      //POST İŞLEMİ
      name: "serife",
      surname: "zaybak"
    });
    axios.get("https://deneme-3ed40.firebaseio.com/family.json") //GET İŞLEMİ
      .then(value => {
        this.list = Object.values(value.data); //gelen objeyi diziye çevirdim. Çünkü firebase dizileri deskteklemiyor.. Her zaman obje olarak döndürüyor bize.
        //www.it-swarm.net/tr/javascript/jquery-kullanarak-bir-js-nesnesini-bir-diziye-donusturme/940575344/
        console.log(this.list);
      });
  }
};
</script>

<style lang="scss">

</style>
