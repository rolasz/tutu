import "./SupplierManager.scss";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
} from "@mui/material";

import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import CustomButton from "../../../../components/CustomButton/CustomButton";

import AddIcon from "@mui/icons-material/Add";
import BuildIcon from "@mui/icons-material/Build";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useNavigate } from "react-router-dom";
import suppliers from "../../../../data/suppliers";

const SupplierManager = () => {
	const navigate = useNavigate();

	return (
		<div className="category-manager">
			<AdminHeader />
			<PageTitle name="Quản Lý Nhà Cung Cấp" />
			<div className="feature">
				<CustomButton
					name="Thêm Nhà Cung Cấp"
					icon={<AddIcon />}
					onClick={() => navigate("/admin/supplier/new")}
				/>
			</div>

			<div className="categories-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Mã NCC</TableCell>
								<TableCell>Tên NCC</TableCell>
								<TableCell>Địa chỉ</TableCell>
								<TableCell>Số điện thoại</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Mô tả</TableCell>
								<TableCell align="center">Sửa | Xóa</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{suppliers.map((row) => (
								<TableRow
									key={row.supplierId}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>{row.supplierId}</TableCell>
									<TableCell>{row.supplierName}</TableCell>
									<TableCell>{row.supplierAddress}</TableCell>
									<TableCell>{row.supplierPhone}</TableCell>
									<TableCell>{row.supplierEmail}</TableCell>
									<TableCell>{row.supplierDesc}</TableCell>
									<TableCell align="center">
										<div className="controls">
											<Tooltip title="Sửa nhà cung cấp">
												<BuildIcon
													className="control-item"
													onClick={() =>
														navigate(
															`/admin/supplier/${row.supplierId}`
														)
													}
												/>
											</Tooltip>
											<Tooltip title="Xóa nhà cung cấp">
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

export default SupplierManager;
