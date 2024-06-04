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
			<Text style={{color: "white"}}>acertos: {acertos}</Text>
			<Text style={{color: "white"}}>erros: {erros}</Text>
			<Text style={{color: "white"}}>score: {score}</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		backgroundColor: "#0C0F12",
		justifyContent: "center",
		alignItems: "center"
	}
})
