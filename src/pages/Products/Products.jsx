import React, { useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import Product from "../../components/Product/Product";

import "./Products.scss";
import { useNavigate } from "react-router-dom";
import data from "../../data/products";

const Products = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState(data || []);

	// useEffect(() => {
	// }, []);

	return (
		<div className="products">
			<Header />

			<PageTitle name="Danh sách sản phẩm" />

			<div className="products-wrapper">
				{products.map((product) => (
					<Product
						key={product.id}
						onClick={() => navigate(`/products/${product.id}`)}
						productName={product.productName}
						productImage={product.productImage}
						productPrice={product.productPrice}
					/>
				))}
			</div>

			<BottomNav />
		</div>
	);
};

export default Products;
