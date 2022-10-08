import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function App() {

  const [newMovie, setNewMovie] = useState('');
  const [newMusic, setNewMusic] = useState('');

  const [choosenCountry, setChoosenCountry] = useState('');


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

        <View>
          <View>
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
          <View>
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

        <View style={styles.inputsContainer}>
          <TextInput 
            placeholder='Adicione um filme' 
            style={styles.inputs}
            onChangeText={setNewMovie}
            value={newMovie}
          />
          <TextInput 
            placeholder='Adicione uma música' 
            style={styles.inputs}
            onChangeText={setNewMusic}
            value={newMusic}
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
              <Picker.Item label={'USA'} value={'USA'} />
              <Picker.Item label={'England'} value={'England'} />
              <Picker.Item label={'Denmark'} value={'Denmark'} />
            </Picker>
          </View>
          <Button 
            onPress={() => alert(`Novo filme: ${newMovie}\nNova música: ${newMusic}\nGostaria de viajar para: ${choosenCountry}`
            )}
            title={'ADD'}
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
    fontWeight: 'bold',
    color: '#141',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: 170,
    height: 260
  },
  movies: {
    fontStyle: 'italic',
    color: '#901',
    fontSize: 12,
  },
  musics: {
    color: '#109',
    fontSize: 12,
  },
  inputsContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: 200,
  }, 
  inputs: {
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    padding: 5,
    borderRadius: 5,
  },
  picker: {
    backgroundColor: '#f3f3f3', 
    width: '100%', 
    height: '100%',
    borderRadius: 5,
  }
});
