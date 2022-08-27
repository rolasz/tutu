import "./UserForm.scss";

import CustomButton from "../../../../components/CustomButton/CustomButton";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
	const navigate = useNavigate();

	return (
		<div className="new-user__form">
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="username"
					label="Tên đăng nhập"
					defaultValue=""
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="password"
					label="Tên NCC"
					defaultValue=""
				/>
			</div>

			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="confirmPassword"
					label="Nhập lại mật khẩu"
					defaultValue=""
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="fullName"
					label="Họ và tên"
					defaultValue=""
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="phoneNumber"
					label="SĐT"
					defaultValue=""
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="address"
					label="Địa chỉ"
					multiline
					rows={4}
					defaultValue=""
				/>
			</div>

			<div className="actions">
				<CustomButton
					name="Quay lại"
					icon={<CancelIcon />}
					onClick={() => navigate("/admin/user")}
				/>
				<CustomButton name="Lưu thông tin" icon={<SaveIcon />} />
			</div>
		</div>
	);
};

export default UserForm;
