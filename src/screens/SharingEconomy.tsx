import { FlatList, View } from 'react-native';
import styled from '@emotion/native';

import BackHeader from '../components/BackHeader';
import PostItem from '../components/PostItem';

const DATA = [
    {
        title: '인형',
        point: 10,
    },
    {
        title: '자전거',
        point: 200,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
    {
        title: '칫솔',
        point: 30,
    },
];

const SharingEconomy = () => {
    const renderItem = ({
        item,
    }: {
        item: { title: string; point: number };
    }) => <PostItem title={item.title} point={item.point} />;

    return (
        <View>
            <BackHeader />
            <Container>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    numColumns={2}
                ></FlatList>
            </Container>
        </View>
    );
};

const Container = styled.ScrollView`
    margin: 0 auto;
`;

export default SharingEconomy;
