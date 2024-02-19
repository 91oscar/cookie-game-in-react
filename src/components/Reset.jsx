import styles from './Reset.module.css'
const Reset = ({ cookie, setCookie, setData, setIncrease }) => {
	const resetCookie = () => {
		const newResetCookie = { ...cookie }
		newResetCookie.val = 0
		setCookie(newResetCookie)
	}

	const resetDatos = () => {
		setData({
			grandma: 0,
			oven: 0,
			factory: 0,
			mine: 0,
			bank: 0,
		})
	}
	const resetTimer = () => {
		setIncrease(1)
	}

	return (
		<div>
			<button
				className={styles.reset}
				onClick={() => {
					resetCookie()
					resetDatos()
					resetTimer()
				}}
			>
				reset
			</button>
		</div>
	)
}

export default Reset
