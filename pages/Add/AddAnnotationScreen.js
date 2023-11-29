import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const AddAnnotationScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAnnotation = () => {
    setTitle('');
    setDescription('');

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Anotação</Text>
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
      <Button title="Adicionar Tarefa" onPress={handleAddAnnotation} />
    </View>
  );
};

export default AddAnnotationScreen;
