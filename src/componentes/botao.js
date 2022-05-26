import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './texto';

export default function Botao({ texto, onPress, style }) {
    return <TouchableOpacity style={[estilos.botao, style]} onPress={() => {}}>
    <Texto style={estilos.textoBotao}>{ texto }</Texto>
</TouchableOpacity> 
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
      },
      textoBotao:{
        textAlign: 'center',
        color: "#fff",
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "bold",
      }
});