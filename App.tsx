
import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  Switch,
  View

} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'


const App = () => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);

    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput
                        value={email}
                     keyboardType={'email-address'}
                     style={{borderWidth: 1, borderRadius: 4, padding: 10}}
                     placeHolder={'please enter your email'}
                     onChangeText={value => {
                     setEmail(value);


                     }}
          />
                <TextInput
                        value={password}
                     secureTextEntry={true}

                     style={{borderWidth: 1, borderRadius: 4, padding: 10}}
                     placeHolder={'please enter your password'}
                     onChangeText={value => setPassword(value)}



            />


                <View style={{flex:1, flexDirection: 'row',alignItems:'center'}}>
              <Switch
             value={shouldKeepLoggedIn}
             onValueChange={value => setShouldKeepLoggedIn(value)}
             />

                  <Text>
                         Keep me logged In
                </Text>
                    </View>

            <Pressable
                    style={[
                    {backgroundColor: 'black'},
                    (email.length ===0 || password.length < 8) && {opacity: 0.5},
                    ]}


                    disabled={email.length ===0 || password.length < 8}
                    onPress={() => {
                    console.log('clicked');
                     console.log(email, password, shouldKeepLoggedIn);



                }}>
                <View
                style={{
                    flex:1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>
            <Text
                     style={{color:'white', textAlign: 'center', padding: 10 }}>
                                    Submit

            </Text>
            <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />


            </View>

            </Pressable>





            </ScrollView>
         </SafeAreaView>


    );


};

export default App;
