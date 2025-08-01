import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const temasPorProduto = {
  'Caneca': ['Geek', 'Datas Comemorativas', 'Profissões'],
  'Camiseta': ['Geek', 'Profissões'],
  'Agenda': ['Profissões', 'Datas Comemorativas'],
  'Decoração': ['Datas Comemorativas'],
};

const SelectThemeScreen = ({ route, navigation }) => {
  const { produtoSelecionado } = route.params;
  const temas = temasPorProduto[produtoSelecionado] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Tema</Text>
      {temas.map((tema, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('ProductList', { produtoSelecionado, temaSelecionado: tema })}
        >
          <Text style={styles.buttonText}>{tema}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#ffd6e7', padding: 15, marginVertical: 10, borderRadius: 10, width: '70%', alignItems: 'center' },
  buttonText: { fontSize: 18, color: '#333' },
});

export default SelectThemeScreen;
