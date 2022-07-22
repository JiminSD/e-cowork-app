import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/screens/RootStackPrams';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

import Home from './src/screens/home';
import SharingEconomy from './src/screens/SharingEconomy';
import Mission from './src/screens/Mission';
import Camera from './src/screens/Camera';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
    const [loaded] = useFonts({
        'Pretendard-Thin': require('./src/assets/fonts/Pretendard-Thin.otf'),
        'Pretendard-ExtraLight': require('./src/assets/fonts/Pretendard-ExtraLight.otf'),
        'Pretendard-Light': require('./src/assets/fonts/Pretendard-Light.otf'),
        'Pretendard-Regular': require('./src/assets/fonts/Pretendard-Regular.otf'),
        'Pretendard-Medium': require('./src/assets/fonts/Pretendard-Medium.otf'),
        'Pretendard-SemiBold': require('./src/assets/fonts/Pretendard-SemiBold.otf'),
        'Pretendard-Bold': require('./src/assets/fonts/Pretendard-Bold.otf'),
        'Pretendard-ExtraBold': require('./src/assets/fonts/Pretendard-ExtraBold.otf'),
        'Pretendard-Black': require('./src/assets/fonts/Pretendard-Black.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <NavigationContainer>
                <RootStack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <RootStack.Screen name="Home" component={Home} />
                    <RootStack.Screen
                        name="SharingEconomy"
                        component={SharingEconomy}
                    />
                    <RootStack.Screen name="Mission" component={Mission} />
                    <RootStack.Screen name="Camera" component={Camera} />
                </RootStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
