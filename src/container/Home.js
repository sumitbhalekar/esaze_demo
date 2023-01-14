import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {USER_DATA_ADDED} from './redux/action_types';

export const Home = props => {
  const dispatch = useDispatch();

  const [localUserData, setLocalUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const onClickSubmit = () => {
    dispatch({type: USER_DATA_ADDED, payload: localUserData});
    props.navigation.navigate('Profile');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={localUserData.firstName}
          placeholder="First name"
          style={styles.inputStyles}
          onChangeText={value => {
            setLocalUserData({...localUserData, firstName: value});
          }}
        />
        <TextInput
          value={localUserData.lastName}
          placeholder="Last name"
          style={styles.inputStyles}
          onChangeText={value => {
            setLocalUserData({...localUserData, lastName: value});
          }}
        />
        <TextInput
          value={localUserData.email}
          placeholder="Email"
          style={styles.inputStyles}
          onChangeText={value => {
            setLocalUserData({...localUserData, email: value});
          }}
        />
        <TextInput
          value={localUserData.address}
          placeholder="Address"
          style={styles.inputStyles}
          onChangeText={value => {
            setLocalUserData({...localUserData, address: value});
          }}
        />
        <TouchableOpacity
          onPress={() => {
            onClickSubmit();
          }}
          style={styles.submitButtonStyle}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  inputStyles: {
    height: 45,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
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
