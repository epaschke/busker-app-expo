import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { PayButton } from '../components/PayButton'

export default class Home extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent',
            },
        headerRight: <PayButton />
    };

    render(){
        return (
            <View style={styles.container}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.headingText}>Followed</Text>
              </View>
            <ScrollView>
              <ScrollView horizontal={true}
                decelerationRate={0}
                snapToInterval={200} //your element width
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
            <Text style={styles.headingText}>Nearby</Text>
            <ScrollView horizontal={true}
                decelerationRate={0}
                snapToInterval={200} //your element width
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
            </ScrollView>
            <Text style={styles.headingText}>Featured</Text>
            <ScrollView horizontal={true}
                decelerationRate={0}
                snapToInterval={200} //your element width
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
            </ScrollView>
        </ScrollView>
                {/* </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff'
},
headingText: {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  marginBottom: 0,
  fontWeight: 'bold',
  fontSize: 20
},
image: {
  width: 150,
  height: 150,
  marginLeft: 15,
  marginTop: 20,
  borderRadius: 5
}
});
