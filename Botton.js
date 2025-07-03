import { StyleSheet, View, Text } from 'react-native'

const Botton = ({text}) => {
  return (
    <View style = {{justifyContent:"center", height:50,width:"50", backgroundColor:"red", marginBottom:"20"}}>
        <Text style = {{textAlign:"center", color:"white"}}>{text}</Text>
      
    </View>
  )
}

export default Botton

const styles = StyleSheet.create({})