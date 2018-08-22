import React from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
     this.setState((prevState) => {
      const count = prevState[metric] + step
       return {
        ...prevState,
        [metric]: count > max ? max : count,
      }
    })
  }

  decrement = (metric) => {
    this.setState((prevState) => {
      const count = prevState[metric] - getMetricMetaInfo(metric).step
       return {
        ...prevState,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }

  slide = (metric, value) => {
    this.setState((prevState) => ({
      ...prevState,
      [metric]: value
    }))
  }

  render() {
    return (
      <View>
        {getMetricMetaInfo('bike').getIcon()}
      </View>
    )
  }
}
