import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerAll: {
    marginTop: 20,
    padding: 10,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
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
  text: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#DCDCDC',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  buttonCons: {
    paddingLeft: 10,
    borderRadius: 10,
  },
  textTop: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  taskStatus: {
    paddingTop: 10, 
    color: 'red'
  }
});
