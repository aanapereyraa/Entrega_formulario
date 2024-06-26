//página principal
import React from 'react';
import { View,StyleSheet, Text, Button } from 'react-native';
import Input from '../componentes/input';
import ShadowBox from '../componentes/shadowBox';
import Boton from '../componentes/boton';

function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
    <ShadowBox style={styles.datos}>
    
      <Text style = {styles.texto}>Ingresar</Text>
      <Input
            onChangeText={(text) => setNombre(text)}
            editable
            multiline
            placeholder="Usuario"
            numberOfLines={1}
            maxLength={4}
          />
          <Input
            placeholder="Contraseña"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
    <View style = {styles.Button}>
      <Button
        title = "Registrarte"
        onPress={() => navigation.navigate('Details')}
        color={"violet"}
      />
    </View>
    <View style = {styles.Button2}>
    <Button
        title = "Iniciar"
        onPress={() => alert('Bienvenido')}
        color={"violet"}
    />
    </View>
    </ShadowBox>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({ //estilos
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFC7D0',
    },
    datos: {
        padding: 20,
        borderTopRightRadius: 10,
        borderBottomLeftRadius:10,
        margin: 10,
    },
    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    Button: {
        marginTop: 10,
    },
    Button2: {
        marginTop: 10,
    },
    
    
});
