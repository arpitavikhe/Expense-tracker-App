import {Pressable, View, Text, StyleSheet} from "react-native";
import {useNavigation } from "@react-navigation/native";
import {GlobalStyles} from "../../constants/styles";
import {getFormattedDate} from '../../util/Date'

function ExpenseItem({id, description, amount, date}){
    const navigation = useNavigation();

    function expensePressHandler(){
        navigation.navigate('ManageExpense',{
            expenseId: id
        });
    }
    return (
        <Pressable
            onPress={expensePressHandler}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}> {description}</Text>
                    <Text style={styles.textBase}> {getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                <Text style={styles.amount}> {amount.toFixed(2)}</Text>
                </View>
            </View>
    </Pressable>
    )
}
export default ExpenseItem;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7,
    },
    expenseItem:{
        padding: 12,
        marginVertical: 10,
        marginHorizontal: 10,

        backgroundColor: GlobalStyles.colors.beige2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowRadius:2,
        shadowColor: "grey",
        shadowOffset: {
            width: 2,
            height:3,
        },
        shadowOpacity: 0.6,

    },
    textBase: {
      color: GlobalStyles.colors.pink5,
    },
    description: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    amountContainer:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor:GlobalStyles.colors.beige,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.pink,
        fontWeight:'bold',
    }
})
