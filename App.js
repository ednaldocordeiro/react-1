import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.name}>Ednaldo Cordeiro Lins Junior</Text>
      </View>

      <View>
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
    color: '#00d',
    fontSize: 12,
  }
});
