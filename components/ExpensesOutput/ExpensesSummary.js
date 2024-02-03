import {Text, View, StyleSheet} from 'react-native'
import {GlobalStyles} from "../../constants/styles";


function ExpensesSummary({expenses, periodName}){
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <View>
            <View style={ styles.container}>
                <Text style={ styles.period} >{periodName}</Text>
                <Text style={ styles.sum} >${expensesSum.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.pink3,
        borderRadius: 6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    period:{
        fontSize:15,
        color: GlobalStyles.colors.pink,
    },
    sum: {
        fontSize: 18,
        fontWeight:'bold',
        color: GlobalStyles.colors.pink,
    }

})
