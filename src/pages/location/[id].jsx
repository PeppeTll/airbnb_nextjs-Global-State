import styles from "@/styles/id.module.scss";

//Components
import Location from "@/Components/Location";

//Utils
import GET from "@/utils/HTTPS";

export default function id({ location }) {
	return (
		<div className={styles.id}>
			<Location data={location} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const queryId = context.query.id;
	const location = await GET().then((data) =>
		data.find((item) => item.id === parseInt(queryId))
	);
	return {
		props: {
			location,
		},
	};
}
