import "./OrderManager.scss";

import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { useState } from "react";

import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Widget from "../../../../components/Widget/Widget";
import data from "../../../../data/orderManager";

const OrderManager = () => {
	const [orders, setOrders] = useState(data || []);
	const [currentFilter, setCurrentFilter] = useState("all");

	const filterHandler = (status = "pending") => {
		const filteredOrders = data.filter(
			(order) => order.orderStatus === status
		);
		setCurrentFilter(status);
		setOrders(filteredOrders || []);
	};

	return (
		<div>
			<AdminHeader />

			<PageTitle
				name="Quản Lý Đơn Hàng"
				icon={<LocalShippingIcon sx={{ fontSize: 50 }} />}
			/>

			<div className="widgets">
				<Widget
					isActive={currentFilter === "all"}
					onClick={() => {
						setOrders(data || []);
						setCurrentFilter("all");
					}}
					title="Tất Cả"
				/>
				<Widget
					isActive={currentFilter === "pending"}
					onClick={() => filterHandler("pending")}
					title="Đơn chờ xác nhận"
				/>
				<Widget
					isActive={currentFilter === "confirmed"}
					onClick={() => filterHandler("confirmed")}
					title="Đơn đã xác nhận"
				/>
				<Widget
					isActive={currentFilter === "delivery"}
					onClick={() => filterHandler("delivery")}
					title="Đơn đang giao"
				/>
				<Widget
					isActive={currentFilter === "completed"}
					onClick={() => filterHandler("completed")}
					title="Đơn đã giao"
				/>
				<Widget
					isActive={currentFilter === "canceled"}
					onClick={() => filterHandler("canceled")}
					title="Đơn hủy"
				/>
			</div>

			<div className="orders-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Mã Đơn</TableCell>
								<TableCell>Mã KH</TableCell>
								<TableCell>Tên KH</TableCell>
								<TableCell>Ngày Đặt Hàng</TableCell>
								<TableCell>Ghi Chú</TableCell>
								<TableCell>Trạng thái</TableCell>
								<TableCell>Tổng Tiền</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((row) => (
								<TableRow
									key={row.orderId}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>
										{row.orderId}
									</TableCell>
									<TableCell>{row.userId}</TableCell>
									<TableCell align="left">
										{row.fullName}
									</TableCell>
									<TableCell align="left">
										{row.orderDate}
									</TableCell>
									<TableCell align="left">
										{row.note}
									</TableCell>
									<TableCell align="left">
										{row.status}
									</TableCell>
									<TableCell align="left">
										{row.total} đ
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

export default OrderManager;
