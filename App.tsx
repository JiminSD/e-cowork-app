import styled from '@emotion/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

import Home from './src/screens/home';

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
        <Container>
            <Home />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight + 'px' || 0 + 'px'};
`;

export default App;
