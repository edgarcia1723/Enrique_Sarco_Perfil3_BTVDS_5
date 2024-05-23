import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const comidas = [
    { id: '1', nombre: 'Tacos', descripcion: 'Tacos mexicanos con salsa picante', foto: 'https://via.placeholder.com/150/0000FF/808080' },
    { id: '2', nombre: 'Paella', descripcion: 'Paella de mariscos española', foto: 'https://via.placeholder.com/150/FF0000/FFFFFF' },
    { id: '3', nombre: 'Ramen', descripcion: 'Sopa japonesa con fideos y carne', foto: 'https://via.placeholder.com/150/FFFF00/000000' },
    { id: '4', nombre: 'Ceviche', descripcion: 'Ceviche de pescado fresco', foto: 'https://via.placeholder.com/150/00FF00/0000FF' },
    { id: '5', nombre: 'Empanadas', descripcion: 'Empanadas argentinas rellenas de carne', foto: 'https://via.placeholder.com/150/FF00FF/00FFFF' },
    { id: '6', nombre: 'Pupusas', descripcion: 'Masa con frijoles y queso', foto: 'https://via.placeholder.com/150/00FFFF/FF00FF' }
];

const PantallaComidas = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
        </View>
    );

    return (
        <FlatList
            data={comidas}
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
    descripcion: {
        fontSize: 16,
        color: '#666',
    },
});

export default PantallaComidas;