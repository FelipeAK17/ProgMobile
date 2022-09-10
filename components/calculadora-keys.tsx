import { Text, View, Image, ImageBackground } from 'react-native';
import { Checkbox } from 'react-native-material-design';
import { keysStyles } from '../assets/styles/keys.style';
import { viewStyles } from '../assets/styles/view.style';
export function CalculadoraKeys() {
  return (
    <View>
          <View style={viewStyles.container}>
          <Image 
            source={require('../assets/Us.png')}
            style={viewStyles.teste}
          ></Image>
          </View>
      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.columnKey}>Username</View>
        <Image 
            source={require('../assets/Avatar.png')}
              style={keysStyles.usuario}
            ></Image>
        </View>
      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.columnKey}>Password</View>
        <Image 
            source={require('../assets/Cadeado.png')}
              style={keysStyles.cadeado}
            ></Image>
      </View>
      
      
      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.columnKeys}>Login Now</View>
      </View>

      <View style={keysStyles.rowKey}>
        <Text style={keysStyles.columnKey1}>Remember me</Text>
        {/* <Checkbox value="accepted" label="I agree to the terms and conditions" /> */}
        <Image 
            source={require('../assets/Verificado.png')}
              style={keysStyles.verificado}
            ></Image>
        <Text style={keysStyles.underlined}>Forget Password?</Text>
      </View>

      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.a1}>Not a member?</View>
      </View>

      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.a2}>Create account</View>
      </View>
      
    </View>
  );
} 