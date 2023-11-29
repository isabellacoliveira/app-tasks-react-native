import { View, Text, Button, TextInput, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import Lupa from '../../assets/lup-1.webp';

import { deleteAnnotation, getAnnotationList } from '../../services/api';

const AnnotationDetailsScreen = ({ route, navigation }) => {
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

  async function handleDelete() {
    if (!filteredAnnotation) {
      console.log('A anotação é indefinida.');
      return;
    }

    const statusCode = await deleteAnnotation(filteredAnnotation._id);

    if (statusCode === 204) {
      navigation.navigate('Home');
    }

    console.log(
      `[A seguinte anotação foi apagada]: ${filteredAnnotation.alias}`
    );
  }

  useEffect(() => {
    const { annotation, fromHomeScreen } = route.params || {};

    if (fromHomeScreen && annotation) {
      setFilteredAnnotation(annotation);
    }
  }, [route.params]);

  return (
    <ScrollView style={styles.containerAll}>
      {filteredAnnotation ? (
        <>
          <Text style={styles.detailsTitle}>Detalhes da Anotação</Text>
          <View style={styles.content}>
            <Text>
              <Text style={styles.boldText}>Título: </Text>
              {filteredAnnotation.alias}
            </Text>
            <Text>
              <Text style={styles.boldText}>Descrição: </Text>
              {filteredAnnotation.data}
            </Text>
          </View>
          <View style={styles.backButton}>
            <Button
              title="Voltar"
              onPress={() => {
                setFilteredAnnotation(null);
                setDescription('');
              }}
            />
          </View>
          <Button title="Apagar" onPress={() => handleDelete()} />
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTop}>Consultar Tarefa</Text>
          <Text style={styles.text}>
            Digite o título da tarefa para consultá-la
          </Text>
          <Image source={Lupa} style={styles.image} />
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

export default AnnotationDetailsScreen;
