import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
          <Text style={styles.movies}>Vingadores: Ultimato</Text>
          <Text style={styles.movies}>Shang-Chi</Text>
          <Text style={styles.movies}>Jogos Vorazes</Text>
        </View>
        <View>
          <Text>MÚSICAS</Text>
          <Text style={styles.musics}>Hymn for the Weekend - Coldplay</Text>
          <Text style={styles.musics}>Bad Romance - Lady Gaga</Text>
          <Text style={styles.musics}>Monster - Imagine Dragons</Text>
        </View>
      </View>

      <View style={{borderBottomWidth: 1, borderBottomColor: 'gray', height: 10, width: 300}}></View>

      <View style={styles.inputsContainer}>
        <TextInput 
          placeholder='Insira o novo filme' 
          style={styles.inputs}
          onChangeText={setNewMovieName}
          value={newMovieName}
        />
        <TextInput 
          placeholder='Insira a nova música' 
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
    flex: 1,
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
  }, 
  inputs: {
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 20,
    width: 200,
    padding: 5,
    borderRadius: 5,
  }
});
