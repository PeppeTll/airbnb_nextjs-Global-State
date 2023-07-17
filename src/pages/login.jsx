import Head from "next/head";
import styles from "../styles/login.module.scss";

//Components
import Login from "../Components/Login";

export default function login() {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.login}`}>
				<Login />
			</main>
		</>
	);
}
