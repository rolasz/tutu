import "./Promotion.scss";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BottomNav from "../../components/BottomNav/BottomNav";
import Product from "../../components/Product/Product";

import { useNavigate } from "react-router-dom";
import products from "../../data/products";

const Promotion = () => {
    const navigate = useNavigate();
    
	return (
		<div className="promotion">
			<Header />
			<PageTitle
				name="Danh sách sản phẩm khuyến mãi"
				icon={<CardGiftcardIcon sx={{ fontSize: 50 }} />}
			/>

			<div className="promotion-products">
				{products.slice(0, 3).map((product) => (
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

export default Promotion;
