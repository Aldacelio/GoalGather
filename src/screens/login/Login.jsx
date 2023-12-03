import { View } from "react-native";
import {
  BotaoTransparente,
  Container,
  Campo,
  TextoDoCampo,
  Legenda,
} from "../styles";
import { BotaoLogin, Content, TituloLogin } from "./styles";
import UsuarioService from "../../firebase/service/UsuarioService";
import { auth } from "../../firebase/firebase_config";
import { useState } from "react";
import { Icones } from "../cadastro/styles";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [invisivel, setInvisivel] = useState(true);
  const [nomeIcone, setNomeIcone] = useState("eye-off-sharp");

  const logar = () => {
    UsuarioService.signIn(auth, email, senha, (userCreditial) => {
      if (userCreditial) {
        navigation.navigate("Home");
      }
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

  return (
    <Container>
      <Content>
        <TituloLogin>Login</TituloLogin>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: "30%",
            justifyContent: "center",
          }}
        >
          <TextoDoCampo>
            <Legenda>Email</Legenda>
          </TextoDoCampo>
          <Campo
            placeholder="Digite seu email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <TextoDoCampo
            style={{
              marginTop: "5%",
            }}
            secureTextEntry={true}
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
        </View>

        <BotaoLogin
          style={{
            marginTop: "-15%",
          }}
          onPress={logar}
        >
          <Legenda
            style={{
              color: "white",
            }}
          >
            Login
          </Legenda>
        </BotaoLogin>

        <BotaoTransparente
          style={{
            marginTop: "-15%",
          }}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Legenda>Não Possui uma Conta? Criar Conta</Legenda>
        </BotaoTransparente>

        <BotaoTransparente>
          <Legenda></Legenda>
        </BotaoTransparente>
      </Content>
    </Container>
  );
};

export default Login;
