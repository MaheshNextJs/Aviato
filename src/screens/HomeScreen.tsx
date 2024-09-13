import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation';
import tw from 'twrnc';
import AddUserForm from './AddUserForm';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an AppProvider');
  }

  const {users, fetchUsers} = context;
  const [showUsers, setShowUsers] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground
      source={require('../Assets/aviato.png')}
      style={tw`flex-1`}
      resizeMode="cover">
      <View style={tw`flex-1 bg-neutral-200 bg-opacity-50`}>
        <View style={tw`bg-emerald-700 p-3 rounded-lg mx-2 my-2`}>
          <Text style={tw`text-xl text-white font-bold text-center`}>
            Home Screen
          </Text>
        </View>

        <View style={tw`h-[${screenHeight * 0.1}px]`}>
          <Image
            source={require('../Assets/aviato.png')}
            style={tw`w-full h-full`}
            resizeMode="contain"
          />
        </View>

        <View style={tw`flex-1 p-4`}>
          <Text style={tw`text-base text-gray-800 mb-4 text-center`}>
            Welcome to Aviato!
          </Text>
          <Text style={tw`text-base text-center text-gray-800 mb-4`}>
            Here are the available users displayed using ContextAPI, to see the
            users click on View Available Users
          </Text>
          <View style={tw`flex-1`}>
            {!showUsers ? (
              <Image
                source={require('../Assets/aviato.png')}
                style={tw`w-full h-[${screenHeight * 0.5}px]`}
                resizeMode="cover"
              />
            ) : (
              <ScrollView
                contentContainerStyle={tw`mt-4 pb-20`}
                showsVerticalScrollIndicator={false}>
                <Text style={tw`text-center text-red-500 pb-4`}>
                  Click on the user to see the full details of her/him
                </Text>
                {users ? (
                  users.map(user => (
                    <TouchableOpacity
                      key={user.id}
                      style={tw`p-2 bg-emerald-100 rounded-lg text-gray-800 mt-2`}
                      onPress={() => navigation.navigate('UserDetail', {user})}>
                      <Text>
                        {user.firstName} {user.lastName}
                      </Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={tw`text-base text-gray-500`}>Loading...</Text>
                )}
              </ScrollView>
            )}
          </View>
          {showForm && <AddUserForm />}
        </View>

        <View style={tw`absolute bottom-0 left-0 right-0 p-4 bg-transparent`}>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              style={tw`bg-cyan-500 p-3 rounded-lg mx-1 flex-1`}
              onPress={() => navigation.navigate('Contact')}>
              <Text style={tw`text-white font-bold text-center`}>
                Contact Us!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`bg-cyan-500 p-3 rounded-lg mx-1 flex-1`}
              onPress={() => setShowUsers(!showUsers)}>
              <Text style={tw`text-white font-bold text-center`}>
                {showUsers ? 'Hide Users' : 'Existing Users'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`bg-cyan-500 p-3 rounded-lg mx-1 flex-1`}
              onPress={() => setShowForm(!showForm)}>
              <Text style={tw`text-white font-bold text-center`}>
                {showForm ? 'Hide Form' : 'Add New User'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
