import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Ednaldo Cordeiro Lins Junior</Text>
      </View>

      <View>
        <View>
          <Text>FILMES</Text>
          <Text>Vingadores: Ultimato</Text>
          <Text>Shang-Chi</Text>
          <Text>Jogos Vorazes</Text>
        </View>
        <View>
          <Text>MÚSICAS</Text>
          <Text>Hymn for the Weekend - Coldplay</Text>
          <Text>Bad Romance - Lady Gaga</Text>
          <Text>Monster - Imagine Dragons</Text>
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
});
