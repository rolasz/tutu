import "./Login.scss";
import BottomNav from "../../components/BottomNav/BottomNav";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, TextField } from "@mui/material";

import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/user-context";
import swal from "sweetalert";
import { users } from "../../data/users";

const validate = (values) => {
	const errors = {};
	const fields = ["username", "password"];

	for (const field of fields) {
		if (!values[field]) {
			errors[field] = "Không được để trống trường này!";
		}
	}

	return errors;
};

const Login = () => {
	const ctx = useContext(UserContext);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validate,
		onSubmit: async (values) => {
			const { username, password } = values;
			console.log({ username, password });
			try {
				// const response = await userApi.getAll();
				// const users = response.data || [];
				console.log(users);

				const [user] = users.filter(
					(user) =>
						user.username === username && user.password === password
				);

				if (user) {
					const { username, email, phoneNumber, fullName, address } =
						user;
					ctx.setIsLoggedIn(true);
					ctx.setUsername(username);
					ctx.setEmail(email);
					ctx.setPhoneNumber(phoneNumber);
					ctx.setFullName(fullName);
					ctx.setAddress(address);

					navigate("/user");
					swal("Thành công!", "Đăng nhập thành công.", "success");
				} else {
					swal("Lỗi", "Thông tin đăng nhập không chính xác", "error");
				}
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<div>
			<Header />

			<div className="login">
				<form onSubmit={formik.handleSubmit} className="login-form">
					<PageTitle name="Đăng Nhập" />
					<div className="form-controls">
						<TextField
							id="username"
							name="username"
							label="Tên đăng nhập"
							type="text"
							fullWidth
							onChange={formik.handleChange}
							value={formik.values.username}
							error={!!formik.errors.username}
							helperText={formik.errors.username || ""}
						/>
						<TextField
							id="password"
							name="password"
							label="Mật khẩu"
							type="password"
							fullWidth
							onChange={formik.handleChange}
							value={formik.values.password}
							error={!!formik.errors.password}
							helperText={formik.errors.password || ""}
						/>
					</div>
					<Button type="submit" variant="contained">
						Submit
					</Button>
				</form>
			</div>

			<BottomNav />
		</div>
	);
};

export default Login;
