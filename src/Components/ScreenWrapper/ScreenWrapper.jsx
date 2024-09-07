import { StyleSheet, View } from 'react-native'
import React from 'react'

const ScreenWrapper = ({ bgcolor = "black", children }) => {
  return (
    <View style={[styles.ScreenWrapper, { backgroundColor: bgcolor }]}>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
  }
})