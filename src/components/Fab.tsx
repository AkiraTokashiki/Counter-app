import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native'

interface Props{
    title: string,
    position?: 'br' | 'bl',
    onPress:() => void,
       
}
  export const Fab = ({title, onPress, position = 'br'}:  Props) => {
    
      const ios = () => {
          return (
              <TouchableOpacity
              onPress={  onPress }
              activeOpacity={0.8}
              style={[
                  styles.fabLocation,
                  (position === 'bl') ? styles.left : styles.right
            ]}
        >
            <View style={styles.fab }>
                <Text style={ styles.fabText}> {title}  </Text>
            </View>
            </TouchableOpacity>
            )
    }

    const android = () => {
        return (
      <View 
          style={[styles.fabLocation,
            (position === 'bl') ? styles.right : styles.left
            ]}
  >
  
      <TouchableNativeFeedback 
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          >
    
    <View style={styles.fab}>
        <Text style={styles.fabText }> { title } </Text>
            </View>
          </TouchableNativeFeedback>
      </View> 
  )  
  }

    

  return ( Platform.OS ==='ios' ) ? ios() : android();
}

const styles = StyleSheet.create({ 
    
    fabLocation:{ 
        position:'absolute',
        bottom: 25,  
        },
        right: {
            right: 25
        },
        left: {
            left: 25
        },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 8,
      },
      fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
  
  
      }
})
export default Fab;