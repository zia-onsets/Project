import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Divider} from 'react-native-elements';
import {baseStyles} from '../../res/css/base';


const DividerLine = pros => {
  return (
    <View style={styles.dividerView}>
      <View style={styles.dividerLeftLines}>
        <Divider style={styles.dividerLineAbove} />
      </View>
      <View style={styles.dividerTestView}>
        <Text style={{color: '#979797', fontSize: 12}}>
          {pros.dividerText}
        </Text>
      </View>
      <View style={styles.dividerRightLines}>
        <Divider style={styles.dividerLineAbove} />
      </View>
    </View>
  );
};
export default DividerLine;

const styles = StyleSheet.create({
  dividerView: {
    flexDirection: 'row',
    width: '100%',
    ...baseStyles.mT1x,
  },
  dividerLeftLines: {
    flex: 1.5,
    justifyContent: 'center',
  },
  dividerRightLines: {
    flex: 1.5,
    justifyContent: 'center',
  },
  dividerTestView: {
    flex: 2,
    alignItems: 'center',
  },
  dividerLineAbove: {
    backgroundColor: '#979797',
    height: 1,
  },
});
