import React from 'react'
import { View, Platform } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
import reducer from './reducers'
import AddEntry from './components/AddEntry'
import History from './components/History'

const RouteConfigs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}


const Tabs = Platform.OS === 'ios'
? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
: createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

export default class App extends React.Component {
  store = createStore(reducer)

  render() {
    return (
      <Provider store={this.store}>
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}
