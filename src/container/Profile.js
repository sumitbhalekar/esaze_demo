import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

export const Profile = props => {
  const {userData} = useSelector(state => state.userData);
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>First Name : {userData.firstName}</Text>
      <Text style={styles.textStyle}>Last Name : {userData.lastName}</Text>
      <Text style={styles.textStyle}>Email : {userData.lastName}</Text>
      <Text style={styles.textStyle}>Address : {userData.address}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Setting');
        }}
        style={styles.nextButtonStyle}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
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
