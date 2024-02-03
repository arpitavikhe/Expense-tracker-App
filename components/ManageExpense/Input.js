import {Text, TextInput, View, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";


function Input({label, invalid,style, textInputConfig}){

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }

    return (
        <View style={[ style, styles.inputContainer]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput {...textInputConfig} style={inputStyles}/>
    </View>
    );
}
export default Input;

const styles = StyleSheet.create({

    inputContainer:{
        marginHorizontal:4,
        marginVertical: 10,

    },

label:{
        fontSize: 15,
        color: GlobalStyles.colors.pink5,
        marginBottom: 5,
    },
    input:{
        backgroundColor: GlobalStyles.colors.grey,
        padding:5,
        borderRadius: 5,
        fontSize:18,
        color: GlobalStyles.colors.pink5
    },
    inputMultiline:{
        height: 100,
        textAlignVertical: 'top'
    },
    invalidLabel:{
        color:'#ff0202',

    },
    invalidInput:{
        backgroundColor:"#FF00008C",
    },

})
