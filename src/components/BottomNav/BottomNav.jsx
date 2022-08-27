import "./BottomNav.scss";

import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const BottomNav = () => {
	return (
		<div className="bottom-nav">
			<div className="items">
				<Link to="/">
					<Tooltip title="Trở về trang chủ">
						<div className="item">Trang chủ</div>
					</Tooltip>
				</Link>
				
				<Tooltip title="Hướng dẫn mua sách">
					<div className="item">Hướng dẫn</div>
				</Tooltip>
				<Tooltip title="Chính sách và điều khoản">
					<div className="item">Chính sách</div>
				</Tooltip>
				<Tooltip title="Thông tin về shop">
					<div className="item">Về chúng tôi</div>
				</Tooltip>
			</div>
		</div>
	);
};

export default BottomNav;
