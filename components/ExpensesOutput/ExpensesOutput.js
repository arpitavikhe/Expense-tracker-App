import {View, Text, FlatList, StyleSheet} from 'react-native'

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/styles";

function ExpensesOutput({expenses, expensesPeriod,fallbackText}){
    let content = <Text style={ styles.infoText} >{ fallbackText}</Text>;
    if (expenses.length > 0){
        content = <ExpensesList expenses = {expenses}  />;
    }
    return (
        <View style={ styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses} />
    </View>
    )
}
export default ExpensesOutput;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:24,
        backgroundColor: GlobalStyles.colors.beige,

    },
    infoText: {
        color:GlobalStyles.colors.pink5,
        fontSize: 16,
        textAlign:'center',
        marginTop: 30,
    }
})
