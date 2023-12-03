import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../firebase_config";
import { get, getDatabase, push, ref, remove, set } from "firebase/database";
import { Alert } from "react-native";

function addJogadorFirebase(userUid, nome) {
  try {
    const jogadorRef = ref(database, `Jogadores/` + userUid);
    novaConsultaRef = push(jogadorRef);
    set(novaConsultaRef, { nome: nome });
    Alert.alert("adicionado com Sucesso!");
  } catch (error) {
    console.log(error);
  }
}

async function getJogadoresFirebase(userUid) {
  const jogadorRef = ref(database, `Jogadores/` + userUid);

  try {
    const snapshot = await get(jogadorRef);
    return snapshot.val();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function removeJogadoresFirebase(userUid, itemId) {
  const jogadorRef = ref(database, `Jogadores/${userUid}/${itemId}`);
  if (itemId) {
    remove(jogadorRef);
  }
}

export default {
  addJogadorFirebase,
  getJogadoresFirebase,
  removeJogadoresFirebase,
};
