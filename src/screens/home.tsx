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
    display: flex;
    font-family: 'Pretendard-SemiBold';
    font-size: 36px;
    line-height: 17px;
    letter-spacing: -0.5px;
    color: #01d94b;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding-top: 77px;
    padding-left: 25px;
`;

const CoworkContainer = styled.View`
    width: 338px;
    height: 200px;
    background-color: '#E9EBEE';
`;

const MyInfoContainer = styled.View`
    width: 340px;
    height: 70px;
    border-radius: 10px;
    background-color: '#E5EBF4';
`;
export default Home;
