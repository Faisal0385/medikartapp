import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Yearly = () => {
  return (
<ScrollView>
{[2020, 2021, 2022, 2023].map(( item, key ) => {
  return (
    <TouchableOpacity
      key={key + 1}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "black" }}>{item}</Text>
      <Text style={{ color: "black" }}>5000 BDT</Text>
    </TouchableOpacity>
  );
})}
</ScrollView>
  )
}

export default Yearly

const styles = StyleSheet.create({})