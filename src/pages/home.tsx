import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.block}>
          <Ionicons name="person-circle" size={80} color="#fff" />
          <View style={styles.info}>
            <Text style={styles.userText}>Olá, JULYA</Text>
            <Text style={styles.cpf}>CPF: ***.***.657-**</Text>
          </View>
        </View>
        <Text style={styles.warning}>
          NÃO É VÁLIDO COMO DOCUMENTO DE IDENTIFICAÇÃO
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Buscar..." style={styles.searchInput} />
      </View>

      <LinearGradient colors={["#ff6b00", "#ffd600"]} style={styles.card}>
        <Text style={styles.cardTitle}>Abono Salarial 2025</Text>
        <Text>
          Consulte se você tem direito ao Abono Salarial (ano-base 2023).
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.grid}>
        <View style={styles.box}>
          <MaterialIcons name="assignment" size={32} color="#007bff" />
          <Text>Contratos de Trabalho Digitais</Text>
        </View>
        <View style={styles.box}>
          <MaterialIcons name="work" size={32} color="#007bff" />
          <Text>Outros vínculos de trabalho</Text>
        </View>
        <View style={styles.box}>
          <MaterialIcons name="upload" size={32} color="#007bff" />
          <Text>Enviar Carteira de Trabalho Digital</Text>
        </View>
      </View>

      <View style={styles.nav}>
        <Ionicons name="person" size={24} />
        <Ionicons name="cash" size={24} />
        <Ionicons name="briefcase" size={24} />
        <Ionicons name="wallet" size={24} />
        <Ionicons name="menu" size={24} />
      </View>
    </View>
  );
}
