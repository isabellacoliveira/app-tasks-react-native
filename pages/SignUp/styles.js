import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
  icon: {
    marginBottom: 16,
  },
  loginStatus: {
    paddingTop: 10,
    color: 'red',
  },
});
