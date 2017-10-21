import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export class ViewBuskersHorizontal extends React.Component {
    render (){
        return (
            <ScrollView horizontal={true} decelerationRate={0} snapToInterval={200}
            snapToAlignment={"center"}>
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.image}
                source={require('../img/Kamikaze-Fireflies-3.jpg')} />
                <Text style={{paddingTop: 7, paddingLeft: 34, fontSize: 12}}>@StreetPerformer1</Text>
                <Text style={{paddingLeft: 15, fontSize: 12}}>Circus Art, Flame Thrower</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.image}
                source={require('../img/breakfree.jpg')} />
                <Text style={{paddingTop: 7, paddingLeft: 34, fontSize: 12}}>@BreakFreeHipHop</Text>
                <Text style={{marginLeft: 30, fontSize: 12}}>Dance, Hip Hop</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.image}
                source={require('../img/breakfree.jpg')} />
                <Text style={{paddingTop: 7, paddingLeft: 34, fontSize: 12}}>@BreakFreeHipHop</Text>
                <Text style={{marginLeft: 30, fontSize: 12}}>Dance, Hip Hop</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.image}
                source={require('../img/breakfree.jpg')} />
                <Text style={{paddingTop: 7, paddingLeft: 34, fontSize: 12}}>@BreakFreeHipHop</Text>
                <Text style={{marginLeft: 30, fontSize: 12}}>Dance, Hip Hop</Text>
              </View>
            </ScrollView>
        )
    }
}
