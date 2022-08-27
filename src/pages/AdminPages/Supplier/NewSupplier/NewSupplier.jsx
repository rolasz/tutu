import "./NewSupplier.scss";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import SupplierForm from "../SupplierForm/SupplierForm";

const NewSupplier = () => {
	

	return (
		<div className="new-supplier">
			<AdminHeader />
			<PageTitle name="Thêm Nhà Cung Cấp" />
			<SupplierForm />
		</div>
	);
};

export default NewSupplier;
