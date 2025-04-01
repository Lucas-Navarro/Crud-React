import {SafeAreaView, Text, Image,TextInput, TouchableOpacity, View} from 'react-native';
import mascara from './css/style';

import {useState} from 'react';
import conexao from './factory/firebase';

export default function App(){

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [idade, setIdade] = useState(null);

    function inserirCliente(){
      conexao.collection('tbcliente').add({
        nome: nome,
        email: email,
        idade: idade
      })
      setNome("")
      setEmail("")
      setIdade("")
      alert("Dados cadastrado com sucesso!"); 
    }

    return(
    <SafeAreaView style={mascara.container}>
      <Text style={mascara.paragraph}>Cadastro de cliente</Text>
        <View>
          <TextInput style={mascara.cxpesquisa} placeholder='Digite um nome para pesquisar'/>
        </View>
        <TouchableOpacity>
           <Image source={require('./css/img/imgpesquisa.jpg')} style={mascara.btnimg}/>
        </TouchableOpacity>
        
      <TextInput style={mascara.input} placeholder='Digite seu nome'
      onChangeText={setNome} value={nome}/>
      <TextInput style={mascara.input} placeholder='Digite seu email'
      onChangeText={setEmail} value={email}/>
      <TextInput style={mascara.input} placeholder='Digite sua idade'
      onChangeText={setIdade} value={idade}/>
      
      <TouchableOpacity onPress={() => {inserirCliente();}}>
        <Text style={mascara.botao}>Gravar</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    );

}