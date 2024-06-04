import React, {useState, useEffect} from "react"
import {StyleSheet, Text, Pressable, View} from "react-native"
import Timer from "../../components/timer"
import Score from "../../components/score"

export default function Game() {
	const [numeros, setNumeros] = useState([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	const [resultado, setResultado] = useState<number>(0)
	const [inputUser, setInputUser] = useState("")
	const [acertos, setAcertos] = useState(0)
	const [erros, setErros] = useState(0)
	const [resultadoErrado, setResultadoErrado] = useState(0)
	const [numerobom, setNumeroBom] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)

	useEffect(() => {
		gerarErro()
		setNumeroBom(gerarNumeros(1, 3))
		setResultado(numeros[0] * numeros[1])
	}, [acertos, erros, numeros])

	useEffect(() => {
		gerarErro()
	}, [resultado])

	function gerarErro() {
		setResultadoErrado(resultado + gerarNumeros(1, 4))
	}

	function gerarNumeros(min: number, max: number) {
		return Math.floor(Math.random() * (max - min)) + min
	}

	function gerarConta() {
		setNumeros([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}

	function restart() {
		gerarConta()
		setAcertos(0)
		setErros(0)
		setScore(0)
	}

	function toggleScore() {
		setShowScore(true)
	}

	return (
		<View style={styles.container}>
			{showScore ? (
				<Score acertos={acertos} erros={erros} score={score} />
			) : (
				<View style={styles.container}>
					<Timer toggleScore={toggleScore} /> <Text style={styles.score}>Score: {score}</Text>
					<View style={styles.containerConta}>
						<Text style={styles.conta}>
							{numeros[0]} x {numeros[1]}
						</Text>
					</View>
					<View style={styles.containerButton}>
						{numerobom === 1 ? (
							<>
								<Pressable
									style={styles.button}
									onPress={() => {
										setScore((prevScore) => prevScore + 10)
										setAcertos((prevAcertos) => prevAcertos + 1)

										gerarConta()
									}}
								>
									<Text
										style={{
											color: "white",
											fontSize: 30,
											textAlign: "center"
										}}
									>
										{resultado}
									</Text>
								</Pressable>
								<Pressable
									style={styles.button}
									onPress={() => {
										setErros(erros + 1)
										setScore((prevScore) => prevScore - 10)
										gerarConta()
									}}
								>
									<Text
										style={{
											color: "white",
											fontSize: 30,
											textAlign: "center"
										}}
									>
										{resultadoErrado}
									</Text>
								</Pressable>
							</>
						) : (
							<>
								<Pressable
									style={styles.button}
									onPress={() => {
										setErros(erros + 1)
										setScore((prevScore) => prevScore - 10)
										gerarConta()
									}}
								>
									<Text
										style={{
											color: "white",
											fontSize: 30,
											textAlign: "center"
										}}
									>
										{resultadoErrado}
									</Text>
								</Pressable>
								<Pressable
									style={styles.button}
									onPress={() => {
										setScore((prevScore) => prevScore + 10)
										setAcertos((prevAcertos) => prevAcertos + 1)
										gerarConta()
									}}
								>
									<Text
										style={{
											color: "white",
											fontSize: 30,
											textAlign: "center"
										}}
									>
										{resultado}
									</Text>
								</Pressable>
							</>
						)}
					</View>
					<Pressable onPress={restart}>
						<Text
							style={{
								color: "white",
								fontSize: 30,
								textAlign: "center"
							}}
						>
							Restart
						</Text>
					</Pressable>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		backgroundColor: "#0A0B0C",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: "5%"
	},
	containerButton: {
		flexDirection: "row",
		gap: 75
	},
	button: {
		marginVertical: 50,
		color: "#fff",
		padding: 10,
		backgroundColor: "#086CEA",
		borderRadius: 15,
		width: 100,
		minHeight: 63
	},
	score: {
		fontSize: 32,
		fontWeight: 700,
		color: "#fff",
		marginBottom: "10%"
	},
	containerConta: {
		width: "120%",
		minHeight: "18%",
		display: "flex",
		backgroundColor: "#0C0F12",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 36
	},
	conta: {
		fontSize: 64,
		fontWeight: 700,
		color: "#fff"
	},
	result: {
		fontSize: 25,
		color: "#999",
		marginTop: 10,
		textAlign: "center",
		borderRadius: 15,
		width: 200
	}
})
