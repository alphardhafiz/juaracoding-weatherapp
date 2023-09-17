import { Text } from "react-native"
import { s } from "./DisplayText.style"

const DispayText = ({suhu, unit}) => {
  return (
    <Text style={s.textDisplay}>{suhu} &deg;{unit}</Text>
  )
}

export default DispayText