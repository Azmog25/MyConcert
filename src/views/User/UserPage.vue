<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="header-title">Bienvenue sur l'application MyConcert</ion-title>
        <ion-buttons slot="end">
          <ion-button color="danger" @click="logout()">Déconnexion</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="home-container">
        <img src="/assets/logo.png" alt="Logo MyConcert" class="logo-image">
        <ion-button expand="full" color="success" @click="createConcert()">Créer un concert</ion-button>
        <ion-button expand="full" color="purple" @click="manageConcerts()">Gérer les concerts</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {IonButton,IonPage,IonCard,IonCardHeader,IonInput,IonItem,IonLabel,IonCardContent,IonCardTitle} from "@ionic/vue"
import router from '../../router/index'

export default defineComponent({
  name: 'UserPage',
  data() {
    return {
      username: '',
      password: '',
      role: ''
    }
  },
  methods: {
    createConcert() {
      // Action à effectuer lors du clic sur le bouton "Créer un concert"
      console.log("Créer un concert");
      router.push('/addConcert')
    },
    manageConcerts() {
      // Action à effectuer lors du clic sur le bouton "Gérer les concerts"
      console.log("Gérer les concerts");
    }
  },
  components: {
    IonButton,
    IonPage,
    IonCard,
    IonCardHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonCardContent,
    IonCardTitle
  }
});
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
