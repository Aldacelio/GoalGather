import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const Content = styled.View`
  padding: 12% 0;
  width: 100%;
  height: 100%;
  align-items: start;
`;

export const ListaJogadores = styled.FlatList`
  width: 96.5%;
`;

export const CampoAdicionar = styled.TextInput`
  margin-top: 5%;
  padding: 0 1%;
  width: 82%;
  font-size: 20px;
`;

export const BotaoTransparenteAdicionar = styled.Pressable``;

export const ListagemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  padding: 3% 0;
  margin-left: 3%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const IconesMais = styled(Ionicons)`
  font-size: 45px;
  color: green;
`;

export const Icones = styled(Ionicons)`
  font-size: 35px;
  color: #e85d54;
`;
