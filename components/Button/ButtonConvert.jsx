import { View, Text, TouchableOpacity } from "react-native"
import {s} from './ButtonConvert.style'

const ButtonConvert = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.textButton}>Convert</Text>
    </TouchableOpacity>
  )
}

export default ButtonConvert