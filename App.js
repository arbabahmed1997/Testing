import React from 'react'
import { View, Text } from 'react-native'
import { RecoilRoot } from 'recoil';
import RecoilExample from './RecoilExample';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RecoilRoot>
        <RecoilExample />
      </RecoilRoot>
    </View>
  )
}
