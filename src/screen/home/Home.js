import { StyleSheet, Text, TextInput, View } from "react-native";
import MapView from 'react-native-maps';
import FontAwesome5Brands from '@expo/vector-icons/FontAwesome5';

const styles = getStyles();
export default function () {
  

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          value={""}
          placeholder={"Pesquise seus dispositivos"}
          style={styles.inputText}
          placeholderTextColor={"#FFF"}
        />
        <View style={styles.lupa}>
          <FontAwesome5Brands name="sistrix" size={30} color="#FFF" />
        </View>
      </View>
      <MapView zoomControlEnabled style={styles.map} />
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
      position: 'relative'
    },
    map: {
      width: '100%',
      height: '100%',
    },
    search: {
      position: 'absolute',
      zIndex: 9999,
      top: 40,
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputText: {
      backgroundColor: '#0007',
      height: 40,
      width: '90%',
      borderRadius: 4,
      paddingLeft: 20,
    },
    lupa: {
      position: 'absolute',
      right: 40
    }
  })
};
