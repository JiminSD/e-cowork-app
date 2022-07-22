import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { css } from '@emotion/native';

import BackHeader from '../components/BackHeader';
import PostItem from '../components/PostItem';

const DATA = [
    { title: '인형', point: 10 },
    { title: '자전거', point: 200 },
    { title: '칫솔', point: 30 },
    { title: '테스트1', point: 30 },
    { title: '테스트2', point: 30 },
    { title: '테스트3', point: 30 },
];

const SharingEconomy = () => {
    const renderItem = ({
        item,
    }: {
        item: { title: string; point: number };
    }) => <PostItem title={item.title} point={item.point} />;

    return (
        <SafeAreaView style={safeAreaViewStyle}>
            <BackHeader />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

const safeAreaViewStyle = css`
    margin: 0 auto;
`;

export default SharingEconomy;
