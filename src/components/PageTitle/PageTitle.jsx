import { Typography } from "@mui/material";
import "./PageTitle.scss";

const PageTitle = ({ name, icon }) => {
	return (
		<div className="page-top">
			<Typography variant="h4" className="page-title">
				{name}
			</Typography>
			<div className="page-wrapper">{icon}</div>
		</div>
	);
};

export default PageTitle;
