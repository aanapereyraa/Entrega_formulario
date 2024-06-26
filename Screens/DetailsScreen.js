//formulario de registro 
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Input from '../componentes/input.js'; 
import Boton from '../componentes/boton.js';
import ShadowBox from '../componentes/shadowBox'; //importar shadowbox de la carpeta componentes


export default function App() { 
  const [nombre, setNombre] = useState(''); //Para que los campos esten correctamente completos
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [edad, setEdad] = useState('');

  return (
    <SafeAreaView style={styles.fondo}>
      <View style={styles.container}> 
        <ShadowBox style={styles.datos}>
          <Text style={styles.texto}>Registrate!</Text>
          <Input
            onChangeText={setNombre}
            editable
            multiline
            placeholder="Nombre"
            numberOfLines={1}
            maxLength={40}
          />
          <Input
            onChangeText={setApellido}
            editable
            multiline
            placeholder="Apellido"
            numberOfLines={1}
            maxLength={40}
            selectionColor="fff"
          />
          <Input
            onChangeText={setDni}
            editable
            multiline
            placeholder="Dni"
            numberOfLines={1}
            maxLength={40}
            selectionColor="fff"
          />
          <Input
            onChangeText={setEmail}
            editable
            multiline
            placeholder="Email"
            numberOfLines={1}
            maxLength={40}
            selectionColor="fff"
          />
          <Input
            onChangeText={setDireccion}
            editable
            multiline
            placeholder="Dirección"
            numberOfLines={1}
            maxLength={40}
            selectionColor="fff"
          />
          <Input
            onChangeText={setEdad}
            placeholder="Edad"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
          <View style={styles.Button}>
            <Boton 
            title="Enviar" 
            color={"violet"} /> 
          </View>
        </ShadowBox>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ //estilos
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC7D0',
  },
  texto: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datos: {
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    margin: 10,
  },
  Button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
  },
});