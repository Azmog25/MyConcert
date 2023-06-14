<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="dark" @click="goBack()">
            <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Ajouter un concert</ion-title>
        <ion-buttons slot="end">
          <ion-button color="danger" @click="logout()">Déconnexion</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom du concert</ion-label>
          <ion-input v-model="concert.name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Description du concert</ion-label>
          <ion-textarea v-model="concert.description"></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Date du concert</ion-label>
          <ion-datetime v-model="concert.date" display-format="DD/MM/YYYY"></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Heure du concert</ion-label>
          <ion-datetime v-model="concert.time" display-format="HH:mm" picker-format="HH:mm"></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Catégorie du groupe</ion-label>
          <ion-select v-model="concert.category">
            <ion-select-option v-for="category in categories" :value="category.id" :key="category.id">
              {{ category.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-button expand="full" color="success" @click="addConcert()">Ajouter le concert</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import axios from 'axios';
import {
  IonButton, IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonIcon
} from "@ionic/vue"
import {defineComponent} from "vue";

export default defineComponent({
  name: 'AddConcertPage',
  data() {
    return {
      concert: {
        name: '',
        description: '',
        date: '',
        time: '',
        category: ''
      },
      categories: []
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonIcon,
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/categories');
        this.categories = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    goBack() {
      // Action à effectuer lors du clic sur le bouton de retour
      console.log("Retour");
    },
    addConcert() {
      // Action à effectuer lors du clic sur le bouton "Ajouter le concert"
      console.log("Ajouter le concert", this.concert);
    },
    logout() {
      // Action à effectuer lors du clic sur le bouton "Déconnexion"
      console.log("Déconnexion");
    }
  },
  mounted() {
    this.fetchCategories();
  }
});
</script>

<style scoped>
ion-content {
  --ion-background-color: #f4f4f4;
}
</style>
