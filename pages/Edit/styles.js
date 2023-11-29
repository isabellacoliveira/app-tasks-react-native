import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza verticalmente
    padding: 16,
    marginTop: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    marginLeft: 10,
    marginBottom: 10,
  },
  textTop: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: '#DCDCDC',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  backButton: {
    marginBottom: 10,
  },
  taskStatus: {
    paddingTop: 10, 
    color: 'red'
  }
});
