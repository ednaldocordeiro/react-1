import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [newMovieName, setNewMovieName] = useState('');
  const [newMusicName, setNewMusicName] = useState('');


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.name}>Ednaldo Cordeiro Lins Junior</Text>
        </View>

        <View style={{width: '55%'}}>
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

      <View style={{borderBottomWidth: 1, borderBottomColor: 'gray', height: 10, width: 300}}></View>

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
          <Button 
            onPress={() => alert(`Novo filme: ${newMovieName}\nNova música: ${newMusicName}`)}
            title={'CONCLUIR'}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    width: '100%',
    fontWeight: 'bold',
    color: '#141',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 60
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
  }
});
