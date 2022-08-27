import "./Widget.scss";

const Widget = ({ isActive, title, onClick }) => {
	return (
		<div className={`widget ${isActive && "active"}`} onClick={onClick}>
			{title}
		</div>
	);
};

export default Widget;
