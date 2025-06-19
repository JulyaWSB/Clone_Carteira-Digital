import { View, Image, TouchableOpacity, Text } from "react-native";
import logo from "../../assets/RFBlogo.png";
import { styles2 } from "../../styles";

export function Login() {
  return (
    <View style={styles2.container}>
      <Image source={logo} style={styles2.image} />
      <Text style={styles2.title}>CARTEIRA DE TRABALHO DIGITAL</Text>
      <TouchableOpacity style={styles2.button}>
        <Text style={styles2.buttonText}>
          Entrar com o <Text style={styles2.buttonTextGov}>gov.br</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
