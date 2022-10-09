import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Alert } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function App() {

  const [newMovieName, setNewMovieName] = useState('');
  const [newMusicName, setNewMusicName] = useState('');

  const [choosenCountry, setChoosenCountry] = useState('Thailand');


  function handleSubmit() {
    Alert.alert('Submit', `Novo filme: ${newMovieName}\nNova música: ${newMusicName}\nQuero ir para: ${choosenCountry}`)
  }

  return (
    <View style={styles.container}>
      <ScrollView  
        style={{width: '100%', height: '100%'}} 
        contentContainerStyle={{paddingBottom: 20, alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="auto" />
        <View>
          <Text style={styles.name}>Ednaldo Cordeiro Lins Junior</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{width: 200, alignItems: 'center'}}>
            <Text>FILMES</Text>
            <Image 
              source={require('./assets/vingadores.jpeg')}
              style={styles.image}
            />
            <Text style={styles.movies}>Vingadores: Ultimato</Text>
            <Image 
              source={require('./assets/shang-chi.jpg')}
              style={styles.image}
            />
            <Text style={styles.movies}>Shang-Chi</Text>
            <Image 
              source={require('./assets/jogos-vorazes.jpg')}
              style={styles.image}
            />
            <Text style={styles.movies}>Jogos Vorazes</Text>
          </View>
          <View style={{width: 200, alignItems: 'center'}}>
            <Text>MÚSICAS</Text>
            <Image 
              source={require('./assets/Hymn-For-The-Weekend.jpg')}
              style={styles.image}
            />
            <Text style={styles.musics}>Hymn for the Weekend - Coldplay</Text>
            <Image 
              source={require('./assets/badromance.jpeg')}
              style={styles.image}
            />
            <Text style={styles.musics}>Bad Romance - Lady Gaga</Text>
            <Image 
              source={require('./assets/monster.jpg')}
              style={styles.image}
            />
            <Text style={styles.musics}>Monster - Imagine Dragons</Text>
          </View>
        </View>

      <View style={styles.divider}></View>

        <View style={styles.inputsContainer}>
          <TextInput 
            placeholder='Adicione um filme' 
            style={styles.inputs}
            onChangeText={setNewMovieName}
            value={newMovieName}
          />
          <TextInput 
            placeholder='Adicione uma música' 
            style={styles.inputs}
            onChangeText={setNewMusicName}
            value={newMusicName}
          />
          <View style={{width: '100%', height: 10, marginBottom: 50}}>
            <Picker
              selectedValue={choosenCountry}
              onValueChange={(value) => {
                setChoosenCountry(value);
              }}
              enabled
              style={styles.picker}
            >
              <Picker.Item label={'Thailand'} value={'Thailand'} />
              <Picker.Item label={'USA'} value={'USA'} />
              <Picker.Item label={'Spain'} value={'Spain'} />
            </Picker>
          </View>
          <Button 
            onPress={handleSubmit}
            title={'CONCLUIR'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  name: {
    width: '100%',
    fontWeight: 'bold',
    color: '#141',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20
  },
  image: {
    width: 170,
    height: 260,
    marginBottom: 10,
  },
  movies: {
    fontStyle: 'italic',
    color: '#901',
    fontSize: 12,
    marginBottom: 15,
  },
  musics: {
    color: '#00d',
    fontSize: 12,
    marginBottom: 15,
  },
  inputsContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  }, 
  inputs: {
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    padding: 5,
    borderRadius: 5,
  },
  picker: {
    backgroundColor: '#f3f3f3', 
    width: '100%', 
    height: '100%',
    borderRadius: 5,
  },
  divider: {
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', 
    height: 1, 
    width: 300,
    paddingVertical: 10,
  }
});
