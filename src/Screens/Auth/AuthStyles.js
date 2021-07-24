import { StyleSheet } from 'react-native';
import Color from '../../constants/Color';

const AuthStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: 20,
  },
  text1: {
    fontSize: 40,
    color: '#6dae1e',
  },
  text2: {
    color: Color.primary,
  },
  text3: {
    color: Color.secondary,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  image2: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: '100%',
    height: 50,
    marginTop: 5,
    marginLeft: 20,
  },
  buttonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.secondary,
    borderRadius: 10,
    height: 40,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
  },
  registerContainer: {
    flexDirection: 'row',
    width: '86%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  registerContainer2: {
    flexDirection: 'row',
    width: '86%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginVertical: 20,
  },
});

export default AuthStyles;
