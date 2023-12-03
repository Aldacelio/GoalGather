import React, { Component } from "react";
import {
  Alert,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import JogadoresService from "../../firebase/service/JogadoresService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { BotaoSortear, CampoSortear, LegendaCheckSortear, LegendaSortear } from "../styles";

class Sortear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busca: "",
      timesQtd: null,
      timesAleatorios: null,
      jogadoresPorTime: null,
      uid: null,
      data: [],
      marcados: [],
      showModal: false,
    };
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ uid: user.uid }, () => {
          this.atualizarLista();
        });
      }
    });
  }

  isChecked = (item) => {
    const { marcados } = this.state;
    return marcados.some((marcado) => marcado.id === item.id);
  };

  handleCheckbox = (item, isChecked) => {
    const { marcados } = this.state;
    if (isChecked) {
      this.setState((prevState) => ({
        marcados: [...prevState.marcados, item],
      }));
    } else {
      this.setState((prevState) => ({
        marcados: prevState.marcados.filter(
          (marcado) => marcado.id !== item.id
        ),
      }));
    }
  };

  atualizarLista = async () => {
    try {
      const { uid } = this.state;
      const consultasObj = await JogadoresService.getJogadoresFirebase(uid);

      const consultasArray = Object.keys(consultasObj || {}).map((id) => ({
        id,
        ...consultasObj[id],
      }));

      this.setState({ data: consultasArray || [] });
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  criarTimes = () => {
    const { jogadoresPorTime, timesQtd, marcados } = this.state;

    if (!jogadoresPorTime || !timesQtd) {
      Alert.alert(
        "Preencha a quantidade de jogadores por time e o número de times!"
      );
      return;
    }

    const jogadoresCopiados = [...marcados];
    const times = Array.from({ length: timesQtd }, () => []);

    // Embaralhar os jogadores
    for (let i = jogadoresCopiados.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [jogadoresCopiados[i], jogadoresCopiados[j]] = [
        jogadoresCopiados[j],
        jogadoresCopiados[i],
      ];
    }

    let jogadorIndex = 0;

    for (let i = 0; i < timesQtd; i++) {
      for (let j = 0; j < jogadoresPorTime; j++) {
        if (jogadorIndex < jogadoresCopiados.length) {
          times[i].push(jogadoresCopiados[jogadorIndex]);
          jogadorIndex++;
        }
      }
    }

    this.setState({ timesAleatorios: times, showModal: true }, () => {
      console.log(times);
    });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { data, jogadoresPorTime, timesQtd, timesAleatorios, showModal } =
      this.state;

    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
        {/* <CampoSortear
          onChangeText={(text) => this.setState({ busca: text })}
          placeholder="Buscar jogadores"
          style={{ borderBottomWidth: 1, marginBottom: 20 }}
        /> */}

        <CampoSortear
          onChangeText={(text) => this.setState({ jogadoresPorTime: text })}
          value={jogadoresPorTime}
          placeholder="Jogadores por Time"
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 20, marginTop: 40 }}
        />

        <CampoSortear
          onChangeText={(text) => this.setState({ timesQtd: text })}
          value={timesQtd}
          placeholder="Número de times"
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 20 }}
        />

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.handleCheckbox(item)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <LegendaCheckSortear>{item.nome}</LegendaCheckSortear>

              <BouncyCheckbox
                size={35}
                fillColor="green"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={this.isChecked(item)}
                onPress={(isChecked) => this.handleCheckbox(item, isChecked)}
              />
            </TouchableOpacity>
          )}
        />

        <BotaoSortear onPress={this.criarTimes}>
          <LegendaSortear>Sortear Times</LegendaSortear>
        </BotaoSortear>

        <Modal visible={showModal} transparent={true} animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 40, fontWeight: "bold", marginBottom: 10, }}
              >
                Times Sorteados
              </Text>
              {timesAleatorios &&
                timesAleatorios.map((time, index) => (
                  <View key={index} style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 30,fontWeight: "bold" }}>
                      Time {index + 1}:
                    </Text>
                    {time.map((jogador, jIndex) => (
                      <Text style={{ fontSize: 27 }} key={jIndex}>{jogador.nome}</Text>
                    ))}
                  </View>
                ))}
              <TouchableOpacity
                onPress={this.hideModal}
                style={{ alignItems: "center", justifyContent: "center", marginTop: 20, width: 350, height: 50, backgroundColor: "black" }}
              >
                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold"}}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Sortear;
