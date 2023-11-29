import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 25,
    padding: 15,
    fontFamily: 'Sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  prof: {
    display: 'flex',
    alignItems: 'center',
  },
  perfil: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  bio: {
    fontWeight: 'bold',
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#DCDCDC',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
