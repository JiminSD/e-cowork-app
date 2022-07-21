import { Image } from 'react-native';
import styled from '@emotion/native';

const BackHeader = () => {
    return (
        <Container>
            <BackBtn>
                <Image
                    source={require('../assets/images/icn_arrow_left.png')}
                />
                <BackText>뒤로가기</BackText>
            </BackBtn>
        </Container>
    );
};

const Container = styled.View`
    width: 340px;
    height: 84px;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: center;
`;

const BackBtn = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`;

const BackText = styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 22px;
    margin-left: 12px;
`;

export default BackHeader;
