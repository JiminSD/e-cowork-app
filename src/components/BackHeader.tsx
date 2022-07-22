import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackPrams';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styled from '@emotion/native';

type Props = StackNavigationProp<RootStackParamList, 'Home'>;

const BackHeader = () => {
    const navigation = useNavigation<Props>();

    const onPress = () => {
        navigation.navigate('Home');
    };

    return (
        <Container>
            <BackBtn onPress={onPress}>
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
