import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import styled, { css } from '@emotion/native';

import BackHeader from '../components/BackHeader';

const CameraPage = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>카메라에 접근할 수 없습니다.</Text>;
    }
    return (
        <SafeAreaView style={safeAreaViewStyle}>
            <BackHeader />
            <Camera style={cameraStyle}>
                <TakeBtn />
            </Camera>
        </SafeAreaView>
    );
};

const safeAreaViewStyle = css`
    flex: 1;
`;

const cameraStyle = css`
    flex: 1;
    align-items: center;
    flex-direction: column-reverse;
`;

const TakeBtn = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: 5px solid #c5c5c5;
    margin-bottom: 32px;
    background-color: #fff;
`;

export default CameraPage;
