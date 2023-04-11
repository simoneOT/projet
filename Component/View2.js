import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Chat from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const View2 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.conntainerImage}
      source={require('../assets/image.png')}>
        <View style={styles.wraperimage}>
            <View style={styles.containerIcons}>
                <View style={styles.icons}>
                    <View>
                        <Icon name="left" style={styles.iconsIcon} />
                    </View>
                    <View>
                    <Icon1 name="ellipsis-vertical" style={styles.iconsIcon} />
                    </View>
                </View>
                <View style={styles.icons2}>
                    <View style={{marginVertical:11,
                        width:30,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Chat name="chat" style={styles.iconsIcon} />
                        <Text style={styles.number}>1</Text>
                    </View>
                    <View style={{marginVertical:11,
                        width:30,
                        alignItems:"center",
                        justifyContent:"center"}}>
                        <Entypo name='heart-outlined' style={styles.iconsIcon}/>
                        <Text style={styles.number}>579</Text>
                    </View>
                    <View style={{marginVertical:11,
                        width:30,
                        alignItems:"center",
                        justifyContent:"center"}}>
                        <MaterialCommunityIcons name='clock-time-ten-outline' style={styles.iconsIcon}/>
                        <Text style={styles.number}>18</Text>
                    </View>
                </View> 
            </View>
            <View style={styles.messages}>
                <View style={styles.contentMessage}>
                    <Text style={styles.MessageTitle}>Milla jovovich</Text>
                    <Text style={styles.MessageBody} > 
                         orem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi architecto aliquid incidunt laboriosam voluptatibus 
                        id accusamus quibusdam repudiandae commodi rerum,
                        deleniti eos corrupti et consequuntur
                    </Text>
                        <Pressable style={{
                            width:"100%",
                            alignItems:'flex-end'
                        }}
                        >
                            <View style={styles.Pressable}>
                                <Text style={{color:"#fff", fontWeight:"700"}}>Follow</Text>
                                <Text style={styles.messageAdd}><MaterialIcons name='add' style={{fontSize:16, fontWeight:"bold"}} /></Text>
                            </View>
                        </Pressable>
                </View>
            </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default View2

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    conntainerImage:{
        width:'100%',
        height:'100%'
    },
    wraperimage:{
        paddingHorizontal:20,
        paddingTop:20,
        flexDirection:'column'
    },
    icons:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20
    },
    iconsIcon:{
        color:'#fff',
        fontSize:25
    },
    icons2:{
        height:400,
        justifyContent:"center",
       
    },
    icons2Icon:{
        color:"#fff",
        fontSize:16,
        marginTop:9
    },
    number:{
       color:"#fff",
       fontSize:14,
    },
    messages:{
        width:"100%",
        backgroundColor:"#ffffff45",
        borderRadius:30,
    },
    contentMessage:{
        padding:12,
    },
    MessageTitle:{
        fontSize:20,
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
    },
    MessageBody:{
        marginTop:9,
        color:"#fff",
        textAlign:"left",
        fontSize:14,
        fontWeight:"300"
    },
    Pressable:{
        backgroundColor:"red",
        flexDirection:"row",
        height:50,
        width:120,
        marginTop:10,
        borderTopLeftRadius:50,
        borderBottomRightRadius:50,
        borderTopRightRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
    messageAdd:{
        backgroundColor:"#fff",
        padding:5,
        borderRadius:50,
        fontSize:18,
        marginLeft:10,
    }
})