import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
	const router = useRouter()
	function handleClick() {
		router.replace('/product')
	}
	return (
		<div>
			<h1>Home</h1>
			<Link href='/blog'>Blog</Link>
			<Link href='/product'>Products</Link>
			<button onClick={handleClick}>Place Order</button>
		</div>
	)
}

export default Home