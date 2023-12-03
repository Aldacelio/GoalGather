import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const BotaoTransparente = styled.Pressable``;

export const Legenda = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextoDoCampo = styled.View`
  width: 85%;
  align-items: start;
  justify-content: center;
`;

export const Campo = styled.TextInput`
  margin-top: 2%;
  height: 60px;
  width: 85%;
  padding: 0 5%;
  font-size: 20px;
  border: solid 2px black;
`;

export const CampoSortear = styled.TextInput`
height: 60px;
width: 100%;
padding: 0 5%;
font-size: 20px;
border: solid 2px black;
`;

export const BotaoSortear = styled.Pressable`
width: 100%;
height: 50px;
align-items: center;
justify-content: center;
background-color: black;
`;

export const LegendaCheckSortear = styled.Text`
  font-size: 25px;
  color: black;
`;

export const LegendaSortear = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;