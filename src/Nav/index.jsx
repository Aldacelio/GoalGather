import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Cadastro from "../screens/cadastro/Cadastro";
import Login from "../screens/login/Login";
import AddDelJogador from "../screens/cadastro/addDelJogador/AddJogador";
import Cronometro from "../screens/cronometro/Cronometro";
import Sortear from "../screens/sortear/Sortear";



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddDelJogador" component={AddDelJogador} />
        <Stack.Screen name="Cronometro" component={Cronometro} />
        <Stack.Screen name="Sortear" component={Sortear} />

      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>

      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
