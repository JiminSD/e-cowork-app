import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text style={styles.name}>E-cowork</Text>
            <View style={styles.info__container}>
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
            </View>
            <View style={styles.cowork}>
                <Text>지구 재생 진행도</Text>
            </View>
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

export default Home;

const styles = StyleSheet.create({
    name: {
        color: '#01D94B',
        fontSize: 36,
        //폰트 pretendard 전역 폰트 설정하기
    },

    cowork: {
        width: 338,
        height: 200,
        backgroundColor: '#E9EBEE',
    },

    info__container: {
        width: 340,
        height: 70,
        borderRadius: 6,
        backgroundColor: '#E5EBF4',
    },
});
