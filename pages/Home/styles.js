import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
  },
  annotationTitle: {
    fontSize: 20,
    marginBottom: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    padding: 15,
    fontFamily: 'Sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    fontSize: 5,
  },
  annotationContainer: {
    backgroundColor: '#DCDCDC',
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  pa: {
    paddingLeft: 10,
  },
  annotationTask: {
    fontWeight: 'bold',
  },
  functions: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});
