import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PatientInfo = ({ userInfo }) => {
  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "montSemiBold",
            marginVertical: 10,
          }}
        >
          Patient Info:
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Name: {userInfo.full_name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Phone: {userInfo.mobile}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Gender: {userInfo.gender}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Age: {userInfo.age_year} Y - {userInfo.age_month ?? 0} M -{" "}
          {userInfo.age_day ?? 0} D
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Blood Group: {userInfo.blood_grp}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "montSemiBold",
            marginBottom: 10,
          }}
        >
          Patient Weight: {userInfo.weight} kg
        </Text>
      </View>
    </View>
  );
};

export default PatientInfo;

const styles = StyleSheet.create({});
