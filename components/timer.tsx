import React, {useState, useEffect} from "react"
import {Text, StyleSheet} from "react-native"

type ShowScoreProps = {
	toggleScore: Function
}

const TimerComponent = ({toggleScore}: ShowScoreProps) => {
	const [timer, setTimer] = useState(30)

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer >= 1) {
				setTimer((timer) => timer - 1)
			} else {
				toggleScore()
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [timer, toggleScore])

	return <Text style={styles.timer}>{timer}</Text>
}

const styles = StyleSheet.create({
	timer: {
		color: "white",
		fontSize: 40,
		fontWeight: 600,
		paddingBottom: "20%"
	}
})

export default TimerComponent
