import React from 'react';
import {ActivityIndicator,Modal,StyleSheet,View} from 'react-native';
import {THEME_COLORS} from '../../res/css/base';
const Loader = props => {
  const {loading, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator color={THEME_COLORS.primary} size={"large"} animating={loading} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    color:'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
