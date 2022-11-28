import Link from "next/link"

function Home() {
	return (
		<div>
			<h1>TypeScript pre-rendering</h1>
			<Link href='/users'>Users</Link>
			<br />
			<Link href='/posts'>Posts</Link>
		</div>
	)
}

export default Home