import { StyleSheet } from 'react-native'

import { ThemeType } from '../types/themeType'

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
    },
  })
