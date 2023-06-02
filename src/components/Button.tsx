import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

interface ButtonProps extends TouchableOpacityProps {
  label: string
  fontSize: number
}

export const Button: React.FC<ButtonProps> = ({ label, fontSize, ...rest }) => {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <TouchableOpacity style={dynamicStyles.button} {...rest}>
      <Text style={{ fontSize: fontSize }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
