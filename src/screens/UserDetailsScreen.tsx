import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation';
import tw from 'twrnc';

type UserDetailScreenProps = StackScreenProps<RootStackParamList, 'UserDetail'>;

const UserDetailScreen: React.FC<UserDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {user} = route.params;

  return (
    <ImageBackground
      source={require('../Assets/aviato.png')}
      style={tw`flex-1`}
      resizeMode="cover">
      <View style={tw`flex-1 bg-neutral-200 bg-opacity-50 p-4`}>
        <View style={tw`bg-emerald-700 p-3 rounded-lg mb-4`}>
          <Text style={tw`text-xl text-white font-bold text-center rounded-lg`}>
            {user.firstName} {user.lastName} Details
          </Text>
        </View>

        <View style={tw`flex-1 p-4`}>
          <Text style={tw`text-base text-gray-800 mb-4`}>
            These are details for {user.firstName} {user.lastName} Scroll to
            view If you missed anything
          </Text>

          <View
            style={tw`p-4 border border-gray-300 rounded-lg bg-stone-100 mb-32`}>
            <ScrollView
              contentContainerStyle={tw`mt-4 pb-20`}
              showsVerticalScrollIndicator={false}>
              <Text style={tw`text-base font-bold`}>First Name: </Text>
              <Text style={tw`text-base`}>{user.firstName}</Text>
              <Text style={tw`text-base font-bold`}>Last Name: </Text>
              <Text style={tw`text-base`}>{user.lastName}</Text>
              <Text style={tw`text-base font-bold`}>Email: </Text>
              <Text style={tw`text-base`}>{user.email}</Text>
              <Text style={tw`text-base font-bold`}>BirthDate: </Text>
              <Text style={tw`text-base`}>{user.birthDate}</Text>
              <Text style={tw`text-base font-bold`}>Eye color: </Text>
              <Text style={tw`text-base`}>{user.eyeColor}</Text>
              <Text style={tw`text-base font-bold`}>Age: </Text>
              <Text style={tw`text-base`}>{user.age}</Text>
              <Text style={tw`text-base font-bold`}>Gender: </Text>
              <Text style={tw`text-base`}>{user.gender}</Text>
              <Text style={tw`text-base font-bold`}>BloodGroup: </Text>
              <Text style={tw`text-base`}>{user.bloodGroup}</Text>
              <Text style={tw`text-base font-bold`}>Height: </Text>
              <Text style={tw`text-base`}>{user.height}</Text>
              <Text style={tw`text-base font-bold`}>Weight: </Text>
              <Text style={tw`text-base`}>{user.weight}</Text>
              <Text style={tw`text-base font-bold`}>University: </Text>
              <Text style={tw`text-base`}>{user.university}</Text>

              <Text style={tw`text-base font-bold`}>Address: </Text>
              <Text style={tw`text-base`}>
                {user.address.address}, {user.address.city},{' '}
                {user.address.state} - {user.address.postalCode},{' '}
                {user.address.country}
              </Text>
            </ScrollView>
          </View>

          <View style={tw`absolute bottom-0 left-0 right-0 p-4 bg-transparent`}>
            <TouchableOpacity
              style={tw`bg-cyan-500 p-4 rounded-lg`}
              onPress={() => navigation.goBack()}>
              <Text style={tw`text-white font-bold text-center`}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserDetailScreen;
