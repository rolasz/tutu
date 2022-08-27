import "./Orders.scss";

import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";
import BottomNav from "../../components/BottomNav/BottomNav";
import PageTitle from "../../components/PageTitle/PageTitle";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { useState } from "react";
import data from "../../data/orders";

const Orders = () => {
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
			<Header />

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
								<TableCell align="center">Mã Đơn</TableCell>
								<TableCell>Mã Hàng</TableCell>
								<TableCell>Tên SP</TableCell>
								<TableCell>Ngày Đặt Hàng</TableCell>
								<TableCell>Trạng Thái</TableCell>
								<TableCell>Tổng Tiền</TableCell>
								<TableCell>Ghi Chú</TableCell>
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
									<TableCell align="center">
										{row.orderId}
									</TableCell>
									<TableCell>{row.productId}</TableCell>
									<TableCell align="left">
										{row.productName}
									</TableCell>
									<TableCell align="left">
										{row.orderCreationDay}
									</TableCell>
									<TableCell align="left">
										{row.orderStatusName}
									</TableCell>
									<TableCell align="left">
										{row.total}
									</TableCell>
									<TableCell align="left">
										{row.orderNote}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>

			<BottomNav />
		</div>
	);
};

export default Orders;
