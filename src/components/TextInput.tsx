import React from 'react'
import {
  StyleSheet,
  TextInput as NativeInput,
  TextInputProps,
  View,
} from 'react-native'

interface MyInputProps extends TextInputProps {
  label: string
}
export const TextInput: React.FC<MyInputProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <NativeInput
        placeholder={label}
        placeholderTextColor={'#a9a'}
        style={styles.input}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    width: '100%',
  },
  input: {
    padding: 10,
  },
})
