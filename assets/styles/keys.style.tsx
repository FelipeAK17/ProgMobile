import { ImageBackground, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-material-design';

export const keysStyles = StyleSheet.create({
  rowKeys: {
    paddingTop: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  columnKey: {
    backgroundColor: '#21f4fe',
    width: '70%',
    height: 45,
    marginLeft: 70,
    marginTop: 15,
    fontFamily: 'Arial',
    fontSize: 19,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: '#3886b7'
  },
  backspace: {
    width: 30,
    height: 30,

  },


  cadeado: {
    position: 'absolute',
    left: 82,
    top: 33,
    width: 25,
    height: 25,
},


  usuario: {  
    position: 'absolute',
    left: 78,
    top: 32,
    width: 30,
    height: 30,
  
  
  },


  container: {

    backgroundColor: '#5ec5c1'




  },

  columnKeys: {
    backgroundColor: '#f8b4a9',
    width: '70%',
    height: 45,
    marginLeft: 70,
    marginTop: 15,
    fontFamily: 'Arial',
    fontSize: 19,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: 'white'
  },

  columnKey1: {
    color: 'white',
    width: '70%',
    height: 45,
    marginTop: 15,
    marginLeft: 40,
    fontFamily: 'Arial',
    fontSize: 10,
    textAlign: 'center',
  },

  underlined: {
    textDecorationLine: 'underline',
    color: 'white',
    width: '70%',
    height: 45,
    marginTop: 15,
    marginLeft: 1,
    fontFamily: 'Arial',
    fontSize: 10,
    textAlign: 'center',
  },

  a1: {
    color: 'white',
    width: '70%',
    height: 45,
    marginTop: 15,
    marginLeft: 70,
    fontFamily: 'Arial',
    fontSize: 10,
    textAlign: 'center',
  },

  rowKey: {
    paddingTop: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',

  },

  verificado: {
    position: 'absolute',
    left: 78,
    top: 23,
    width: 15,
    height: 15,
  },

  a2: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    color: 'white',
    borderRadius: 50,
    width: '35%',
    height: 30,
    marginLeft: 138,
    marginTop: -30,
    fontFamily: 'Arial',
    fontSize: 13,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  }
  

});