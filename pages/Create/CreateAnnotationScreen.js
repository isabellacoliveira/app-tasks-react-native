import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createAnnotation } from '../../services/api';
import { styles } from './styles'
import Note from '../../assets/pngimg.com-sticky_note_PNG18964.png'

const AddAnnotationScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAnnotation = async () => {
    try {
      await createAnnotation(title, description);
      console.log('Anotação adicionada com sucesso!');
      
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao adicionar anotação:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Adicionar Anotação</Text>
        <Image source={Note} style={styles.image}/>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da Anotação"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button style={styles.button} title="Adicionar Tarefa" onPress={handleAddAnnotation} />
    </View>
  );
};

export default AddAnnotationScreen;
