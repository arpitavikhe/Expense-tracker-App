import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { GlobalStyles} from "./constants/styles";

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import IconButton from "./UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){

  return (

      <BottomTabs.Navigator
          screenOptions={({ navigation })=>({
        headerStyle:{ backgroundColor: GlobalStyles.colors.pink5},
          headerTintColor: '#fff7ef',
          tabBarStyle: { backgroundColor: GlobalStyles.colors.pink5},
          tabBarActiveTintColor: GlobalStyles.colors.beige,
          headerRight: ({tintColor})=>(
              <IconButton icon="add"
                          size={ 24 }
                          color={tintColor}
                          onPress={()=> {navigation.navigate('ManageExpense');}} />
          ),
      })}
      >
    <BottomTabs.Screen name="RecentExpenses"
                       component={RecentExpenses}
                       options={{
                           title: 'Recent Expenses',
                           tabBarLabel: 'Recent',
                           tabBarIcon: ({color, size}) => (
                               <Ionicons name="hourglass" size={size} color={color}/>
                           )
                       }}
    />
    <BottomTabs.Screen name="AllExpenses"
                       component={AllExpenses}
                       options={{
                           title: 'All Expenses',
                           tabBarLabel: 'All Expenses',
                           tabBarIcon: ({color, size}) => (
                               <Ionicons name="calendar" size={size} color={color}/>
                           )
                       }}
    />
  </BottomTabs.Navigator>
   );
}

export default function App() {
  return (
      <>
      <StatusBar style="light" />
          <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerStyle:{ backgroundColor: GlobalStyles.colors.pink5},
                  headerTintColor: '#fff7ef',
              }}
          >
            <Stack.Screen name="ExpensesOverview"
                          component={ExpensesOverview}
                          options={{ headerShown: false}


            }
            />
            <Stack.Screen name="ManageExpense"
                          component={ManageExpenses}
                          options={{
                presentation:'modal',
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
          </ExpensesContextProvider>
      </>
  );
}

