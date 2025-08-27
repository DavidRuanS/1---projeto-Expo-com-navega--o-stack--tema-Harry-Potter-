import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen({ navigation, route }) {
  const from = route?.params?.from;
  const wizard = route?.params?.wizard;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Ornamentos */}
      <View style={[styles.blob, { top: -30, right: -30, backgroundColor: '#f59e0b' }]} />
      <View style={[styles.blob, { bottom: -40, left: -40, backgroundColor: '#06b6d4' }]} />

      {/* “Pergaminho” */}
      <View style={styles.scroll}>
        <Text style={styles.emoji}>📜</Text>
        <Text style={styles.title}>Sala de Feitiços</Text>

        {wizard && (
          <Text style={styles.subtitle}>Bem-vindo(a), {wizard}! 🪄</Text>
        )}
        {from && (
          <Text style={styles.note}>Você veio de: {from}</Text>
        )}

        <Text style={styles.spell}>Feitiço do Dia: Lumos Maxima ✨</Text>

        <Pressable
          android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
          style={({ pressed }) => [styles.btn, pressed && { transform: [{ scale: 0.98 }] }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.btnText}>Portus → Voltar para o Mapa</Text>
        </Pressable>
      </View>
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
  scroll: {
    backgroundColor: '#fef3c7', // pergaminho
    borderRadius: 18,
    padding: 22,
    gap: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    borderWidth: 1,
    borderColor: '#b45309'
  },
  emoji: { fontSize: 40, textAlign: 'center' },
  title: { color: '#78350f', fontSize: 22, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: '#92400e', fontSize: 14, textAlign: 'center' },
  note: { color: '#a16207', fontSize: 12, textAlign: 'center', opacity: 0.9 },
  spell: {
    color: '#111827',
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: '700',
    letterSpacing: 0.5
  },
  btn: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8
  },
  btnText: { color: '#0b1220', fontWeight: '800', fontSize: 16 }
});
