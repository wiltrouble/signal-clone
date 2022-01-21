import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: "#3872e9",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  text: {
    color: "grey",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles
