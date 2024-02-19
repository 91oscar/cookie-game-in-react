import './App.css'
import Counter from './components/Counter'
import Price from './components/Price'
import Reset from './components/Reset'

import { useEffect, useState } from 'react'

const App = () => {
	const [cookie, setCookie] = useState({ val: 0 })
	const [increaseCookie, setIncrease] = useState(1)
	const [data, setData] = useState({
		grandma: 0,
		oven: 0,
		factory: 0,
		mine: 0,
		bank: 0,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setCookie(a => ({ val: a.val + increaseCookie }))
		}, 1000)

		return () => clearInterval(interval)
	}, [increaseCookie])

	const incrementCookies = (price, value) => {
		if (cookie.val >= price) {
			setIncrease(increaseCookie + value)
		}
	}

	const incrementData = (price, property) => {
		if (cookie.val >= price) {
			let newDatos = { ...data }
			newDatos[property] += 1
			setData(newDatos)
		}
	}

	return (
		<div>
			<section>
				<span>Count: {cookie.val}</span>
				<span>Cookies: {increaseCookie}</span>
			</section>

			<section>
				<span>Grandma: {data.grandma}</span>
				<span>Oven: {data.oven}</span>
				<span>Factory: {data.factory}</span>
				<span>mine: {data.mine}</span>
				<span>Bank: {data.bank}</span>
			</section>

			<section>
				<Price
					setCookie={setCookie}
					cookie={cookie}
					price={10}
					people={() => incrementData(10, 'grandma')}
					interval={() => incrementCookies(10, 1)}
				></Price>
				<Price
					cookie={cookie}
					setCookie={setCookie}
					price={100}
					people={() => incrementData(100, 'oven')}
					interval={() => incrementCookies(100, 10)}
				></Price>
				<Price
					cookie={cookie}
					setCookie={setCookie}
					price={1000}
					people={() => incrementData(1000, 'factory')}
					interval={() => incrementCookies(1000, 100)}
				></Price>
				<Price
					cookie={cookie}
					setCookie={setCookie}
					price={10000}
					people={() => incrementData(10000, 'mine')}
					interval={() => incrementCookies(10000, 1000)}
				></Price>
				<Price
					cookie={cookie}
					setCookie={setCookie}
					price={100000}
					people={() => incrementData(100000, 'bank')}
					interval={() => incrementCookies(100000, 10000)}
				></Price>
			</section>
			<Reset
				cookie={cookie}
				setCookie={setCookie}
				data={data}
				setData={setData}
				increaseCookie={increaseCookie}
				setIncrease={setIncrease}
			></Reset>
			<Counter cookie={cookie} setCookie={setCookie}>
				counter
			</Counter>
		</div>
	)
}

export default App
