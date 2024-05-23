import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


const estudiantes = [
  { id: '1', nombre: 'Enrique Sarco', carnet: '20220082', foto: 'https://via.placeholder.com/150/0000FF/808080'}
];

const PantallaEstudiantes = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.foto }} style={styles.foto} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.carnet}>{item.carnet}</Text>
    </View>
  );

  return (
    <FlatList
      data={estudiantes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#95B8D1',
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
  carnet: {
    fontSize: 16,
    color: '#666',
  },
});

export default PantallaEstudiantes;