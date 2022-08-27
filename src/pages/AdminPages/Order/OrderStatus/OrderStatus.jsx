import "./OrderStatus.scss";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";

const OrderStatus = () => {
	return (
		<div className="order-status">
			<AdminHeader />
            <PageTitle name="Trạng thái đơn hàng" />
            
		</div>
	);
};

export default OrderStatus;
