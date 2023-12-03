import { useState } from "react";
import { Container } from "../styles";
import { BotaoCronometro, Content, LegendaBotao, LegendaTempo } from "./styles";
import { View } from "react-native";

const Cronometro = ({ navigation }) => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [intervalo, setIntervalo] = useState();

  const iniciar = () => {
    setIntervalo(
      setInterval(() => {
        mudarTempo();
      }, 1000)
    );
  };

  const parar = () => {
    if (intervalo) {
      clearInterval(intervalo);
    }
  };

  const limpar = () => {
    parar();
    setSegundos(0);
    setMinutos(0);
  };

  const mudarTempo = () => {
    setSegundos((prevState) => {
      if (prevState + 1 == 60) {
        setMinutos(minutos + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <Container>
      <Content>
        <LegendaTempo>
          {minutos < 10 ? "0" + minutos : minutos}
          {":"}
          {segundos < 10 ? "0" + segundos : segundos}
        </LegendaTempo>

        <View style = {{
          width: "90%",
          marginTop: "3%",
          marginLeft: "7%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
          <BotaoCronometro onPress={iniciar}>
            <LegendaBotao>Iniciar</LegendaBotao>
          </BotaoCronometro>
          <BotaoCronometro onPress={parar}>
            <LegendaBotao>Parar</LegendaBotao>
          </BotaoCronometro>

          <BotaoCronometro onPress={limpar}>
            <LegendaBotao>Limpar</LegendaBotao>
          </BotaoCronometro>
        </View>
      </Content>
    </Container>
  );
};

export default Cronometro;
