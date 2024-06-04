import React, {useState, useEffect} from "react"
import {Text, StyleSheet} from "react-native"

type ShowScoreProps = {
	toggleScore: Function
}

const TimerComponent = ({toggleScore}: ShowScoreProps) => {
	const [timer, setTimer] = useState(10)

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
		color: "white"
	}
})

export default TimerComponent
