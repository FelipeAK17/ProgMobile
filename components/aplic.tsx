import { Text, View, Image, ImageBackground } from 'react-native';
import { homeStyles } from '../assets/styles/home.style';
import { viewStyles } from '../assets/styles/view.style';
export function CalculadoraKeys() {
  return (
    
    <View>
          <View style={homeStyles.texto1}>
        <View style={homeStyles.texto1}>PooTracker</View>
        </View>
          
          <View style={viewStyles.container}>
          <Image 
            source={require('../assets/logo.svg')}
            style={viewStyles.logo}
          ></Image>
          </View>
      <View style={homeStyles.texto}>
        <View style={homeStyles.texto}>Version 1.0</View>
        </View>
        </View>
  );
} 