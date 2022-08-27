import "./CustomButton.scss";

const CustomButton = ({ name, icon, onClick }) => {
	return (
		<div className="btn-custom" onClick={onClick}>
			<div className="btn-icon">{icon}</div>
			<div className="text">{name}</div>
		</div>
	);
};

export default CustomButton;
