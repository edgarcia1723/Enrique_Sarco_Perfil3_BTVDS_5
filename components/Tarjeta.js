import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tarjeta = ({ foto, nombre, descripcion }) => (
  <View style={styles.card}>
    <Image source={{ uri: foto }} style={styles.foto} />
    <Text style={styles.nombre}>{nombre}</Text>
    {descripcion && <Text style={styles.descripcion}>{descripcion}</Text>}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 16,
    color: '#666',
  },
});

export default Tarjeta;