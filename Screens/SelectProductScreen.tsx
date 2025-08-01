import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const produtos = ['Caneca', 'Camiseta', 'Agenda', 'Decoração'];

const SelectProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Produto</Text>
      {produtos.map((produto, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('SelectTheme', { produtoSelecionado: produto })}
        >
          <Text style={styles.buttonText}>{produto}</Text>
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

export default SelectProductScreen;
