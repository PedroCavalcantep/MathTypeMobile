import {ReactNode} from "react"
import {View, Text, StyleSheet} from "react-native"

type scoreProps = {
	acertos: ReactNode
	erros: ReactNode
	score: ReactNode
}

export default function Score({acertos, erros, score}: scoreProps) {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.score}>Score</Text>
				<Text style={styles.result}>{score}</Text>
				<Text style={styles.hitsMistakes}>Hits: {acertos}</Text>
				<Text style={styles.hitsMistakes}>Mistakes: {erros}</Text>
			</View>
		</View>
		
	)
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#0A0B0C",
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: "80%",
		maxHeight: "60%",
		display: "flex",
		flex: 1,
		backgroundColor: "#0C0F12",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 61
	},
	score: {
		fontSize: 32,
		color: "white",
		fontWeight: 600,
	},
	result: {
		fontSize: 32,
		color: "white",
		paddingBottom: 30
	},
	hitsMistakes: {
		fontSize: 20,
		color: "white",
		fontWeight: 600,
		padding: 5
	}
})
