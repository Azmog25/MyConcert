<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="register-container">
        <ion-card>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-input v-model="username" type="text" placeholder="Nom d'utilisateur"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input v-model="password" type="password" placeholder="Mot de passe"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input v-model="role" type="text" placeholder="Rôle"></ion-input>
              </ion-item>
            </ion-list>
            <ion-button  expand="full" color="purple" class="purple-button" @click="signup">S'inscrire</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {defineComponent} from "vue";
import {IonButton,IonPage,IonCard,IonCardHeader,IonInput,IonItem,IonLabel,IonCardContent,IonCardTitle} from "@ionic/vue"
import axios from "axios";

export default defineComponent({
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
      role: ''
    };
  },
  methods: {
    signup() {
      const requestBody = {
        login: this.username,
        password: this.password,
        role: this.role
      }
      axios.post('http://localhost:8082/api/user/register', requestBody)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            // Gérer les erreurs de l'appel à l'API
            console.log('Erreur lors de la connexion :', error);
          });
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
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
}

ion-input {
  margin-bottom: 10px;
}

ion-button {
  margin-top: 10px;
}

.purple-button {
  --ion-color-base: #8a2be2;
}
</style>
