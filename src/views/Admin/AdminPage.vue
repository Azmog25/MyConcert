<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page Administrateur</ion-title>
        <ion-buttons slot="end">
          <ion-button color="danger" @click="logout">
            Déconnexion
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="full" color="primary" @click="createConcert">
        Créer un concert
      </ion-button>
      <ion-button expand="full" color="secondary" @click="manageConcerts">
        Gérer les concerts
      </ion-button>
      <ion-button expand="full" color="yellow" @click="manageCategories">
        Gérer les catégories
      </ion-button>
      <ion-button expand="full" color="success" @click="manageUsers">
        Gérer les utilisateurs
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import { exit } from 'ionicons/icons';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'AdminPage',
  data() {
    return {
      exitIcon: exit,
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
    logout() {
      // Gérer la déconnexion
    },
    createConcert() {
      // Gérer la création d'un concert
    },
    manageConcerts() {
      // Gérer les concerts
    },
    manageCategories() {
      // Gérer les catégories
    },
    manageUsers() {
      // Gérer les utilisateurs
    },
  },
});
</script>

<style scoped>
.ion-padding {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
