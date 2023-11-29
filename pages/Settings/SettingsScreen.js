import { View, Text, Image, Button } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Perfil from '../../assets/3ed52405940defe65bdb459b595d36f9.png';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    setLoggedIn(false);

    navigation.reset({
      index: 0,
      routes: [{ name: 'SignUp' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={styles.profileContent}>
          <View style={styles.prof}>
            <Image source={Perfil} style={styles.perfil} />
          </View>
          <Text style={styles.bio}>Bio</Text>
          <Text>
            ADS - Fatec <br />
            Progamação para Dispositivos Móveis
            <br />
            4 ciclo - noturno <br />
          </Text>
          <Text>@rafaela_css</Text>
        </View>

        <Button title="Sair" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default SettingsScreen;
