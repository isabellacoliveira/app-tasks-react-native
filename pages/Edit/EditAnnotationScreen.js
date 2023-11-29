import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { styles } from './styles';
import { getAnnotationList, updateAnnotation } from '../../services/api';

const EditAnnotationScreen = ({ route, navigation }) => {
  const [description, setDescription] = useState('');
  const [annotations, setAnnotations] = useState([]);
  const [filteredAnnotation, setFilteredAnnotation] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);

  useEffect(() => {
    async function fetchAnnotations() {
      const annotationList = await getAnnotationList();
      setAnnotations(annotationList);
    }

    fetchAnnotations();
  }, []);

  useEffect(() => {
    const { annotation, fromHomeScreen } = route.params || {};

    if (fromHomeScreen && annotation) {
      setFilteredAnnotation(annotation);
    }
  }, [route.params]);

async function handleEditAnnotation() {
  if (!filteredAnnotation) {
    console.log('A anotação é indefinida.');
    return;
  }

  const { _id, alias, data } = filteredAnnotation;

  try {
    await updateAnnotation(_id, alias, data);
    
    const updatedAnnotations = annotations.map((annot) =>
      annot._id === _id ? { ...annot, alias, data } : annot
    );

    setAnnotations(updatedAnnotations);
    setFilteredAnnotation(null);

    console.log('Anotação editada com sucesso!');
    navigation.navigate('Home');
  } catch (error) {
    console.error('Erro ao editar anotação:', error);
  }
}

  async function handleSearch() {
    const foundAnnotation = annotations.find(
      (annot) => annot.alias === description
    );

    if (foundAnnotation) {
      setFilteredAnnotation(foundAnnotation);
      setTaskStatus(null)
    } else {
      setFilteredAnnotation(null);
      setTaskStatus('Anotação não encontrada')
    }
  }

  return (
    <ScrollView style={styles.containerAll}>
      {filteredAnnotation ? (
        <View style={styles.container}>
          <Text style={styles.title}>Editar Anotações</Text>
          <TextInput
            style={styles.input}
            placeholder="Novo Título"
            value={filteredAnnotation.alias}
            onChangeText={(text) =>
              setFilteredAnnotation((prevState) => ({
                ...prevState,
                alias: text,
              }))
            }
          />
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Nova Descrição"
            value={filteredAnnotation.data}
            onChangeText={(text) =>
              setFilteredAnnotation((prevState) => ({
                ...prevState,
                data: text,
              }))
            }
            multiline
          />
          <Button title="Salvar Edições" onPress={handleEditAnnotation} />
          <br/>
          <Button
            title="Voltar"
            onPress={() => {
              setFilteredAnnotation(null);
              setDescription('');
            }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTop}>Editar Tarefa</Text>
          <Text style={styles.text}>
            Digite o título da tarefa para editá-la
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Buscar tarefa"
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </View>
          <Button
            title="Consultar Tarefa"
            onPress={() => handleSearch()}
            style={styles.buttonCons}
          />
           {filteredAnnotation == null && (
            <Text style={styles.taskStatus}>{taskStatus}</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default EditAnnotationScreen;
