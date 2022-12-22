import Link from "next/link"
import styles from '../styles/Home.module.css'

function Home() {
	return (
		<div className={styles.container}>
			<h1 className={`${styles.hightlight} ${styles.outlineRed}`}>TypeScript pre-rendering</h1>
			<Link href='/users'>Users</Link>
			<br />
			<Link href='/posts'>Posts</Link>
		</div>
	)
}

export default Home