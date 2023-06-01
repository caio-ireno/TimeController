import { ParamListBase } from '@react-navigation/native'

export declare global {
  namespace ReactNavigation {
    export interface RootParamList extends ParamListBase {
      home: undefined
      option: undefined
      new: undefined
    }
  }
}

export type RootParamList = ReactNavigation.RootParamList
