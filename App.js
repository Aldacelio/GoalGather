import { NavigationContainer } from "@react-navigation/native";
// import MainScreen from "./src/screens/MainScreen";
// import Home from "./src/screens/Home/Home";
// import Cadastro from "./src/screens/cadastro/Cadastro";

import Navigation from "./src/Nav";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
