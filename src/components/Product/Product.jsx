import "./Product.scss";

const Product = ({ productImage, productName, productPrice, onClick }) => {
	return (
		<div className="product" onClick={onClick}>
			<div className="product-image">
				<div className="box"></div>
				<img
					width="220"
					height="310"
					src={productImage}
					alt="product"
				/>
			</div>
			<div className="product-content">
				<h4 className="product-name">{productName}</h4>
				<div className="product-price">
					<div className="desc">Giá bán</div>
					<div className="new-price">{productPrice} đ</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
