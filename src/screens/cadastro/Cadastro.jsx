import { View, Alert } from "react-native";
import {
  BotaoTransparente,
  Container,
  Campo,
  TextoDoCampo,
  Legenda,
} from "../styles";
import { BotaoCadastro, Content, Icones, TituloCadastro } from "./styles";
import { useState } from "react";
import { auth } from "../../firebase/firebase_config";
import UsuarioService from "../../firebase/service/UsuarioService";

const Cadastro = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [invisivel, setInvisivel] = useState(true);
  const [invisivel2, setInvisivel2] = useState(true);
  const [nomeIcone, setNomeIcone] = useState("eye-off-sharp");
  const [nomeIcone2, setNomeIcone2] = useState("eye-off-sharp");

  const pressCadastro = async () => {
    
    if (
      email !== null &&
      senha === confirmaSenha &&
      senha !== "" &&
      confirmaSenha !== ""
    ) {
      acaoBotao();
    } else {
      Alert.alert(
        "Informações Inválidas! Verifique se as Digitou corretamente"
      );
    }
  };

  const acaoBotao = () => {
    UsuarioService.signUp(auth, email, senha, (userCreditial) => {
      console.log(userCreditial);
      navigation.navigate("Home");
    });

  };

  const mudarEstado = () => {
    if (invisivel === true) {
      setInvisivel(false);
      setNomeIcone("eye");
    } else {
      setInvisivel(true);
      setNomeIcone("eye-off-sharp");
    }
  };

  const mudarEstado2 = () => {
    if (invisivel2 === true) {
      setInvisivel2(false);
      setNomeIcone2("eye");
    } else {
      setInvisivel2(true);
      setNomeIcone2("eye-off-sharp");
    }
  };

  return (
    <Container>
      <Content>
        <TituloCadastro>Criar conta</TituloCadastro>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: "30%",
            justifyContent: "center",
            marginTop: "-10%",
          }}
        >
          <TextoDoCampo>
            <Legenda>Email</Legenda>
          </TextoDoCampo>

          <Campo
            placeholder="Digite seu Email"
            onChangeText={(email) => setEmail(email)}
            value={email}
            onBlur={() => (email ? null : Alert.alert("Email Obrigatório"))}
          />

          <TextoDoCampo
            style={{
              marginTop: "5%",
            }}
          >
            <Legenda>Senha</Legenda>
          </TextoDoCampo>

          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Campo
              placeholder="Digite sua Senha"
              secureTextEntry={invisivel}
              onChangeText={(senha) => setSenha(senha)}
              value={senha}
            />
            <BotaoTransparente onPress={mudarEstado}>
              <Icones name={nomeIcone} />
            </BotaoTransparente>
          </View>

          <TextoDoCampo
            style={{
              marginTop: "5%",
            }}
          >
            <Legenda>Confirma senha</Legenda>
          </TextoDoCampo>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Campo
              placeholder="Confirme a Senha"
              secureTextEntry={invisivel2}
              onChangeText={(confirmaSenha) => setConfirmaSenha(confirmaSenha)}
              value={confirmaSenha}
            />
            <BotaoTransparente onPress={mudarEstado2}>
              <Icones name={nomeIcone2} />
            </BotaoTransparente>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-40%",
          }}
        >
          <BotaoCadastro onPress={pressCadastro}>
            <Legenda
              style={{
                color: "white",
              }}
            >
              Cadastrar
            </Legenda>
          </BotaoCadastro>

          <BotaoTransparente onPress={()=> navigation.goBack()}>
            <Legenda
              style={{
                color: "red",
                marginTop: "2%",
              }}
            >
              Cancelar
            </Legenda>
          </BotaoTransparente>
        </View>
      </Content>
    </Container>
  );
};
export default Cadastro;
