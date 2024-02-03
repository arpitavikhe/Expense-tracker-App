import {View, Text, ActivityIndicator, ActivityIndicatorComponent, StyleSheet} from "react-native";
import {GlobalStyles} from "../constants/styles";
import Button from "./Button";

function LoadingOverlay({message }){
    return (
    <View style={styles.container}>
       <Text style={[styles.text, styles.title]} >An error occurred!</Text>
        <Text style={styles.text}>{message}</Text>
    </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:25,
        backgroundColor: GlobalStyles.colors.grey,
    },
    text: {
        color: '#777777',
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
