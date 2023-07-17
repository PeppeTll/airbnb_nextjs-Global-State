import { useState, useContext } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

//mocks
import userData from "../../mocks/userData.json";
import { users } from "../Layout/Layout";

const Login = () => {
	const userList = useContext(users);

	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onHandleEmail = (e) => {
		setEmail(e.target.value);
	};

	const onHandlePassword = (e) => {
		setPassword(e.target.value);
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		console.log(userList);

		try {
			const user = userList._currentValue.filter(
				(user) => user.email === email
			);
			if (user[0].email === email && user[0].password === password) {
				localStorage.setItem("authUser", JSON.stringify(user[0]));
				router.push("/dashboard");
			} else {
				throw new Error("Credenziali non valide");
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className={styles.Login}>
			<form className={styles.Login__form} onSubmit={onHandleSubmit}>
				<p className={styles.Login__form__heading}>Login</p>
				<div className={styles.Login__form__field}>
					<svg
						className={styles.Login__form__field__icon}
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
					</svg>
					<input
						value={email}
						onChange={onHandleEmail}
						autoComplete="off"
						placeholder="Email Address"
						className={styles.Login__form__field__input}
						type="email"
						required
					/>
				</div>
				<div className={styles.Login__form__field}>
					<svg
						className={styles.Login__form__field__icon}
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
					</svg>
					<input
						value={password}
						onChange={onHandlePassword}
						placeholder="Password"
						className={styles.Login__form__field__input}
						type="password"
						required
					/>
				</div>
				<div className={styles.Login__form__field__btn}>
					<button className={styles.Login__form__field__btn__button_1}>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</button>
					<button className={styles.Login__form__field__btn__button_2}>
						Sign Up
					</button>
				</div>
				<button className={styles.Login__form__field__btn__button_3}>
					Forgot Password
				</button>
			</form>
			<div className={styles.Login__userData}>
				<h2>utente 1</h2>
				<p>email: mario.rossi@example.com</p>
				<p>password: password123</p>
				<h2>utente 2</h2>
				<p>email: john.smith@example.com</p>
				<p>password: securepass</p>
				<h2>utente 3</h2>
				<p>email: emma.johnson@example.com</p>
				<p>password: emma123</p>
			</div>
		</div>
	);
};

export default Login;
