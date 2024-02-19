import { useState } from 'react'
import styles from './Price.module.css'

const Price = ({ children, price, cookie, setCookie, people, interval }) => {
	const [error, setError] = useState()

	function rest() {
		if (cookie.val >= price) {
			const newCookie = { ...cookie }
			newCookie.val = newCookie.val - price
			setCookie(newCookie)
		} else {
			setError('Not enough cookies!!')
			setTimeout(() => {
				setError()
			}, 1000)
		}
	}

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				onClick={() => {
					rest()
					people()
					interval()
				}}
			>
				{children || 'buy'}
			</button>
			{error && <p>{error}</p>}{' '}
		</div>
	)
}

export default Price
