import { StyleSheet } from 'react-native';

const mascara = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  cxpesquisa:{
    margin: 10,
    marginRight: 150,
    padding: 10,
    border: '3px solid #000',
    borderRadius: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btnimg: {
    borderRadius: 10,
    position: 'absolute',
    top: -52,
    left: 240,
    width: 40,
    height: 40,
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    border: '1px solid #000',
  },
  botao: {
    
    marginTop: 10,
    marginLeft: 10,
    marginRight: 290,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f00',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default mascara;