import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

class UsuarioService {
  static signUp = (auth, email, senha, callback) => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCreditial) => {
        callback(userCreditial);
      })
      .catch(()=>Alert.alert("Email ou senha inválidos"));
  };

  static signIn = (auth, email, senha, callback) => {
    signInWithEmailAndPassword(auth,email,senha)
    .then((userCreditial) => {
      callback(userCreditial);
    })
    .catch(()=>Alert.alert("Usuario ou senha inválidos!!"));
  }
}

export default UsuarioService;
