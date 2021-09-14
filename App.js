import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  function confirmPasswordsMatch(props) {
    const { nativeEvent: { text } } = props;

    if (text !== password) {
      alert('Passwords do not match, please try again.')
    }
  }

  return (
    <ScrollView style={{ 
      flex: 1, 
      backgroundColor: '#b8a9c9' 
    }}>
      <InputWithLabel
        label='Email'
        placeholder='Type your email here'
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label='Password'
        placeholder='Type your password here'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label='Confirm password'
        placeholder='Confirm your password here'
        value={confirmationPassword}
        onChangeText={setConfirmationPassword}
        secureTextEntry
        onSubmitEditing={confirmPasswordsMatch}
      />
      <InputWithLabel
        label='Name'
        placeholder="Type your pet's name here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label='Date of birth'
        placeholder="Type your pet's birthday here"
        value={birthday}
        onChangeText={setBirthday}
      />
      <InputWithLabel
        label='Breed'
        placeholder="Type your pet's breed here"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label='Toy'
        placeholder="Type your pet's toy here"
        value={toy}
        onChangeText={setToy}
      />
    </ScrollView>
  )
}

function InputWithLabel(props) {
  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18 }}
      />
    </View>
  )
}

export default App;

