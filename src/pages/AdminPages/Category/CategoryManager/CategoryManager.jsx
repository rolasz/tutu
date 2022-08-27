import "./CategoryManager.scss";
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
import PageTitle from "../../../../components/PageTitle/PageTitle";
import CustomButton from "../../../../components/CustomButton/CustomButton";

import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import BuildIcon from "@mui/icons-material/Build";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useNavigate } from "react-router-dom";
import categories from "../../../../data/categories";
import { useState } from "react";

const CategoryManager = () => {
	const navigate = useNavigate();
	const [isOpenForm, setIsOpenForm] = useState(false);
	const [categoryId, setCategoryId] = useState("");
	const [categoryName, setCategoryName] = useState("");

	return (
		<div className="category-manager">
			<AdminHeader />
			<PageTitle name="Quản lý loại hàng" />
			<div className="feature">
				<CustomButton
					name="Thêm Loại Hàng"
					icon={<AddIcon />}
					onClick={() => navigate("/admin/category/new")}
				/>
			</div>

			<div className="categories-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Mã Loại</TableCell>
								<TableCell>Tên Loại</TableCell>
								<TableCell align="center">Sửa | Xóa</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{categories.map((row) => (
								<TableRow
									key={row.categoryId}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>{row.categoryId}</TableCell>
									<TableCell>{row.categoryName}</TableCell>
									<TableCell align="center">
										<div className="controls">
											<Tooltip title="Sửa loại hàng">
												<BuildIcon
													className="control-item"
													onClick={() => {
														setIsOpenForm(true);
														setCategoryId(
															row.categoryId
														);
														setCategoryName(
															row.categoryName
														);
													}}
												/>
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

			{isOpenForm && (
				<div className="form-change">
					<PageTitle name="Sửa thông tin" />
					<div className="form-control">
						<TextField
							color="warning"
							fullWidth
							id="categoryId"
							label="Mã loại hàng"
							value={categoryId}
						/>
					</div>
					<div className="form-control">
						<TextField
							color="warning"
							fullWidth
							id="category"
							label="Tên loại hàng"
							value={categoryName}
						/>
					</div>

					<div className="actions">
						<CustomButton
							name="Hủy"
							icon={<CancelIcon />}
							onClick={() => setIsOpenForm(false)}
						/>
						<CustomButton
							name="Lưu thông tin"
							icon={<SaveIcon />}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CategoryManager;
