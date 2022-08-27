import "./ProductDetail.scss";

import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import PageTitle from "../../components/PageTitle/PageTitle";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Alert, Snackbar } from "@mui/material";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../store/cart-context";
import products from "../../data/products";

const ProductDetail = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const ctx = useContext(CartContext);
	const [product, setProduct] = useState();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const data = products.find((product) => product.id === +productId);
		setProduct(data);
	}, [productId]);

	const addProductToCartHandler = (productId) => {
		const product = products.find((product) => product.id === productId);

		if (product) {
			ctx.addItemToCart(product);
			setOpen(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<div className="product-detail">
			<Header />

			<PageTitle name="Chi tiết sản phẩm" />

			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					Thêm sản phẩm vào giỏ hàng thành công!
				</Alert>
			</Snackbar>

			{product && (
				<div className="wrapper">
					<div className="left">
						<img
							width="330"
							height="464"
							src={product.productImage}
							alt="product"
						/>
					</div>
					<div className="right">
						<div className="content">
							<h4 className="title">{product.productName}</h4>
							<p className="description">
								{product.productDescription}
							</p>

							<div>
								<div className="info">
									<BookmarkIcon className="icon" />
									Đã bán:
									<div className="sold">152</div>
								</div>
							</div>

							<div>
								<div className="info">
									<LocalAtmIcon className="icon" />
									Giá cũ:
									<div className="old-price">249000 đ</div>
								</div>
							</div>

							<div>
								<div className="info">
									<LocalAtmIcon className="icon" />
									Giá khuyến mãi:
									<div className="new-price">
										{product.productPrice} đ
									</div>
								</div>
							</div>
						</div>

						<div className="buttons">
							<div className="btn">
								<CreditCardIcon className="btn-icon" />
								<div className="text">Mua ngay</div>
							</div>
							<div
								className="btn"
								onClick={() =>
									addProductToCartHandler(product.id)
								}
							>
								<AddShoppingCartIcon className="btn-icon" />
								<div className="text">Thêm vào giỏ hàng</div>
							</div>
							<div
								className="btn"
								onClick={() => navigate("/products")}
							>
								<ArrowRightIcon className="btn-icon" />
								<div className="text">Tiếp tục mua hàng</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<BottomNav />
		</div>
	);
};

export default ProductDetail;
