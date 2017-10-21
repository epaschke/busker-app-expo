import React from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';

// a dummy user
var user = {name: "Bianca Morris", atName: "@Bianca-Morris", picUrl: 'https://s25.postimg.org/4hr298rgf/squarish.jpg'}

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

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: user.picUrl}}
       style={{width: 150, height: 150, borderColor: 'black', borderRadius: 80}} />
        <Text style={styles.paragraph}>
         Send a tip{ this.state.tipAmount ? ' of $' + this.state.tipAmount + ' USD ' : ' '}to {user.atName}:
        </Text>
        <TextInput style={styles.inputBox} onChangeText={(tip) => {
          if (this.validateTipAmount(tip)){
            return this.setState({tipAmount: tip})}
          }
        } value={this.state.tipAmount} placeholder='Amount here (whole numbers only!)'>
        </TextInput>
        <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({forWhat: text})} value={this.state.forWhat}>
        </TextInput>
        <TouchableOpacity style={{backgroundColor: 'grey', marginTop: 10, marginBottom: 10}}>
          <Text style={{color:'white', padding: 10, width: 300, textAlign: 'center' }}>Finish @ Paypal</Text>
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
