import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";

export const Content = styled.View`
  height: 95%;
  width: 95%;
  align-items: center;
  justify-content: space-between;
`;

export const TituloCadastro = styled.Text`
  margin-top: 25%;
  font-size: 40px;
  font-weight: bold;
`;

export const BotaoCadastro = styled.Pressable`
  background-color: black;
  height: 23%;
  width: 30%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const Icones = styled(Ionicons)`
font-size: 35px;
color: green;
margin-top: 10px;
margin-left: -40px;
`;


