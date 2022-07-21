import React, { useState } from 'react';
import { Image } from 'react-native';
import styled from '@emotion/native';

const Home = () => {
    const [amount, setAmount] = useState<number>(800);

    const onPress = (b: boolean) => {
        if (b) {
            setAmount(amount + 1);
        } else {
            setAmount(amount - 1);
        }
    };

    return (
        <Container>
            <AppTitle>E-cowork</AppTitle>
            <MyInfoContainer>
                <MyInfoContentContainer>
                    <MyInfoContent>
                        <MyInfoText>등급</MyInfoText>
                        <MyInfoValueText style={{ color: '#1B7DFF' }}>
                            BLUE
                        </MyInfoValueText>
                    </MyInfoContent>
                    <Line />
                    <MyInfoContent>
                        <MyInfoText>포인트</MyInfoText>
                        <MyInfoValueText style={{ color: '#01D94B' }}>
                            {amount} P
                        </MyInfoValueText>
                    </MyInfoContent>
                </MyInfoContentContainer>
                <Image
                    source={require('../assets/images/img_profile.png')}
                    style={{ marginRight: 18 }}
                />
            </MyInfoContainer>
            <CoworkContainer>
                <CoworkTitleContainer>
                    <CoworkTitle>
                        <Image
                            source={require('../assets/images/icn_increase.png')}
                        />
                        <CoworkTitleText>지구 재생 진행도</CoworkTitleText>
                    </CoworkTitle>
                    <CoworkDate>2020-20-20</CoworkDate>
                </CoworkTitleContainer>
            </CoworkContainer>
            <BtnContainer>
                <Btn
                    onPress={() => {
                        onPress(true);
                    }}
                    style={{ backgroundColor: '#FFDCDC' }}
                >
                    <Image
                        source={require('../assets/images/icn_recycle.png')}
                    />
                    <BtnSubTitle>불필요한 상품 공유</BtnSubTitle>
                    <BtnTitle>공유경제</BtnTitle>
                </Btn>
                <Btn
                    onPress={() => {
                        onPress(false);
                    }}
                    style={{ backgroundColor: '#D9FFCB' }}
                >
                    <Image
                        source={require('../assets/images/icn_download.png')}
                    />
                    <BtnSubTitle>환경 개선 실천하기</BtnSubTitle>
                    <BtnTitle>미션인증</BtnTitle>
                </Btn>
            </BtnContainer>
        </Container>
    );
};

const Container = styled.View`
    margin: 0 auto;
`;

const AppTitle = styled.Text`
    display: flex;
    font-family: 'Pretendard-SemiBold';
    font-size: 36px;
    color: #01d94b;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin: 25px 0;
`;

const MyInfoContainer = styled.View`
    width: 340px;
    height: 70px;
    flex-direction: row;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
    background-color: #e5ebf4;
    margin-bottom: 32px;
`;

const MyInfoContentContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 18px;
`;

const MyInfoContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

const MyInfoText = styled.Text`
    margin-right: 6px;
    font-family: 'Pretendard-Medium';
    font-size: 18px;
    letter-spacing: -0.5px;
    color: #3e3e3e;
`;

const MyInfoValueText = styled.Text`
    font-family: 'Pretendard-SemiBold';
    letter-spacing: -0.5px;
    font-size: 22px;
`;

const Line = styled.View`
    width: 1px;
    height: 30px;
    margin: 0 18px 0 18px;
    background-color: #3e3e3e;
`;

const CoworkContainer = styled.View`
    width: 340px;
    height: 200px;
    margin-bottom: 32px;
    background: #f1f3f4;
    border: 1px solid #e9ebee;
    border-radius: 6px;
`;

const CoworkTitleContainer = styled.View`
    margin: 12px 12px 0 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CoworkTitle = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 18px;
`;

const CoworkTitleText = styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 18px;
    letter-spacing: -0.5px;
    margin-left: 2px;
`;

const CoworkDate = styled.Text`
    font-family: 'Pretendard-SemiBold';
    font-size: 13px;
    letter-spacing: -0.5px;
    margin-right: 18px;
`;

const BtnContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Btn = styled.TouchableOpacity`
    width: 160px;
    height: 192px;
    border: 1px solid #e9ebee;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

const BtnSubTitle = styled.Text`
    font-family: 'Pretendard-Medium';
    font-size: 16px;
    letter-spacing: -0.5px;
`;

const BtnTitle = styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    letter-spacing: -0.5px;
`;

export default Home;
