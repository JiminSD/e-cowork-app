import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import styled from '@emotion/native';

import BackHeader from '../components/BackHeader';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Props {
    text: string;
}

const Checkbox = (props: Props) => {
    const { text } = props;

    return (
        <BouncyCheckbox
            fillColor="#17A2B8"
            iconStyle={{
                borderRadius: 6,
                borderColor: '#CED4DA',
                borderWidth: 2,
            }}
            disableBuiltInState={false}
            isChecked={undefined}
            text={text}
            textStyle={{
                fontFamily: 'Pretendard-Medium',
                fontSize: 16,
                color: '#6C757D',
                textDecorationLine: 'none',
            }}
            style={{ marginBottom: 10, marginStart: 24 }}
        />
    );
};

const Mission = () => {
    return (
        <SafeAreaView>
            <BackHeader />
            <MissionContainer>
                <Title>미션 인증</Title>
                <CheckboxContainer>
                    <BoxTitle>미션 선택</BoxTitle>
                    <Checkbox text="라벨택 제거" />
                    <Checkbox text="대중교통 인증" />
                    <Checkbox text="영수증 인증" />
                    <Checkbox text="플라스틱 인증" />
                </CheckboxContainer>
                <ImageUploadContainer>
                    <BoxTitle>라벨택 제거</BoxTitle>
                    <UploadBtn>
                        <Image
                            source={require('../assets/images/icn_upload.png')}
                        />
                        <UploadText>이미지 업로드</UploadText>
                    </UploadBtn>
                </ImageUploadContainer>
            </MissionContainer>
        </SafeAreaView>
    );
};

const MissionContainer = styled.View`
    margin: 0 auto;
`;

const Title = styled.Text`
    margin: 6px 0;
    font-family: 'Pretendard-Bold';
    font-size: 28px;
`;

const CheckboxContainer = styled.View`
    width: 300px;
    height: 230px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    //box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 1px 1px 3px rgba(0, 0, 0, 0.08);
`;

const BoxTitle = styled.Text`
    margin: 24px 0 24px 24px;
    font-family: 'Pretendard-SemiBold';
    font-size: 16px;
    color: #54595e;
`;

const ImageUploadContainer = styled.View`
    width: 300px;
    margin: 32px 0 74px 0;
    border: 1px solid #dee2e6;
    border-radius: 8px;
`;

const UploadBtn = styled.TouchableOpacity`
    margin: 0 auto;
    align-items: center;
`;

const UploadText = styled.Text`
    margin: 10px 0;
    font-family: 'Pretendard-Medium';
    font-size: 18px;
`;

export default Mission;
