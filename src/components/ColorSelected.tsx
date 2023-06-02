import { useState } from 'react'
import { Pressable, View } from 'react-native'

export let color = ''

export const ColorSelected = () => {
  const [CurrentColor, setCurrentColor] = useState('')

  const colors = [
    '#E74C3C',
    '#A569BD',
    '#5DADE2',
    '#2ECC71',
    '#F1C40F',
    '#EB984E',
  ]

  const handleColorChange = (selectedColor: string) => {
    setCurrentColor(selectedColor)
    color = selectedColor // Update the exported variable
  }

  const getBlockSizeHeight = (color: string) => {
    return CurrentColor === color ? 100 : 60
  }

  const getBlockSizeWidth = (color: string) => {
    return CurrentColor === color ? 250 : 200
  }
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        {colors.map(color => (
          <Pressable
            key={color}
            onPress={() => {
              handleColorChange(color)
            }}
          >
            <View
              style={{
                width: getBlockSizeWidth(color),
                height: getBlockSizeHeight(color),
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: color,
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default ColorSelected
