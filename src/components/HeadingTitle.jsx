import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadingTitle = ({title}) => {
  return (
    <View>
          <Text style={{ fontSize: 25, fontWeight: "600", marginTop:20 }}>{title}</Text>
        </View>
  )
}

export default HeadingTitle

const styles = StyleSheet.create({})