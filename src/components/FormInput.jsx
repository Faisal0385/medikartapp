import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";

const FormInput = ({ labelText, labelIcon, secureText, autoCapital }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.inputLabel}>
          {labelIcon} {labelText}
        </Text>
        {secureText ? (
          <TouchableOpacity>
            <Text>
              <MaterialCommunityIcons name="eye-off" size={20} style={{ color: "#b92b38" }}/>
            </Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder={labelText}
        secureTextEntry={secureText}
        autoCapitalize={autoCapital}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "90%",
  },
  inputLabel: { fontSize: 16, fontWeight: "600" },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 12,
    borderColor: "lightgrey",
  },
});
