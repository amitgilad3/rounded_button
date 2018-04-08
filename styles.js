import { StyleSheet } from 'react-native'

const Colors = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000'
}

export default StyleSheet.create({
  buttonContainer: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
    elevation: 24,
    backgroundColor: Colors.white,
    height: 48,
    borderRadius: 24
  },
  button: {
    height: '100%',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.red,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 12
  }
})
