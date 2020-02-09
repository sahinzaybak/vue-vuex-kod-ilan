<template>
  <div class="add-advert">
    <div class="detail">
      <div class="detail-header">
        <div class="custom-container">
          <h2 class="detail-jobTitle">Ücretsiz İlan Ekle</h2>
        </div>
      </div>
    </div>

    <div class="add-advert-form">
      <div class="custom-container">
        <div class="advertWrp">
          <h2 class="advertWrp-title">Genel Bilgiler</h2>
          <div class="row">
            <div class="col-12 col-md-6 add-advert__item">
              <input type="text" v-model="eMail" placeholder="E-mail adresiniz" />
              <input type="text" v-model="location" placeholder="Lokasyon" />
              <vue-tags-input
                v-model="tag"
                :tags="tags"
                :autocomplete-items="filteredItems"
                @tags-changed="newTags => tags = newTags"
              />
            </div>
            <div class="col-12 col-md-6 add-advert__item">
              <input type="text" v-model="position" placeholder="Pozisyon" />
              <select class="form-control" v-model="type" id="exampleFormControlSelect1">
                <option disabled selected>İlan Tipi</option>
                <option>Tam Zamanlı</option>
                <option>Yarı Zamanlı</option>
                <option>Stajyer</option>
              </select>
              <input type="text" v-model="url" placeholder="Başvuru URL adresi" />
            </div>
            <div class="col-12 textarea">
              <vue-editor placeholder="as" v-model="content"></vue-editor>
            </div>
          </div>
        </div>

        <div class="advertWrp">
          <h2 class="advertWrp-title">Firma Bilgileri</h2>
          <div class="row">
            <div class="col-12 col-md-6 add-advert__item">
              <input type="text" v-model="companyName" placeholder="Firma Adı" />
              <input type="text" v-model="logoURL" placeholder="Logo URL" />
            </div>
            <div class="col-12 col-md-6 add-advert__item">
              <input type="text" v-model="webAdress" placeholder="Web Site" />
              <input type="text" v-model="linkedin" placeholder="Linkedin URL" />
            </div>
          </div>
        </div>
        <a class="send-form" @click="sendForms">Gönder</a>
      </div>
    </div>
  </div>
</template>



<script>
import VueTagsInput from "@johmun/vue-tags-input";
import { VueEditor } from "vue2-editor";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  components: { VueEditor, VueTagsInput },
  name: "AddAdvert",

  data() {
    return {
      eMail: "",
      position: "",
      location: "",
      url: "",
      type: "İlan Tipi",
      companyName: "",
      logoURL: "",
      webAdress: "",
      linkedin: "",
      content:
        "<h3 class='placeholder'>İlan açıklamanızı buraya girebilirsiniz.</h3>",
      tag: "",
      tags: [],
      autocompleteItems: [
        {
          text: "frontend"
        },
        {
          text: "backend"
        },
        {
          text: "vuejs"
        },
        {
          text: "vuex"
        },
        {
          text: "react"
        },
        {
          text: "redux"
        },
        {
          text: "angular"
        },
        {
          text: "html"
        },
        {
          text: "css"
        },
        {
          text: "jquery"
        },
        {
          text: "bootstrap"
        },
        {
          text: "javascript"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchSendForms"]),

    sendForms() {
      if (this.type == "Tam Zamanlı") this.type = 1;
      if (this.type == "Yarı Zamanlı") this.type = 2;
      if (this.type == "Stajyer") this.type = 3;

      //Birden fazla parametre göndermek için bu yöntem kullanılır.
      this.fetchSendForms({
        setMail: this.eMail,
        setPosition: this.position,
        setLocation: this.location,
        setURL: this.url,
        setTags: this.tags,
        setType: this.type,
        setCompanyName: this.companyName,
        setLogo: this.logoURL,
        setWebAdress: this.webAdress,
        setLinkedin: this.linkedin,
        setContent: this.content
      });
    }
  },
    computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
};
</script>

<style lang="scss">
.add-advert {
  .ti-tag{
    background-color: #f79843;
  }
  .ti-selected-item{
     background-color: #f79843;
  }
  .vue-tags-input{
    max-width: 100%;
  }
  .send-form {
    color: #f7963f;
    font-size: 20px;
    background-color: #f79843;
    padding: 15px 39px;
    margin-left: -15px;
    &:hover {
      background-color: black;
      color: white !important;
    }
  }
  &__item,
  .textarea {
    padding-left: 0;
    margin-top: -14px;
  }
  .quillWrapper {
    margin-top: 15px;
    .placeholder {
      font-family: "Comfortaa", cursive;
      font-weight: 100;
      font-size: 16px;
      color: #7e89a1;
    }
  }
  &-form {
    margin-top: 20px;
    padding-bottom: 100px;
  }
  input {
    margin-bottom: 24px;
  }
  input,
  textarea {
    border: 1px solid #e4dede;
  }
  select {
    margin-bottom: 24px;
    font-size: 15px;
    color: #7e89a1;
    font-weight: 600;
  }
}
.advertWrp {
  &-title {
    margin-left: -17px;
    margin-bottom: 35px;
  }
  padding: 50px 0 20px;
  h1 {
    margin-bottom: 50px;
    margin-left: -15 px;
  }
}
.detail {
  padding-top: 81px;
  background-image: url(https://cdn-desktop.sikayetvar.com/images/complaint-story-bg.png);
  background-attachment: fixed;
  &-top {
    display: flex;
    align-items: center;
    height: 219px;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 50px;
  }
  &-header {
    position: relative;
    height: 260px;
    background-image: url(https://eo4society.esa.int/wp-content/uploads/2019/09/second-phiweek-image-1.jpeg);
    background-size: cover;
    .custom-container {
      height: 100%;
      display: flex;
      align-items: center;
      color: #f1a560;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      background: linear-gradient(to right, #00000080, #000000e0);
    }
  }
}
</style>
