import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AUTHOR = 'DAVID RUAN';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Ornamentos mágicos */}
      <View style={[styles.blob, { top: -40, left: -40, backgroundColor: '#1d4ed8' }]} />
      <View style={[styles.blob, { bottom: -50, right: -50, backgroundColor: '#22c55e' }]} />
      <Text style={styles.badge}>Escola de Magia e Bruxaria • Hogwarts</Text>

      <View style={styles.card}>
        <Text style={styles.emoji}>🦉</Text>
        <Text style={styles.title}>Mapa do Bruxo</Text>
        <Text style={styles.subtitle}>
          Bem-vindo(a), {AUTHOR}! Use o feitiço correto para abrir a próxima sala.
        </Text>

        <Pressable
          android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
          style={({ pressed }) => [styles.btn, pressed && { transform: [{ scale: 0.98 }] }]}
          onPress={() => navigation.navigate('Details', { from: 'Home', wizard: AUTHOR })}
        >
          <Text style={styles.btnText}>Alohomora → Abrir Sala de Feitiços</Text>
        </Pressable>
      </View>

      <Text style={styles.signature}>Feito por {AUTHOR} • ⚡</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0b1220'
  },
  blob: {
    position: 'absolute',
    width: 160, height: 160,
    borderRadius: 100,
    opacity: 0.15
  },
  badge: {
    color: '#fbbf24',
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: 0.6,
    fontWeight: '700'
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 24,
    gap: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    borderWidth: 1,
    borderColor: '#fbbf24' // dourado no card
  },
  emoji: { fontSize: 42, textAlign: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: '#cbd5e1', fontSize: 14, textAlign: 'center', marginBottom: 12 },
  btn: {
    backgroundColor: '#fbbf24',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  btnText: { color: '#0b1220', fontWeight: '800', fontSize: 16 },
  signature: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 12
  }
});
