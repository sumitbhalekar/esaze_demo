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
      <View style={styles.sliderView}>
        <Text style={styles.sliderText}>Swipe me to continue</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity style={[styles.firstButton]}>
          <Text style={styles.textStyleSecond}>Press me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.firstButton, {backgroundColor: 'gray'}]}>
          <Text style={styles.textStyle}>Press me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.firstButton, {backgroundColor: '#2E9AFE'}]}>
          <Text style={styles.textStyle}>Press me</Text>
        </TouchableOpacity>
        <Swipeable renderRightActions={rightActions}>
          <TouchableOpacity
            style={[styles.firstButton, {backgroundColor: '#2E9AFE'}]}>
            <Text style={styles.textStyleSecond}>Press me</Text>
          </TouchableOpacity>
        </Swipeable>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  firstButton: {
    width: 250,
    height: 40,
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
  sliderView: {
    flex: 1,
    height: 40,
    marginVertical: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  sliderText: {
    color: 'blue',
    paddingHorizontal: 10,
    fontWeight: '600',
  },
});
