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
import { PayButton } from '../components/PayButton';

import { Buskers } from '../dummydata';
import { UserProfiles } from '../dummydata';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render(){
        return (
            <View style={styles.container}>
              <ScrollView>
                <Text style={styles.headingText}>FOLLOWING</Text>
                <ScrollView horizontal={true} decelerationRate={0} snapToInterval={200}
                snapToAlignment={"center"}>
                {UserProfiles[0].following.map((busker, id) =>
                  <TouchableOpacity key={id + 'following'} style={{justifyContent: 'center', flex: 1}} onPress={() => this.props.navigation.navigate('Profile1', {user: busker})}>
                  <Image style={styles.image}
                  source={{uri: busker.photo}} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.handle}</Text>
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.act}</Text>
              </TouchableOpacity>)}
                </ScrollView>
                <Text style={styles.headingText}>NEARBY</Text>
                <ScrollView horizontal={true} decelerationRate={0} snapToInterval={200}
                snapToAlignment={"center"}>
                {Buskers.filter((busker) => busker.active).map((busker, id) =>
                  <TouchableOpacity key={id + 'nearby'} style={{justifyContent: 'center', flex: 1}} onPress={() => this.props.navigation.navigate('Profile1', {user: busker})}>
                  <Image style={styles.image}
                  source={{uri: busker.photo}} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.handle}</Text>
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.act}</Text>
              </TouchableOpacity>)}
                </ScrollView>
                <Text style={styles.headingText}>FEATURED</Text>
                <ScrollView horizontal={true} decelerationRate={0} snapToInterval={200}
                snapToAlignment={"center"}>
                {Buskers.filter((busker) => busker.photo !== "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png").map((busker, id) =>
                  <TouchableOpacity key={id + 'featured'} style={{justifyContent: 'center', flex: 1}} onPress={() => this.props.navigation.navigate('Profile1', {user: busker})}>
                  <Image style={styles.image}
                  source={{uri: busker.photo}} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.handle}</Text>
                  <Text style={{textAlign: 'center', fontSize: 12}}>{busker.act}</Text>
                </TouchableOpacity>)}
                </ScrollView>
              </ScrollView>
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
  marginLeft: 10,
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
