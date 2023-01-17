import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../components/Button';
import {DataText} from '../components/DataText';

export const Profile = props => {
  const {userData} = useSelector(state => state.userData);
  return (
    <SafeAreaView>
      <DataText title={'First Name :'} value={userData.firstName} />
      <DataText title={'Last Name :'} value={userData.lastName} />
      <DataText title={'Email :'} value={userData.email} />
      <DataText title={'Address :'} value={userData.address} />
      <Button
        onPress={() => {
          props.navigation.navigate('Setting');
        }}
        buttonText="Next"
        style={styles.nextButtonStyle}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  nextButtonStyle: {
    marginTop: 50,
    height: 50,
    width: '50%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
