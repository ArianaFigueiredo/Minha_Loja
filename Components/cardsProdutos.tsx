import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProdutoProps {
  nome: string;
  preco: string;
  imagem: string; // URL da imagem
  onPress: () => void;
}

const CardProduto = ({ nome, preco, imagem, onPress }: CardProdutoProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
     <Image source={{ uri: imagem }} style={{ width: 120, height: 120, borderRadius: 10 }} />

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff0f5',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    width: '48%',
    alignItems: 'center',
    elevation: 3,
  },
  imagem: {
    width: 120,  // largura da imagem no card
    height: 120, // altura da imagem no card
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default CardProduto;
