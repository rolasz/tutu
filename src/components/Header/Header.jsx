import "./Header.scss";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const ctx = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<div className="header">
			<div className="left">
				<div className="logo">
					<MenuBookIcon /> Book Store
				</div>
				<div className="search">
					<SearchIcon />
					<input type="search" placeholder="search..." />
				</div>
			</div>
			<div className="right">
				<Link to="/promotion">
					<div className="item">
						<CardGiftcardIcon />
						Chương trình <br /> khuyến mãi
					</div>
				</Link>

				{ctx.isLoggedIn && (
					<>
						<Link to="/user">
							<div className="item">
								<PersonIcon />
								Xin chào <br /> {ctx.username}
							</div>
						</Link>
						<Link to="/user/manage/orders">
							<div className="item">
								<LocalShippingIcon />
								Kiểm tra <br /> đơn hàng
							</div>
						</Link>
					</>
				)}

				<Link to="/cart">
					<div className="item">
						<ShoppingCartIcon />
						Giỏ hàng
					</div>
				</Link>

				{ctx.isLoggedIn ? (
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
				) : (
					<>
						<div
							className="item"
							onClick={() => navigate("/register")}
						>
							<PersonAddAltIcon />
							Đăng ký
						</div>
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

export default Header;
