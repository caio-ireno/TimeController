import { View, ViewProps } from 'react-native'

interface DividerProps extends ViewProps {
  height: number | string
  width: number | string
  backgroundColor: string
}
export const Divider: React.FC<DividerProps> = ({
  height,
  width,
  backgroundColor,
  ...rest
}) => {
  return (
    <View
      style={{ width: width, height: height, backgroundColor: backgroundColor }}
      {...rest}
    />
  )
}
