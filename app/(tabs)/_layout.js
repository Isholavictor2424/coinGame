import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Botton from "../../Botton"

const _layout = () => {
    const [result, setresult] = useState('')
    const [guess, setguess] = useState('')
    const [computerMove, setcomputerMove] = useState('')
    const [score, setscore] = useState({ win: 0, lose: 0})


    const playGame = (userGuess) => {
        const random = Math.random();
        const compMove = random > 0.5 ? 'head' : 'tail';

        setguess(userGuess);
        setcomputerMove(compMove);

        if (userGuess === compMove){
            setresult('you win');
            setscore(prev => ({...prev, win: prev.win + 1}))
        }else {
            setresult('you lose');
            setscore(prev => ({...prev, lose: prev.lose + 1}))
        }
        
      }
  return (
    <View style = {styles.page}>
      <TouchableOpacity onPress={() =>playGame('tail')}>
        <Botton
        text = "tail"
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => playGame('head')}>
        <Botton
        text = "head"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setscore({ win: 0, lose: 0 })}>
        <Botton
        text = "Reset score"
        />
      </TouchableOpacity>

      <Text>Your choice: {guess}</Text>
      <Text>Computer choice: {computerMove}</Text>
      <Text>Result: {result}</Text>
      <Text>score:{"\n"}win:{score.win}{"\n"}lose{score.lose}</Text>
    </View>
    
  )
}

export default _layout

const styles = StyleSheet.create({
    page:{
        backgroundColor:"white",
        flex:1,
        paddingTop:"50",
        padding:"30"
    }
})