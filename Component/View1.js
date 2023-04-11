import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Entypo';

export default function View1() {
  const obg = [
    {id:1, image:'../assets/image.png', nom:"Niketo William" , pay:"paris"},
    {id:2, image:'../assets/image.png', nom:"Trisha Louis" , pay:"London"}
  ]
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <View style={styles.iconContainer}>
          <Icon name="sort" style={styles.iconSeach} />
          <Icon name="search" style={styles.iconToogle} />
        </View>
        <View style={styles.TitleContainer}> 
          <Text style={styles.titleText}>Fashion Week</Text>
          <Text style={styles.childetext}>2021 fashion show in paris</Text>
        </View>
        <View style={styles.containerExplore}>
          <Text style={styles.Explore}>Explore</Text>
          <Icon1 name="flow-parallel" style={{fontSize:20}} />
        </View>
        <View style={styles.containerRecommended}>
          <Text style={styles.show}>Recommended</Text>
          <Text style={styles.recommended} >New Models</Text>
          <Text style={styles.recommended}>2020 Show</Text>
        </View>
        <View style={styles.containerImage}>
          {
            obg.map((item, index)=>(
                <View style={styles.contentimg} key={index}>
                  <View style={styles.imgage}>
                    <Image
                      style={styles.styleImage}
                      source={require('../assets/image.png')}
                    />
                    <Text style={styles.nom}>{item.nom}</Text>
                    <Text style={styles.ville}>{item.pay}</Text>
                  </View>
                </View>
              ))
          }
        </View>
        <View style={styles.imageD}>
          <Image
            style={styles.Imagefin}
            source={require('../assets/image.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    paddingTop:50,
    backgroundColor:"white"
  },
  wraper:{

  },
  iconContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:10
  },
  iconSeach:{
    fontSize:30,
    fontWeight:'bold',
    paddingVertical:10
  },
  iconToogle:{
    fontSize:30,
    fontWeight:'bold',
    paddingVertical:10
  },
  titleText:{
    fontSize:30,
    fontWeight:"bold",
    color:'#9400d3'
  },
  childetext:{
    fontSize:11,
    fontWeight:"600"
  },
  containerExplore:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
  },
  TitleContainer:{
    marginBottom:20
  },
  Explore:{
    fontSize:19,
    fontWeight:"700"
  },
  params:{

  },
  recommended:{
    fontSize:12,
    fontWeight:"900"
  },
  containerRecommended:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
  },
  show:{
    fontSize:12,
    fontWeight:"900",
    color:"#9400d3"
  },
  containerImage:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
  },
  contentimg:{
    height:200,
    width:140,
    marginBottom:50
  },
  styleImage:{
    height:"100%",
    width:"100%",
    borderRadius:25,
  },
  imgage:{
    width: 140,
    height: 200,
    borderRadius:25,
    shadowColor: '#9400d3',
    shadowOffset: {
      width: -5,
      height: 3,
  },
  shadowOpacity:  0.23,
  shadowRadius: 12.81,
  elevation: 50
},
  nom:{
    fontSize:12,
    fontWeight:"bold",
    marginTop:5
  },
  ville:{
    fontSize:12,
  },
  Imagefin:{
    width:"100%",
    height:170,
    borderRadius:25
  },
  imageD:{
    backgroundColor:"white",
    shadowColor: "#000",
    borderRadius:25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 19,
  }
});
