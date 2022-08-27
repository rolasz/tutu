import { FormControl, Input, InputLabel } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./UserInformation.scss";

import Header from "../../components/Header/Header";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import BottomNav from "../../components/BottomNav/BottomNav";
import PageTitle from "../../components/PageTitle/PageTitle";
import CustomButton from "../../components/CustomButton/CustomButton";

import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const UserInformation = ({ isAdmin = false }) => {
	const ctx = useContext(UserContext);

	return (
		<div>
			{isAdmin ? <AdminHeader /> : <Header />}
			<div className="containner">
				<PageTitle
					name="Thông tin tài khoản"
					icon={<ContactMailIcon sx={{ fontSize: 50 }} />}
				/>

				<form className="form">
					<FormControl variant="standard">
						<InputLabel htmlFor="nameInput">Họ tên</InputLabel>
						<Input value={ctx.fullName} fullWidth />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="nameInput">
							Tên tài khoản
						</InputLabel>
						<Input value={ctx.username} fullWidth />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="nameInput">Địa chỉ</InputLabel>
						<Input value={ctx.address} fullWidth />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="nameInput">
							Số điện thoại
						</InputLabel>
						<Input value={ctx.phoneNumber} fullWidth />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="nameInput">Email</InputLabel>
						<Input value={ctx.email} fullWidth />
					</FormControl>

					<div className="buttons">
						<CustomButton name="Chỉnh sửa thông tin" />
						<CustomButton name="Đổi mật khẩu" />
					</div>
				</form>
			</div>

			{isAdmin || <BottomNav />}
		</div>
	);
};

export default UserInformation;
