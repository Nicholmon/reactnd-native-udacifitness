import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class EntryDetail extends Component {
  render () {
    return (
      <View>
        <Text>Entry detail {this.props.navigation.state.params.entryId}</Text>
      </View>
    )
  }
}
