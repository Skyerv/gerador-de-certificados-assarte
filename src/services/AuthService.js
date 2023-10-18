import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../FirebaseConfiguration";

class AuthService {
  appAuth = getAuth(app);
  auth = getAuth();

  async signIn(email, password) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signUp(email, password) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signOut() {
    await signOut(this.auth);
  }

  async checkLogin() {
    return new Promise((resolve) => {
      this.appAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}

export default AuthService;
