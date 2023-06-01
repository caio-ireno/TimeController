import React from 'react'
import {
  InputAccessoryViewProps,
  StyleSheet,
  TextInput as NativeInput,
  View,
} from 'react-native'

interface MyInputProps extends InputAccessoryViewProps {
  label: string
}
export const TextInput: React.FC<MyInputProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <NativeInput placeholder={label} style={styles.input} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    width: '100%',
  },
  input: {
    borderColor: '#ccc',
    padding: 10,
  },
})
