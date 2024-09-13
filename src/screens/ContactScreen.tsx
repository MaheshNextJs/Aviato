import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation';
import {useAppContext} from '../context/AppContext';
import tw from 'twrnc';

type ContactScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contact'
>;

type Props = {
  navigation: ContactScreenNavigationProp;
};

const ContactScreen: React.FC<Props> = ({navigation}) => {
  const {users} = useAppContext();
  const firstUser = users ? users[0] : null;

  return (
    <ImageBackground
      source={require('../Assets/aviato.png')}
      style={tw`flex-1`}
      resizeMode="cover">
      <View style={tw`flex-1 bg-neutral-200 bg-opacity-50 p-4`}>
        <View style={tw`bg-emerald-700 p-3 rounded-lg mx-2 my-2`}>
          <Text style={tw`text-xl text-white font-bold text-center rounded-lg`}>
            Contact Us!
          </Text>
        </View>

        <Text style={tw`text-base text-gray-800 mb-2 text-center`}>
          Here are the contact details: {'\n'}
          Kindly note that this example displays only one user's address.
        </Text>
        {firstUser ? (
          <View
            style={tw`my-4 mx-4 p-4 border border-gray-300 rounded-lg bg-emerald-100`}>
            <Text style={tw`text-base`}>
              <Text style={tw`font-bold`}>xxxx</Text>
            </Text>
            <Text style={tw`text-base`}>
              <Text style={tw`font-bold`}>xxxxx</Text>
            </Text>
            <Text style={tw`text-base`}>
              <Text style={tw`font-bold`}>help@aviato.com</Text>
            </Text>
          </View>
        ) : (
          <Text style={tw`mt-4 text-red-500 text-center`}>
            No user data available
          </Text>
        )}
        <TouchableOpacity
          style={tw`bg-cyan-500 p-3 rounded-lg m-4 absolute bottom-0 left-0 right-0`}
          onPress={() => navigation.goBack()}>
          <Text style={tw`text-white text-center font-bold text-base`}>
            Go to HomePage
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ContactScreen;
