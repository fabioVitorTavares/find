import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome5Brands from '@expo/vector-icons/FontAwesome5';

const img =  require('../../img/img.png')

const styles = getStyles();
export default function Login() {
  


  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.img}>
        <View style={styles.loginContainer}>
          <View style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20
          }}>
          <FontAwesome5Brands name="map-marked-alt" size={60} color="#FFF" />

          </View>
            <FontAwesome5Brands
              name="user-alt"
              size={20}
              color="#FFF"
              style={{
                position: 'absolute',
                top: 123,
                left: 44
              }}            
            
            />
          <FontAwesome5Brands
            name="lock"
            size={20}
            color="#FFF"
            style={{
              position: 'absolute',
              top: 212,
              left: 44
            }}  
          />

          <TextInput
            editable
            maxLength={40}
            value={""}
            placeholder={"Login"}
            style={styles.inputText}
            placeholderTextColor={"#FFF8"}
          />
          <TextInput
            editable
            maxLength={40}
            value={""}
            placeholder={"Senha"}
            style={{...styles.inputText, marginBottom: 80}}
            placeholderTextColor={"#FFF8"}
          />
          <Button
            title="Entrar" 
            
          />
          <Text style={styles.esqueciSenha}>{"Esqueci minha senha"}</Text>
        </View>   
        
      </ImageBackground>      
    </View>
  );
 }




function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: "#000"
    },
    img: {
     width: '100%',
      height: '100%',
      alignItems: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      width: '80%',
      height: '50%',
      backgroundColor: "#0007",
      padding: 40,
      borderRadius: 20,
      justifyContent: 'flex-end'
    },
    inputText: {

      height: 50,
      width: '100%',
      borderBottomColor: '#FFF8',
      borderBottomWidth: 1,
      marginBottom: 40,
      borderRadius: 4,
      paddingLeft: 36,
      fontSize: 18
    },   
    esqueciSenha: {
      color: "#FFF",
      fontSize: 14,
      width: '100%',
      textAlign: 'center',
      marginTop: 20,
      textDecorationLine: 'underline'
    }
  })
};
