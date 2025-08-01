import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardProduto from '../Components/cardsProdutos';

const produtos = [
  { nome: "Caneca Mágica", preco: "R$ 50,00", tipo: "Caneca", tema: "Geek", imagem: "https://i.pinimg.com/736x/29/bb/0f/29bb0fcc8654cf221a28e8e4e6bdad71.jpg", descricao: "Muda de cor com o calor!" },
  { nome: "Camisa Profissões", preco: "R$ 35,00", tipo: "Camiseta", tema: "Profissões", imagem: "https://i.pinimg.com/1200x/28/1f/58/281f5867ba03f6b4489f90083989f532.jpg", descricao: "Sua estampa, seu jeito!" },
  { nome: "Caneca Datas", preco: "R$ 35,00", tipo: "Caneca", tema: "Datas Comemorativas", imagem: "https://acdn-us.mitiendanube.com/stores/002/558/613/products/93a14387-36cd-495d-a96f-aa789141fc591-1dbc40b3d37dc6840116805617325822-1024-1024.webp", descricao: "Personalize com fotos, nomes e frases!" },
  // Adicione mais produtos...
];

const ProductListScreen = ({ route, navigation }) => {
  const { produtoSelecionado, temaSelecionado } = route.params;

  const produtosFiltrados = produtos.filter(produto =>
    produto.tipo === produtoSelecionado && produto.tema === temaSelecionado
  );

  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {produtosFiltrados.map((produto, index) => (
        <CardProduto
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          onPress={() =>
            navigation.navigate('ProductDetails', {
              nome: produto.nome,
              preco: produto.preco,
              imagem: produto.imagem,
              descricao: produto.descricao,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ProductListScreen;
