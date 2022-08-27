import "./SupplierForm.scss";

import CustomButton from "../../../../components/CustomButton/CustomButton";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const SupplierForm = ({
	supplierId,
	supplierName,
	supplierAddress,
	supplierPhone,
	supplierEmail,
	supplierDesc,
}) => {
	const navigate = useNavigate();

	return (
		<div className="new-supplier__form">
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierId"
					label="Mã NCC"
					defaultValue={supplierId || ""}
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierName"
					label="Tên NCC"
					defaultValue={supplierName || ""}
				/>
			</div>

			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierAddress"
					label="Địa chỉ"
					defaultValue={supplierAddress || ""}
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierPhone"
					label="Số điện thoại"
					defaultValue={supplierPhone || ""}
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierEmail"
					label="Email"
					defaultValue={supplierEmail || ""}
				/>
			</div>
			<div className="form-control">
				<TextField
					color="warning"
					fullWidth
					id="supplierDesc"
					label="Mô tả"
					multiline
					rows={4}
					defaultValue={supplierDesc || ""}
				/>
			</div>

			<div className="actions">
				<CustomButton
					name="Quay lại"
					icon={<CancelIcon />}
					onClick={() => navigate("/admin/supplier")}
				/>
				<CustomButton name="Lưu thông tin" icon={<SaveIcon />} />
			</div>
		</div>
	);
};

export default SupplierForm;
