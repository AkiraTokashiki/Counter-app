import React, { useState } from 'react'
import { Text , View, Button, StyleSheet } from 'react-native'
import { Fab }  from '../components/Fab'

 const CounterScreen = () => {

  
  const [counter, setCounter] = useState(10)

  return (
    
  <View style={styles.conteiner}>
      <Text
          style={styles.title}
        >
          Counter: {counter}
      </Text>
          <Fab
          
            title= "+1"  
            position='bl'    
            onPress={()=> setCounter (counter + 1)}
                />

          <Fab
            title= "-1" 
            position='br'      
            onPress={()=> setCounter (counter - 1)}
                />
      { /*  <TouchableOpacity style={styles.fabLocationBL}
           
        >
  <View style={styles.fab}>
      <Text style={styles.fabText }>
          -1!

      </Text>
  </View>
        </TouchableOpacity>
        */}

    </View>
  )
}


const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center'},
    title: { 
    textAlign: 'center',
    fontSize: 40,
    position: 'relative',


    top: -15
    }
   
  }
)
export default CounterScreen