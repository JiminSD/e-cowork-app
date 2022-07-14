import { Text, View, Image } from 'react-native';
import styled from '@emotion/native';

const Home = () => {
    return (
        <View>
            <AppTitle>E-cowork</AppTitle>
            <MyInfoContainer>
                <View>
                    <Text>등급</Text>
                    <Text>BLUE</Text>
                </View>
                <View />
                <View>
                    <Text>포인트</Text>
                    <Text>830 P</Text>
                </View>
                <Image source={require('../assets/images/img_profile.png')} />
            </MyInfoContainer>
            <CoworkContainer>
                <Text>지구 재생 진행도</Text>
            </CoworkContainer>
            <View style={{ backgroundColor: '#FFDCDC' }}>
                <Image source={require('../assets/images/icn_recycle.png')} />
                <Text>불필요한 상품 공유</Text>
                <Text>공유경제</Text>
            </View>
            <View style={{ backgroundColor: '#D9FFCB' }}>
                <Image source={require('../assets/images/icn_download.png')} />
                <Text>환경 개선 실천하기</Text>
                <Text>미션인증</Text>
            </View>
        </View>
    );
};

const AppTitle = styled.Text`
    font-size: 36;
`;

const CoworkContainer = styled.View`
    width: 338;
    height: 200;
    background-color: '#E9EBEE';
`;

const MyInfoContainer = styled.View`
    width: 340;
    height: 70;
    border-radius: 6;
    background-color: '#E5EBF4';
`;

export default Home;
