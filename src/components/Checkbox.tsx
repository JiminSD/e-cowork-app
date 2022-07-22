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

export default Checkbox;
