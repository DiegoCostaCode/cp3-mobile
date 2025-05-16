import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function Estoque({ route, navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (route.params?.novoProduto) {
      setProdutos((oldProdutos) => [...oldProdutos, route.params.novoProduto]);
    }
  }, [route.params?.novoProduto]);

  const handleExcluir = (id) => {
    Alert.alert('Excluir', 'Deseja excluir este produto?', [
      { text: 'Cancelar' },
      {
        text: 'Sim',
        onPress: () => setProdutos((old) => old.filter((p) => p.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>

      {produtos.length === 0 && <Text>Nenhum produto cadastrado.</Text>}

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produtoCard}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Fabricado: {item.dataFab}</Text>
            <Text>Validade: {item.prazoVal}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Lote: {item.lote}</Text>
            <Text>Código de barras: {item.codBarras}</Text>
            <Text>Estado: {item.estado}</Text>
            <View style={styles.btns}>
              <Button title="Editar" onPress={() => Alert.alert('Editar', 'Função a implementar')} />
              <Button title="Excluir" color="red" onPress={() => handleExcluir(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  produtoCard: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
