import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAnnotationList } from '../../services/api';
import { styles } from './styles';
import Note from '../../assets/pngimg.com-sticky_note_PNG18964.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    async function fetchAnnotations() {
      setAnnotations(await getAnnotationList());
    }

    fetchAnnotations();
  }, [annotations]);

  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Anotações</Text>
        <Image source={Note} style={styles.image} />
      </View>
      <Text style={styles.pa}>
        Aqui você encontrará todas as suas anotações
      </Text>
      <FlatList
        style={styles.container}
        data={annotations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AnnotationDetails', {
                  annotation: item,
                  fromHomeScreen: true,
                })
              }>
              <View style={styles.annotationContainer}>
                <Text style={styles.annotationTitle}>
                  <Text style={styles.annotationTask}>Tarefa: </Text>
                  {item.alias}
                </Text>
                <View style={styles.functions}>
                  <Button
                    title="Detalhes"
                    onPress={() =>
                      navigation.navigate('Details', {
                        annotation: item,
                        fromHomeScreen: true,
                      })
                    }
                  />
                  <Button
                    title="Editar"
                    onPress={() =>
                      navigation.navigate('Edit', {
                        annotation: item,
                        fromHomeScreen: true,
                      })
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
