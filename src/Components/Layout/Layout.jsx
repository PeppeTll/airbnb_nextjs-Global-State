import styles from "./index.module.scss";
import { createContext } from "react";

//Components
import Header from "../Header";
export const users = createContext([
	{
		id: "1",
		name: "Mario Rossi",
		email: "mario.rossi@example.com",
		password: "password123",
		address: "123 Main St",
		city: "Milan",
		country: "Italy",
		phone: "+39 1234567890",
		date_of_birth: "1985-01-15",
		language: "Italian",
		occupation: "Architect",
		interests: ["Travel", "Art", "Cooking"],
		reviews: [
			{
				property_id: "123",
				rating: 4,
				comment: "Great stay!",
			},
			{
				property_id: "456",
				rating: 5,
				comment: "Fantastic host!",
			},
		],
		preferences: {
			pets_allowed: true,
			smoking_allowed: false,
			wifi: true,
			parking: false,
		},
		payment: {
			method: "Credit Card",
			last_four: "1234",
			expiration: "12/25",
		},
		last_booking: {
			property_id: "789",
			check_in_date: "2023-06-30",
			check_out_date: "2023-07-07",
		},
		communication_preferences: {
			newsletter: true,
			promotions: true,
			surveys: false,
		},
	},
	{
		id: "2",
		name: "John Smith",
		email: "john.smith@example.com",
		password: "securepass",
		address: "456 Oak St",
		city: "New York",
		country: "United States",
		phone: "+1 555-123-4567",
		date_of_birth: "1990-05-03",
		language: "English",
		occupation: "Programmer",
		interests: ["Technology", "Music", "Sports"],
		reviews: [
			{
				property_id: "789",
				rating: 5,
				comment: "Amazing experience!",
			},
		],
		preferences: {
			pets_allowed: false,
			smoking_allowed: true,
			wifi: true,
			parking: true,
		},
		payment: {
			method: "PayPal",
			last_four: "5678",
			expiration: "08/24",
		},
		last_booking: {
			property_id: "123",
			check_in_date: "2023-07-10",
			check_out_date: "2023-07-15",
		},
		communication_preferences: {
			newsletter: false,
			promotions: true,
			surveys: true,
		},
	},
	{
		id: "3",
		name: "Emma Johnson",
		email: "emma.johnson@example.com",
		password: "emma123",
		address: "789 Elm St",
		city: "Los Angeles",
		country: "United States",
		phone: "+1 555-987-6543",
		date_of_birth: "1994-09-12",
		language: "English",
		occupation: "Teacher",
		interests: ["Reading", "Hiking", "Photography"],
		reviews: [
			{
				property_id: "987",
				rating: 4,
				comment: "Lovely place!",
			},
		],
		preferences: {
			pets_allowed: true,
			smoking_allowed: false,
			wifi: true,
			parking: true,
		},
		payment: {
			method: "Credit Card",
			last_four: "4321",
			expiration: "03/27",
		},
		last_booking: {
			property_id: "789",
			check_in_date: "2023-08-20",
			check_out_date: "2023-08-25",
		},
		communication_preferences: {
			newsletter: true,
			promotions: true,
			surveys: true,
		},
	},
]);

const Layout = ({ children }) => {
	return (
		<users.Provider value={users}>
			<div className={styles.Layout}>
				<Header />
				<div className={styles.Layout__children}>{children}</div>
				{/* <Footer /> */}
			</div>
		</users.Provider>
	);
};

export default Layout;
