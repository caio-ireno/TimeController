import { StyleSheet } from 'react-native'

import { ThemeType } from '../types/themeType'

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 48,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
    },
    textHeader: {
      color: theme.textColor,
      fontSize: 25,
    },
    textBody: {
      color: theme.textColor,
      fontSize: 15,
    },
    header: {
      height: '10%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 5,
    },
    body: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      height: '90%',
      width: '100%',
      backgroundColor: theme.menu,
    },
    button: {
      width: 50,
      height: 50,
      backgroundColor: theme.buttonBackground,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
    },
  })
