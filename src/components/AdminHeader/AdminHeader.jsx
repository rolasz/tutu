import "./AdminHeader.scss";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";

import CategoryIcon from "@mui/icons-material/Category";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";

const AdminHeader = () => {
	const ctx = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<div className="header">
			<div className="left">
				<div className="logo">
					<MenuBookIcon /> Book Store
				</div>
				<Link to="/admin/supplier">
					<div className="item">
						<StoreIcon /> Nhà cung cấp
					</div>
				</Link>
				<Link to="/admin/category">
					<div className="item">
						<CategoryIcon /> Loại hàng
					</div>
				</Link>
				<Link to="/admin/product">
					<div className="item">
						<FilterFramesIcon /> Sản phẩm
					</div>
				</Link>
				<Link to="/admin/order">
					<div className="item">
						<CardTravelIcon /> Đơn hàng
					</div>
				</Link>
				<Link to="/admin/user">
					<div className="item">
						<AccountCircleIcon /> Người dùng
					</div>
				</Link>
			</div>
			<div className="right">
				{true ? (
					<>
						<div
							className="item"
							onClick={() => navigate("/admin")}
						>
							Hello Admin
						</div>
						<div
							className="item"
							onClick={() => {
								ctx.setIsLoggedIn(false);
								navigate("/login");
							}}
						>
							<LogoutIcon />
							Đăng xuất
						</div>
					</>
				) : (
					<>
						<div
							className="item"
							onClick={() => navigate("/login")}
						>
							<LockIcon />
							Đăng nhập
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AdminHeader;
