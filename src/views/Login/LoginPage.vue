<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="login-container">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Connexion</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Nom d'utilisateur</ion-label>
              <ion-input v-model="username"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Mot de passe</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>

            <ion-button expand="full" color="purple" class="purple-button" @click="login()">Connexion</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
import {IonButton,IonPage,IonCard,IonCardHeader,IonInput,IonItem,IonLabel,IonCardContent,IonCardTitle} from "@ionic/vue"
import {defineComponent} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import router from '../../router/index'

export default defineComponent ({
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      role: ''
    }
  },
  methods: {
    login() {
      const requestBody = {
        login: this.username,
        password: this.password,
        role: this.role
      }
      axios.post('http://localhost:8082/api/user/login', requestBody)
          .then(response => {
            console.log(response)
            if(response.data.role === 'admin') {
              console.log('admin')
              router.push('/admin')
            } else if(response.data.role === 'user') {
              console.log('user')
              router.push('/user')
            }
          })
          .catch(error => {
            // Gérer les erreurs de l'appel à l'API
            console.log('Erreur lors de la connexion :', error);
          });
    },
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
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

ion-content {
  --ion-background-color: #fff;
}

ion-card {
  background-color: #fff;
}

ion-item {
  --ion-color: white;
}

.purple-button {
  --ion-color-base: #8a2be2;
}
</style>