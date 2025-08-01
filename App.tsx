import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import CardProduto from './Components/cardsProdutos';
import ProductDetails from './Screens/ProductDetails';

const screenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Self Prints' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}

const HomeScreen = ({ navigation }) => {
  const produtos = [
    {
      nome: "Caneca Mágica",
      preco: "R$ 50,00",
      imagem:
        "https://i.pinimg.com/736x/29/bb/0f/29bb0fcc8654cf221a28e8e4e6bdad71.jpg",
      descricao: "Muda de cor com o calor!",
    },
    {
      nome: "Camisa Personalizada",
      preco: "R$ 35,00",
      imagem:
        "https://i.pinimg.com/1200x/28/1f/58/281f5867ba03f6b4489f90083989f532.jpg",
      descricao: "Sua estampa, seu jeito!",
    },
    {
      nome: "Caneca Branca",
      preco: "R$ 35,00",
      imagem:
        "https://acdn-us.mitiendanube.com/stores/002/558/613/products/93a14387-36cd-495d-a96f-aa789141fc591-1dbc40b3d37dc6840116805617325822-1024-1024.webp",
      descricao: "Perfeita para fotos   nomes e frases personalizadas!",
    },
    {
      nome: "Caneca Alça e interno colorido",
      preco: "R$ 45,00",
      imagem:
        "https://i.pinimg.com/1200x/5d/b4/40/5db440d1abde7eda4caa117057901863.jpg",
      descricao: "Perfeita para fotos personalizadas!",
    },
    {
      nome: "Kit Agenda Personalizada",
      preco: "R$ 78,00",
      imagem:
        "https://i.pinimg.com/1200x/28/fe/e5/28fee57b6cffa10153a0610739c1914c.jpg",
      descricao: "Perfeita para Anotações do dia a dia!",
    },
    {
      nome: "Livro Bobbie Goods",
      preco: "R$ 45,00",
      imagem:
        "https://i.pinimg.com/736x/28/64/a8/2864a851a3a020eb580d0cd9e02c017c.jpg",
      descricao: "Desenvolva sua criatividade e aumente sua concentração!",
    },
    {
      nome: "Caderneta de Saúde Personalizada",
      preco: "R$ 60,00",
      imagem:
        "https://i.pinimg.com/1200x/a0/63/6b/a0636beda946a09c26dc2a4d95e74401.jpg",
      descricao: "Acompanhe o desenvolvimento do seu filho com estilo!",
    },
    {
      nome: "Azulejo Personalizado",
      preco: "R$ 38,00",
      imagem:
        "https://i.pinimg.com/736x/5d/6d/37/5d6d3761558a31fd7b853d42d88dda87.jpg",
      descricao: "Perfeita para fotos nomes e frases personalizadas!",
    },

    // seus outros produtos...
  ];

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} />

      <Text style={styles.slogan}>Tudo que você imagina a gente cria.</Text>

      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        {produtos.map((produto, index) => (
          <CardProduto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}  // A imagem que você colocou aqui será exibida no card
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FEF9F3',
  },
  slogan: {
    fontSize: 16,
    color: '#e31579ff',
    marginBottom: 20,
    textAlign: 'center',
  },

  logo: {
    width: screenWidth * 0.3, // 30% da largura da tela
    height: screenWidth * 0.3, // Mantém proporcional
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pedidoButton: {
    backgroundColor: '#e31579ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  pedidoButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});