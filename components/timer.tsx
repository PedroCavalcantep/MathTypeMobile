import React, {useState, useEffect} from "react"
import {Text} from "react-native"

const TimerComponent = () => {
	const [timer, setTimer] = useState(60)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((timer) => timer - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return <Text>{timer}</Text>
}

export default TimerComponent
