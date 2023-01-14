import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const Setting = () => {
  const rightActions = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 40,
          marginVertical: 10,
          backgroundColor: 'black',
          justifyContent: 'center',
          borderColor: 'white',
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: 'blue',
            paddingHorizontal: 10,
            fontWeight: '600',
          }}>
          Swipe me to continue
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity style={styles.firstButton}>
          <Text style={styles.textStyleSecond}>Press me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondButton}>
          <Text style={styles.textStyle}>Press me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.thirdButton}>
          <Text style={styles.textStyle}>Press me</Text>
        </TouchableOpacity>
        <Swipeable renderRightActions={rightActions}>
          <TouchableOpacity style={styles.lastButton}>
            <Text style={styles.textStyleSecond}>Press me</Text>
          </TouchableOpacity>
        </Swipeable>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  firstButton: {
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  secondButton: {
    width: 250,
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  thirdButton: {
    width: 250,
    height: 40,
    backgroundColor: '#2E9AFE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  lastButton: {
    width: 250,
    height: 40,
    backgroundColor: '#2E9AFE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  textStyleFirst: {
    color: 'blue',
  },
  textStyleSecond: {
    color: 'white',
  },
});
