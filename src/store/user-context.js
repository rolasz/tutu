import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				username,
				fullName,
				email,
				phoneNumber,
				address,
				setIsLoggedIn,
				setUsername,
				setFullName,
				setEmail,
				setPhoneNumber,
				setAddress,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};
