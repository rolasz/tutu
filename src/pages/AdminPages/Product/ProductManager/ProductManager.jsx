import "./ProductManager.scss";

import CustomButton from "../../../../components/CustomButton/CustomButton";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

const ProductManager = () => {
	const navigate = useNavigate();

	return (
		<div className="product-manager">
			<AdminHeader />
			<PageTitle name="Quản lý sản phẩm" />
			{/* <div className="feature">
				<CustomButton
					name="Thêm Loại Hàng"
					icon={<AddIcon />}
					onClick={() => navigate("/admin/product/new")}
				/>
			</div> */}

			<Grid container spacing={2} className="container">
				<Grid item xs={6} className="left">
					<div className="field">
						<span>Nhà sản xuất</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value="Nhà Xuất Bản Trẻ"
						/>
					</div>
					<div className="field">
						<span>Tên sản phẩm</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value="Siêu trí nhớ học đường"
						/>
					</div>
					<div className="field">
						<span>Ngày xuất bản</span>
						<TextField
							type="date"
							variant="outlined"
							size="small"
							value="2020-06-01"
						/>
					</div>
					<div className="field">
						<span>Nhà cung cấp</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value="Comicola"
						/>
					</div>
					<div className="field">
						<span>Số lượng</span>
						<TextField
							type="number"
							variant="outlined"
							size="small"
							value="45"
						/>
					</div>
				</Grid>
				<Grid item xs={6} className="right">
					<div className="field">
						<span>Loại sản phẩm</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value="Tiểu thuyết"
						/>
					</div>
					<div className="field">
						<span>Ảnh minh họa</span>
						<img
							src="https://newshop.vn/public/uploads/products/41478/sieu-tri-nho-hoc-duong-tron-goi-3-cap.jpg"
							alt="book"
							className="field__img"
						/>
					</div>
					<div className="field">
						<span>Giá nhập</span>
						<TextField
							type="number"
							variant="outlined"
							size="small"
							value="259000"
						/>
					</div>
					<div className="field">
						<span>Số hóa đơn</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value="099843"
						/>
					</div>
					<div className="field">
						<span>Ghi chú</span>
						<TextField
							type="text"
							variant="outlined"
							size="small"
							value=""
						/>
					</div>
				</Grid>
			</Grid>

			<div className="actions">
				<CustomButton name="Nhập" />
				<CustomButton name="Lưu" />
				<CustomButton name="Xóa" />
				<CustomButton name="Làm mới" />
			</div>
		</div>
	);
};

export default ProductManager;
