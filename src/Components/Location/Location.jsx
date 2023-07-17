import Link from "next/link";
import styles from "./index.module.scss";

const Location = ({ data }) => {
	return (
		<div className={styles.Location}>
			<h1 className={styles.Location__title}>{data.title}</h1>
			<div className={styles.Location__location__info}>
				<span className={styles.Location__rating}>⭐{data.rating} </span>
				<span className={styles.Location__reviews}> ,{data.reviews}</span>
				<span className={styles.Location__location}>
					- {data.location.via}, {data.location.città}, {data.location.regione}
				</span>
			</div>
			<img
				src={data.thumbnail}
				alt={data.title}
				className={styles.Location__thumb}
			/>
			<Link href="/" className={styles.Location__link}>
				{" "}
				Home{" "}
			</Link>
		</div>
	);
};

export default Location;
