import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    backgroundColor: '#DCDCDC',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    padding: 8,
    borderWidth: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
  width: 100, 
  height: 100,
  marginBottom: 10
},
content: {
  display: 'flex', 
  alignItems: 'center'
},
 button: {
    borderRadius: 10, // Ajuste o valor conforme necessário
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10,
    marginTop: 10,
  },
});