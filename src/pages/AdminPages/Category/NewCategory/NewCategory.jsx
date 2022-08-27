import "./NewCategory.scss";

import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import CustomButton from "../../../../components/CustomButton/CustomButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
	const navigate = useNavigate();

	return (
		<div className="new-category">
			<AdminHeader />
			<PageTitle name="Thêm Loại Hàng" />
			<div className="new-category__form">
				<div className="form-control">
					<TextField
						color="warning"
						fullWidth
						id="categoryId"
						label="Mã loại hàng"
					/>
				</div>
				<div className="form-control">
					<TextField
						color="warning"
						fullWidth
						id="category"
						label="Tên loại hàng"
					/>
				</div>

				<div className="actions">
					<CustomButton
						name="Hủy"
						icon={<CancelIcon />}
						onClick={() => navigate("/admin/category")}
					/>
					<CustomButton name="Lưu thông tin" icon={<SaveIcon />} />
				</div>
				{/* <FormControl fullWidth>
					<InputLabel id="category-select-label">
						Chọn loại hàng
					</InputLabel>
					<Select
						labelId="category-select-label"
						id="category-select"
						value={category}
						label="Chọn loại hàng"
						onChange={(e) => setCategory(e.target.value)}
					>
						{categories.map((category) => (
							<MenuItem
								key={category.categoryId}
								value={category.categoryId}
							>
								{category.categoryName}
							</MenuItem>
						))}
					</Select>
				</FormControl> */}
			</div>
		</div>
	);
};

export default NewCategory;
