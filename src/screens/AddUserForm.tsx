import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useAppContext} from '../context/AppContext';
import tw from 'twrnc';

const AddUserForm: React.FC = () => {
  const {addUser} = useAppContext();
  const [showForm, setShowForm] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleAddUser = () => {
    Alert.alert('User Added', 'The user has been added successfully!', [
      {text: 'OK', onPress: () => setShowForm(false)},
    ]);

    if (firstName && lastName && email) {
      addUser({
        firstName,
        lastName,
        email,
        address: {
          address,
          city,
          state,
          stateCode,
          postalCode,
          country,
        },
      });
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setCity('');
    setState('');
    setStateCode('');
    setPostalCode('');
    setCountry('');
  };

  return (
    <ScrollView
      contentContainerStyle={tw`flex-grow justify-center`}
      keyboardShouldPersistTaps="handled">
      <View style={tw`bg-stone-100 rounded-lg shadow-md p-4 mb-20`}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="City"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={state}
          onChangeText={setState}
          placeholder="State"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={stateCode}
          onChangeText={setStateCode}
          placeholder="State Code"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={postalCode}
          onChangeText={setPostalCode}
          placeholder="Postal Code"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TextInput
          value={country}
          onChangeText={setCountry}
          placeholder="Country"
          style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
        />
        <TouchableOpacity
          style={tw`bg-cyan-200 p-2 border-gray-300 border rounded-lg`}
          onPress={handleAddUser}>
          <Text style={tw`text-center`}>Add User</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddUserForm;
