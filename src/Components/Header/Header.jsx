import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/pngegg.png";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Header = () => {
	const router = useRouter();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("authUser")));
	}, [router.asPath]);

	return (
		<div className={styles.Header}>
			<Image src={Logo} alt="logo" className={styles.Header__logo} />
			<ul className={styles.Header__ul}>
				<li className={styles.Header__ul__li}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.Header__ul__li}>
					<Link href="/about">About</Link>
				</li>
				<li className={styles.Header__ul__li}>
					<Link href="/contacts">Contacts</Link>
				</li>
				{!user ? (
					<li className={styles.Header__ul__li}>
						<Link href="/login">Login</Link>
					</li>
				) : (
					<li className={styles.Header__ul__li}>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Header;
