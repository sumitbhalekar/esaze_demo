import {useState} from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../components/Button';
import {TextInputField} from '../components/TextInputComp';
import {USER_DATA_ADDED} from './redux/action_types';

export const Home = props => {
  const {NoticeModule} = NativeModules;
  const dispatch = useDispatch();

  const [localUserData, setLocalUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const onClickSubmit = () => {
    NoticeModule.noticeMessageText('testName', 'testLocation');
    dispatch({type: USER_DATA_ADDED, payload: localUserData});
    props.navigation.navigate('Profile');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInputField
          value={localUserData.firstName}
          placeholder="First name"
          onChangeText={value => {
            setLocalUserData({...localUserData, firstName: value});
          }}
        />
        <TextInputField
          value={localUserData.lastName}
          placeholder="Last name"
          onChangeText={value => {
            setLocalUserData({...localUserData, lastName: value});
          }}
        />
        <TextInputField
          value={localUserData.email}
          placeholder="Email"
          onChangeText={value => {
            setLocalUserData({...localUserData, email: value});
          }}
        />
        <TextInputField
          value={localUserData.address}
          placeholder="Address"
          onChangeText={value => {
            setLocalUserData({...localUserData, address: value});
          }}
        />
        <Button
          onPress={() => {
            onClickSubmit();
          }}
          buttonText="Submit"
          style={styles.submitButtonStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 50,
    height: 50,
    width: '50%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
