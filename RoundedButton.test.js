import 'react-native'
import React from 'react'
import RoundedButton from './RoundedButton'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<RoundedButton />', () => {
  it('RoundedButton component renders correctly', () => {
    const tree = renderer
      .create(<RoundedButton onPress={() => {}} text='howdy' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('RoundedButton component with children renders correctly', () => {
    const tree = renderer
      .create(<RoundedButton onPress={() => {}}>Howdy</RoundedButton>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handles onPress callback', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => i++
    const wrapperPress = shallow(<RoundedButton onPress={onPress} text='hi' />)
    const touchable = wrapperPress.find('TouchableOpacity')

    expect(touchable.prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    touchable.simulate('press')
    expect(i).toBe(1)
  })
})
