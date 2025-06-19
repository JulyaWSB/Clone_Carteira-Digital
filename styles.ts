import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  header: {
    backgroundColor: "#002f6c",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },

  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    margin: 12,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
  },

  searchIcon: {
    marginRight: 8,
  },

  userText: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 15 },

  cpf: { color: "#fff", marginTop: 4 },

  warning: { color: "#ffd600", fontSize: 12, marginTop: 20 },

  card: {
    marginTop: 5,
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },

  button: {
    marginTop: 10,
    backgroundColor: "#002f6c",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: { color: "#fff", fontWeight: "bold" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 5,
  },

  box: {
    width: "40%",
    backgroundColor: "#fff",
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
    textAlign: "center",
  },

  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#e0e0e0",
    padding: 12,
    marginTop: 20,
  },
});

export const styles2 = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  image: {
    marginTop: 140,
  },

  button: {
    marginTop: 90,
    backgroundColor: "#2281fc",
    padding: 10,
    borderRadius: 50,
    width: 350,
    alignItems: "center",
  },

  buttonText: { color: "#fff" },

  buttonTextGov: { fontWeight: "bold", fontSize: 18 },

  title: {
    color: "#012f69",
    fontWeight: "800",
    fontSize: 17,
    marginTop: 15,
  },
});
