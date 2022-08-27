import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Orders from "./pages/Orders/Orders";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import Promotion from "./pages/Promotion/Promotion";
import Register from "./pages/Register/Register";
import UserInformation from "./pages/UserInformation/UserInformation";

import CategoryManager from "./pages/AdminPages/Category/CategoryManager/CategoryManager";
import NewCategory from "./pages/AdminPages/Category/NewCategory/NewCategory";
import SupplierManager from "./pages/AdminPages/Supplier/SupplierManager/SupplierManager";
import NewSupplier from "./pages/AdminPages/Supplier/NewSupplier/NewSupplier";
import SupplierUpdate from "./pages/AdminPages/Supplier/SupplierUpdate/SupplierUpdate";
import ProductManager from "./pages/AdminPages/Product/ProductManager/ProductManager";

import { UserContext } from "./store/user-context";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserManager from "./pages/AdminPages/User/UserManager/UserManager";
import NewUser from "./pages/AdminPages/User/NewUser/NewUser";
import OrderManager from "./pages/AdminPages/Order/OrderManager/OrderManager";
import OrderStatus from "./pages/AdminPages/Order/OrderStatus/OrderStatus";

function App() {
	const ctx = useContext(UserContext);

	return (
		<Routes>
			<Route path="/">
				<Route index element={<Products />} />
				<Route path="promotion" element={<Promotion />} />
				<Route path="cart" element={<Cart />} />

				<Route path="products">
					<Route index element={<Products />} />
					<Route path=":productId" element={<ProductDetail />} />
				</Route>

				<Route path="admin">
					<Route index element={<UserInformation isAdmin={true} />} />
					<Route path="supplier">
						<Route index element={<SupplierManager />} />
						<Route path="new" element={<NewSupplier />} />
						<Route
							path=":supplierId"
							element={<SupplierUpdate />}
						/>
					</Route>
					<Route path="category">
						<Route index element={<CategoryManager />} />
						<Route path="new" element={<NewCategory />} />
					</Route>
					<Route path="product">
						<Route index element={<ProductManager />} />
					</Route>
					<Route path="order">
						<Route index element={<OrderManager />} />
						<Route path=":orderId" element={<OrderStatus />} />
					</Route>
					<Route path="user">
						<Route index element={<UserManager />} />
						<Route path="new" element={<NewUser />} />
					</Route>
				</Route>

				{ctx.isLoggedIn && (
					<Route path="user">
						<Route index element={<UserInformation />} />
						<Route path="manage">
							<Route index element={<Orders />} />
							<Route path="info" element={<UserInformation />} />
							<Route path="orders" element={<Orders />} />
							<Route
								path="order-history"
								element={<OrderHistory />}
							/>
						</Route>
					</Route>
				)}
				{ctx.isLoggedIn || <Route path="login" element={<Login />} />}
				{ctx.isLoggedIn || (
					<Route path="register" element={<Register />} />
				)}
			</Route>
		</Routes>
	);
}

export default App;
