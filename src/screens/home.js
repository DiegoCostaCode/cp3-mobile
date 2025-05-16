import React, { useState } from 'react';
import { Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const estados = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
  'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
  'RS','RO','RR','SC','SP','SE','TO'
];

export default function Home({navigation}) {
    
  const [nome, setNome] = useState('');
  const [dataFab, setDataFab] = useState('');
  const [prazoVal, setPrazoVal] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [codBarras, setCodBarras] = useState('');
  const [estado, setEstado] = useState(estados[0]);

    const handleSalvar = () => {
        if (!nome || !dataFab || !prazoVal || !quantidade || !lote || !codBarras) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        const novoProduto = {
            id: Date.now().toString(), 
            nome,
            dataFab,
            prazoVal,
            quantidade,
            lote,
            codBarras,
            estado
        };

        Alert.alert('Sucesso', `Produto ${nome} salvo!`);

        // Envia para a tela Estoque
        navigation.navigate('estoque', { novoProduto });

        // Limpa os campos
        setNome('');
        setDataFab('');
        setPrazoVal('');
        setQuantidade('');
        setLote('');
        setCodBarras('');
        setEstado(estados[0]);
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Digite o nome" />

      <Text style={styles.label}>Data de Fabricação (dd/mm/aaaa)</Text>
      <TextInput style={styles.input} value={dataFab} onChangeText={setDataFab} placeholder="dd/mm/aaaa" />

      <Text style={styles.label}>Prazo de Validade (dd/mm/aaaa)</Text>
      <TextInput style={styles.input} value={prazoVal} onChangeText={setPrazoVal} placeholder="dd/mm/aaaa" />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput style={styles.input} value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" placeholder="Quantidade" />

      <Text style={styles.label}>Lote</Text>
      <TextInput style={styles.input} value={lote} onChangeText={setLote} placeholder="Lote (letras e números)" />

      <Text style={styles.label}>Código de Barras</Text>
      <TextInput style={styles.input} value={codBarras} onChangeText={setCodBarras} placeholder="Código de barras" />

      <Text style={styles.label}>Estado de Origem</Text>

      <Picker
        selectedValue={estado}
        onValueChange={(itemValue) => setEstado(itemValue)}
        style={styles.picker}
      >
        {estados.map((uf) => (
          <Picker.Item key={uf} label={uf} value={uf} />
        ))}
      </Picker>

      <Button title="Salvar Produto" onPress={handleSalvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    marginTop: 40,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginTop: 5,
    borderRadius: 4,
  },
  picker: {
    marginVertical: 10,
  },
});
