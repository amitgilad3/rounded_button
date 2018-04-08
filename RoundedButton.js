import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
  }

  render () {
    const { onPress, label, style, testID } = this.props

    return (
      <View testID={testID} style={[styles.buttonContainer, style]}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
