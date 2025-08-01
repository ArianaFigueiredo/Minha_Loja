import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';

const ProductDetails = ({ route }) => {
  const { nome, preco, imagem, descricao } = route.params;

  const handlePedido = () => {
    const mensagem = `Olá, gostaria de fazer um pedido do produto: ${nome}`;
    const url = `https://wa.me/71991454707?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
    
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Button title="Fazer Pedido" onPress={handlePedido} color="#f862aaff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FEF9F3',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ProductDetails;
