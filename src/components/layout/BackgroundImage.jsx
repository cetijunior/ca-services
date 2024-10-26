// src/components/BackgroundImage.jsx
import React from 'react';

const BackgroundImage = ({ imageUrl, styles }) => {
	return (
		<div
			className="absolute inset-0"
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center right',
				borderTopRightRadius: "30%",
				borderTopLeftRadius: "90%",
				borderBottomLeftRadius: "10%",
				...styles,
			}}
		>
			{/* Optional overlay for darkening or other effects */}

		</div>
	);
};

export default BackgroundImage;
