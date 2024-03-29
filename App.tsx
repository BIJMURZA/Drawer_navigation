import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Resident_Evil_4')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> RESIDENT EVIL 4 - КРУТАЯ ИГРА</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Resident_Evil_4" component={NotificationsScreen} options={{drawerItemStyle: { display: 'none' }}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
