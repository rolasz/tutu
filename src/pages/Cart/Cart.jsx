import "./Cart.scss";

import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import PageTitle from "../../components/PageTitle/PageTitle";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const Cart = () => {
	const cartCtx = useContext(CartContext);
	const navigate = useNavigate();

	return (
		<div className="cart">
			<Header />

			<PageTitle
				name="Giỏ hàng"
				icon={<ShoppingCartIcon sx={{ fontSize: 50 }} />}
			/>

			<div className="cart-table">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Sản phẩm</TableCell>
								<TableCell align="center">
									Tên sản phẩm
								</TableCell>
								<TableCell align="center">
									Đơn vị tính
								</TableCell>
								<TableCell align="center">Số lượng</TableCell>
								<TableCell align="center">Thành tiền</TableCell>
								<TableCell align="center">Xóa</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{cartCtx.cartItems.map((row, index) => (
								<TableRow
									key={index}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell align="center">
										<img
											src={row.productImage}
											width="70"
											alt="book"
										/>
									</TableCell>
									<TableCell align="center">
										{row.productName}
									</TableCell>
									<TableCell align="center">
										{row.productUnit}
									</TableCell>
									<TableCell align="center">
										{row.quantity}
									</TableCell>
									<TableCell align="center">
										{row.subTotal}
									</TableCell>
									<TableCell align="center">
										<Tooltip title="Xóa sản phẩm này khỏi giỏ hàng">
											<DeleteForeverIcon
												className="cart-table__delete"
												onClick={() =>
													cartCtx.removeItemFromCart(
														row.id
													)
												}
											/>
										</Tooltip>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>

			<div className="cart-buttons">
				<button className="btn" onClick={() => navigate("/products")}>
					Tiếp tục mua hàng
				</button>
				<button className="btn">Đặt hàng</button>
				<button className="btn" onClick={() => cartCtx.clearCart()}>
					Xóa giỏ hàng
				</button>
			</div>

			<BottomNav />
		</div>
	);
};

export default Cart;
