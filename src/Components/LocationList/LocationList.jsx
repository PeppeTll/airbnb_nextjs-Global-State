import styles from "./index.module.scss";

//Components
import Card from "../Card/Card";

const LocationList = ({ data }) => {
	return (
		<div className={styles.LocationList}>
			<h1 className={styles.LocationList__h1}>Locations</h1>
			<div className={styles.LocationList__wrapList}>
				{data.map((item) => (
					<Card data={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default LocationList;
