import styles from './Counter.module.css'

// eslint-disable-next-line react/prop-types
const Counter = ({ children, cookie, setCookie }) => {
	return (
		<div className={styles.container}>
			<button
				onClick={() => {
					const newCookie = { ...cookie }
					newCookie.val++
					setCookie(newCookie)
				}}
			>
				{children || 'button'}
			</button>
		</div>
	)
}

export default Counter
