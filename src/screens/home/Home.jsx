import { Container } from "../styles";
import Jogador from "../../../assets/images/icons/jogador-de-futebol.png";
import Times from "../../../assets/images/icons/time-de-futebol.png";
import Cronometro from "../../../assets/images/icons/cronometro.png";
import Sair from "../../../assets/images/icons/sair.png";
import { BotaoTransparenteHome, Content, Imagem, LegendaMenu } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <BotaoTransparenteHome
          onPress={() => navigation.navigate("AddDelJogador")}
        >
          <Imagem source={Jogador} />
          <LegendaMenu>Adicionar jogador</LegendaMenu>
        </BotaoTransparenteHome>

        <BotaoTransparenteHome onPress={() => navigation.navigate("Sortear")}>
          <Imagem source={Times} />
          <LegendaMenu>Sortear times</LegendaMenu>
        </BotaoTransparenteHome>

        <BotaoTransparenteHome
          onPress={() => navigation.navigate("Cronometro")}
        >
          <Imagem source={Cronometro} />
          <LegendaMenu>Cronômetro</LegendaMenu>
        </BotaoTransparenteHome>

        <BotaoTransparenteHome onPress={() => navigation.navigate("Login")}>
          <Imagem source={Sair} />
          <LegendaMenu>Sair</LegendaMenu>
        </BotaoTransparenteHome>
      </Content>
    </Container>
  );
};

export default Home;
