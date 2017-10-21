import React from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default class PaymentScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { tipAmount: undefined, forWhat: "Thanks for the amazing show!" }
  }
  validateTipAmount(tipNum){
    var tipValid = true;
    for (var i = 0 ; i < tipNum.toString().length ; i++) {
      if ((isNaN(parseInt(tipNum[i])))){
        tipValid = false;
        break;
      }
    }
    return tipValid;
  }
  spawnPaypalAlert1(){
    Alert.alert(
      'Paypal Validation',
      'Are you sure you would like to pay '+ this.props.navigation.state.params.user.handle + ' $' + this.state.tipAmount + ' USD?',
      [
        {text: 'Yes', onPress: () => this.spawnPaypalAlert2()},
        {text: 'Cancel', onPress: () => console.log("Paypal payment aborted."), style: 'cancel'},
      ],
      { cancelable: true }
    )
  }

  spawnPaypalAlert2(){
    Alert.alert(
      'Success!',
      'Your payment to ' + this.props.navigation.state.params.user.handle + ' went through!',
      [
        {text: 'Okay!', onPress: () => this.props.navigation.navigate('Main')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.navigation.state.params.user.photo}}
       style={{width: 150, height: 150, borderColor: 'black', borderRadius: 80}} />
        <Text style={styles.paragraph}>
         Send a tip{ this.state.tipAmount ? ' of $' + this.state.tipAmount + ' USD ' : ' '}to {this.props.navigation.state.params.user.handle}:
        </Text>
        <TextInput style={styles.inputBox} onChangeText={(tip) => {
          if (this.validateTipAmount(tip)){
            return this.setState({tipAmount: tip})}
          }
        } value={this.state.tipAmount} placeholder='Amount here (whole numbers only!)'>
        </TextInput>
        <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({forWhat: text})} value={this.state.forWhat}>
        </TextInput>
        <TouchableOpacity style={{backgroundColor: 'grey', marginTop: 10, marginBottom: 10}} onClick={() => this.spawnPaypalAlert1()}>
          <Text style={{color:'white', padding: 10, width: 300, textAlign: 'center' }}>Pay with <Foundation
            size={20}
            name="paypal"
            color="white"
        />aypal</Text>
        </TouchableOpacity>
        <Text>
        {this.state.tipAmount ? 'Approx Total: USD $' + (parseInt(this.state.tipAmount) + (this.state.tipAmount * .029 + .30)) : " " }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
