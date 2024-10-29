import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => {
				setUserData(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching user data:', error);
				setLoading(false);
			});
	}, [userData]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>{userData.name}</h2>
			<p>Email: {userData.email}</p>
			<p>Phone: {userData.phone}</p>
			<p>Website: {userData.website}</p>
		</div>
	);
};

export default UserProfile;
