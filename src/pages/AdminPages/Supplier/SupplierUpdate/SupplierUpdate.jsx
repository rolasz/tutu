import "./SupplierUpdate.scss";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import SupplierForm from "../SupplierForm/SupplierForm";

import { useParams } from "react-router-dom";
import suppliers from "../../../../data/suppliers";

const SupplierUpdate = () => {
	const { supplierId } = useParams();
	const supplier = suppliers.find((supplier) => supplier.supplierId === supplierId);
	const {
		supplierName,
		supplierAddress,
		supplierPhone,
		supplierEmail,
		supplierDesc,
	} = supplier;

	return (
		<div className="new-supplier">
			<AdminHeader />
			<PageTitle name="Thêm Nhà Cung Cấp" />
			<SupplierForm
				supplierId={supplierId}
				supplierName={supplierName}
				supplierAddress={supplierAddress}
				supplierPhone={supplierPhone}
				supplierEmail={supplierEmail}
				supplierDesc={supplierDesc}
			/>
		</div>
	);
};

export default SupplierUpdate;
