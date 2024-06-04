import {Text, View, Image, StyleSheet, TouchableOpacity, Pressable} from "react-native"
import logo from "../assets/tight-bounds.png"
import {Link} from "expo-router"

export default function Home() {
	return (
		<View style={styles.container}>
			<Image source={logo} />
			<Text style={styles.title}>MathType</Text>
			<Text style={styles.subtitle}>+ Mobile - </Text>
			<Link href="/game/page">
			<Pressable style={styles.button}>
					<Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Let's play</Text>
			</Pressable>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		backgroundColor: "#0A0B0C",
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "#678DF1",
		fontSize: 50,
		padding: 5
	},
	subtitle: {
		color: "#6CC8F4",
		fontSize: 35,
		padding: 5
	},
	button: {
		marginVertical: 50,
		color: "#fff",
		padding: 10,
		backgroundColor: "#086CEA",
		width: 226,
		height: 69,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center"
	}
})
