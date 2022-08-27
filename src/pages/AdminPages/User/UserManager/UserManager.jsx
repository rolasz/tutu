import "./UserManager.scss";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	TextField,
} from "@mui/material";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import PageTitle from "../../../../components/PageTitle/PageTitle";

import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useNavigate } from "react-router-dom";
import categories from "../../../../data/categories";
import { activeUsers, lockedUsers } from "../../../../data/usersActivity";

const UserManager = () => {
	const navigate = useNavigate();

	return (
		<div className="user-manager">
			<AdminHeader />
			<PageTitle name="Quản lý người dùng" />
			<div className="feature">
				<h2 className="title">Đang hoạt động</h2>
				<CustomButton
					name="Thêm nguời dùng mới"
					icon={<AddIcon />}
					onClick={() => navigate("/admin/user/new")}
				/>
			</div>

			<div className="user-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Tên đăng nhập</TableCell>
								<TableCell>Loại tài khoản</TableCell>
								<TableCell>Họ & Tên</TableCell>
								<TableCell>SĐT</TableCell>
								<TableCell>Địa chỉ</TableCell>
								<TableCell align="center">Sửa | Xóa</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{activeUsers.map((row) => (
								<TableRow
									key={row.categoryId}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>{row.username}</TableCell>
									<TableCell>{row.role}</TableCell>
									<TableCell>{row.fullName}</TableCell>
									<TableCell>{row.phoneNumber}</TableCell>
									<TableCell>{row.address}</TableCell>
									<TableCell align="center">
										<div className="controls">
											<Tooltip title="Sửa loại hàng">
												<RemoveRedEyeIcon className="control-item" />
											</Tooltip>
											<Tooltip title="Xóa loại hàng">
												<DeleteForeverIcon className="control-item" />
											</Tooltip>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>

			<h2 className="title">Đã bị khóa</h2>
			<div className="user-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Tên đăng nhập</TableCell>
								<TableCell>Loại tài khoản</TableCell>
								<TableCell>Họ & Tên</TableCell>
								<TableCell>SĐT</TableCell>
								<TableCell>Địa chỉ</TableCell>
								<TableCell align="center">Sửa | Xóa</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{lockedUsers.map((row) => (
								<TableRow
									key={row.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>{row.username}</TableCell>
									<TableCell>{row.role}</TableCell>
									<TableCell>{row.fullName}</TableCell>
									<TableCell>{row.phoneNumber}</TableCell>
									<TableCell>{row.address}</TableCell>
									<TableCell align="center">
										<div className="controls">
											<Tooltip title="Sửa loại hàng">
												<RemoveRedEyeIcon className="control-item" />
											</Tooltip>
											<Tooltip title="Xóa loại hàng">
												<DeleteForeverIcon className="control-item" />
											</Tooltip>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default UserManager;
