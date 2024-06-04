import React, {useState, useEffect} from "react"
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"

export default function Game() {
	let [numeros, setNumeros] = useState([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	let [resultado, setResultado] = useState(Number)
	let [inputUser, setInputUser] = useState("")
	let [acertos, setAcertos] = useState(0)
	let [erros, setErros] = useState(0)
	let [resultadoErrado, setResultadoErrado] = useState(0)
	let [buttonResposta, setButton] = useState(<div></div>)
	let [numerobom, setNumeroBom] = useState(0)

	useEffect(() => {
		gerarErro()
		setNumeroBom((numerobom = gerarNumeros(1, 3)))
		console.log(numerobom)

		setResultado(numeros[0] * numeros[1])
	}, [acertos, erros])
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
		setNumeros(() => [gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}

	function restart() {
		setAcertos(0)
		setErros(0)
	}

	function readInput() {
		if (parseInt(inputUser) == resultado) {
			setAcertos((prevAcertos) => prevAcertos + 1)
			setInputUser("")
			gerarConta()
		} else {
			setErros((prevErros) => prevErros + 1)
			setInputUser("")
			gerarConta()
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.numbers}>
				{numeros[0]} x {numeros[1]}
			</Text>
			<Text style={styles.result}>{resultado}</Text>

			<p style={styles.pedro}>
				Acertos: {acertos} Erros: {erros}
			</p>

			{numerobom == 1 ? (
				<div style={styles.containerButton}>
					<TouchableOpacity
						onPress={() => {
							setAcertos((acertos) => (acertos += 1))
							gerarConta()
						}}
					>
						<Text style={styles.button}>{resultado}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={readInput}>
						<Text style={styles.button}>{resultadoErrado}</Text>
					</TouchableOpacity>
				</div>
			) : (
				<div style={styles.containerButton}>
					<TouchableOpacity onPress={readInput}>
						<Text style={styles.button}>{resultadoErrado}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setAcertos((acertos) => (acertos += 1))
							gerarConta()
						}}
					>
						<Text style={styles.button}>{resultado}</Text>
					</TouchableOpacity>
				</div>
			)}

			<TouchableOpacity onPress={restart}>
				<Text style={styles.button}>restar</Text>
			</TouchableOpacity>
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
	},
	containerButton: {
		display: "flex",
		flexDirection: "row",
		gap: 20
	},
	button: {
		display: "flex",
		marginVertical: 50,
		fontSize: 20,
		color: "#fff",
		padding: 10,
		backgroundColor: "#3498db",
		borderRadius: 10
	},
	numbers: {
		fontSize: 40,
		color: "#fff",
		marginTop: 20
	},
	result: {
		fontSize: 25,
		color: "#999",
		marginTop: 10,
		textAlign: "center",
		borderRadius: 15,
		width: 200
	},
	pedro: {
		fontSize: 20,
		color: "#fff",
		marginTop: 20,
		width: "auto"
	}
})
