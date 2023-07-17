import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import imgProfile from "../../assets/pngwing.com.png";

const Dashboard = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("authUser")));
	}, []);

	return (
		<>
			{user && (
				<div className={styles.Dashboard}>
					<h1 className={styles.Dashboard__title}>
						Area privata utente: {user.name}
					</h1>
					<div className={styles.Dashboard__info}>
						<div className={styles.Dashboard__info__basic}>
							<Image
								src={imgProfile}
								alt={user.name}
								className={styles.Dashboard__info__basic__avatar}
							/>
							<div className={styles.Dashboard__info__basic__user}>
								<h2 className={styles.Dashboard__info__basic__user__h2}>
									Name:
								</h2>
								<p className={styles.Dashboard__info__basic__user__p}>
									{user.name}
								</p>
								<h2 className={styles.Dashboard__info__basic__user__h2}>
									Email:
								</h2>
								<p className={styles.Dashboard__info__basic__user__p}>
									{user.email}
								</p>
								<h2 className={styles.Dashboard__info__basic__user__h2}>
									Phone:
								</h2>
								<p className={styles.Dashboard__info__basic__user__p}>
									{user.phone}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Dashboard;
