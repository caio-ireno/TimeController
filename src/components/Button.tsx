import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

interface ButtonProps {
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <TouchableOpacity style={dynamicStyles.button}>
      <Text style={dynamicStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
