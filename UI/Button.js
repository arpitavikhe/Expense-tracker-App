import { Pressable, Text, View, StyleSheet} from 'react-native';
import { GlobalStyles} from "../constants/styles";

function Button({children, onPress, mode,style}){
    return(
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flat]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )

}
export default Button;
const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        padding: 10,
        backgroundColor: GlobalStyles.colors.pink5,
        margin:10,
    },
    flat:{
        backgroundColor: '#b7b7b7',
    },
    buttonText:{
        color: 'white',
        textAlign:'center',

    },
    flatText:{
        color: GlobalStyles.colors.pink4,
    },

    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.grey,
        borderRadius: 5,
    }

})
