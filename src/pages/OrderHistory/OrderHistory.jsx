import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Header from "../../components/Header/Header";
import "./OrderHistory.scss";

import orderHistory from "../../data/orderHistory";
import BottomNav from "../../components/BottomNav/BottomNav";

const OrderHistory = () => {
	return (
		<div>
			<Header />
			<Typography
				variant="h4"
				sx={{ textAlign: "center", color: "orange", margin: 3 }}
			>
				Quản Lý Đặt Hàng
			</Typography>

			<div className="orders-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Mã Đơn</TableCell>
								<TableCell align="center">Mã Hàng</TableCell>
								<TableCell align="center">Tên SP</TableCell>
								<TableCell align="center">
									Ngày Đặt Hàng
								</TableCell>
								<TableCell align="center">Trạng Thái</TableCell>
								<TableCell align="center">Tổng Tiền</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orderHistory.map((row) => (
								<TableRow
									key={row.billId}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell align="center">
										<img
											src={row.productImage}
											width="200"
											alt="book"
										/>
									</TableCell>
									<TableCell align="center">
										{row.productName}
									</TableCell>
									<TableCell align="center">
										{row.unit}
									</TableCell>
									<TableCell align="center">
										{row.quantity}
									</TableCell>
									<TableCell align="center">
										{row.unitPrice}
									</TableCell>
									<TableCell align="center">
										{row.total}
									</TableCell>
								</TableRow>
							))}

							<TableRow>
								<TableCell rowSpan={6} />
								<TableCell colSpan={5} align="right">
									Tổng tiền
								</TableCell>
								<TableCell align="center">378000 đ</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>

			<BottomNav />
		</div>
	);
};

export default OrderHistory;
