import { Alert, View } from "react-native";
import { BotaoTransparente, Container, Legenda } from "../../styles";
import {
  BotaoTransparenteAdicionar,
  CampoAdicionar,
  Content,
  Icones,
  IconesMais,
  ImagemAdd,
  ListaJogadores,
  ListagemView,
} from "./styles";
import JogadoresService from "../../../firebase/service/JogadoresService";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase_config";

const AddDelJogador = ({ navigation }) => {
  const [nome, setNome] = useState();
  const [uid, setUid] = useState();
  const [data, setData] = useState([]);

  const atualizarLista = async () => {
    try {
      const consultasObj = await JogadoresService.getJogadoresFirebase(uid);

      // Converte o objeto em um array de objetos com o ID incluso
      const consultasArray = Object.keys(consultasObj || {}).map((id) => ({
        id,
        ...consultasObj[id],
      }));

      console.log(consultasArray);

      setData(consultasArray || []);
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }

    // console.log(data);
  };

  atualizarLista();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
      atualizarLista();
    });
  }, []);

  const adicionarNoBanco = async () => {
    if (uid) {
      JogadoresService.addJogadorFirebase(uid, nome);
      setNome("");
     await atualizarLista();
    } else {
      Alert.alert("digite o nome");
    }
  };
  const removerDoBanco = async (jogadorId) => {
    try {
      await JogadoresService.removeJogadoresFirebase(uid, jogadorId);
      atualizarLista();
    } catch (error) {
      console.error("Erro ao excluir consulta:", error);
    }
  };

  return (
    <Container>
      <Content>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <CampoAdicionar
            onChangeText={(nome) => setNome(nome)}
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 2,
              marginBottom: 30,
            }}
          />

          <BotaoTransparenteAdicionar onPress={adicionarNoBanco} >
            <IconesMais name="add-circle-sharp" />
          </BotaoTransparenteAdicionar>
        </View>

        <ListaJogadores
          data={data}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({ item }) => (
            <ListagemView>
              <Legenda>{item.nome}</Legenda>
              <BotaoTransparente onPress={ () => removerDoBanco(item.id)}>
                <Icones name="trash" />
              </BotaoTransparente>
            </ListagemView>
          )}
        />
      </Content>
    </Container>
  );
};

export default AddDelJogador;
