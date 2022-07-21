import styled from '@emotion/native';

interface Props {
    title: string;
    point: number;
}

const Post = (props: Props) => {
    const { title, point } = props;

    return (
        <Container>
            <Image />
            <ItemTitle>{title}</ItemTitle>
            <PointText>{point} Point</PointText>
        </Container>
    );
};

const Container = styled.TouchableOpacity`
    margin: 0 9px 40px 9px;
`;

const Image = styled.View`
    width: 160px;
    height: 236px;
    border-radius: 10px;
    background-color: gray;
`;

const ItemTitle = styled.Text`
    font-family: 'Pretendard-Medium';
    font-size: 16px;
    letter-spacing: -0.5px;
    margin: 6px 0;
`;

const PointText = styled.Text`
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    letter-spacing: -0.5px;
`;

export default Post;
