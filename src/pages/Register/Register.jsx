import "./Register.scss";

import { Button, Grid, TextField } from "@mui/material";
import BottomNav from "../../components/BottomNav/BottomNav";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";

import { useFormik } from "formik";

const validate = (values) => {
	const errors = {};
	const fields = [
		"username",
		"fullName",
		"phoneNumber",
		"email",
		"password",
		"confirmPassword",
		"address",
	];

	for (const field of fields) {
		if (!values[field]) {
			errors[field] = "Không được để trống trường này!";
		}
	}

	if (values.password !== values.confirmPassword) {
		errors.password = "Nhập lại mật khẩu không khớp!";
		errors.confirmPassword = "Nhập lại mật khẩu không khớp!";
	}

	return errors;
};

const Register = () => {
	const formik = useFormik({
		initialValues: {
			username: "",
			fullName: "",
			phoneNumber: "",
			email: "",
			password: "",
			confirmPassword: "",
			address: "",
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			// localStorage.setItem("users", JSON.stringify(values));
		},
	});

	return (
		<div>
			<Header />

			<div className="register">
				<form onSubmit={formik.handleSubmit} className="register-form">
					<PageTitle name="Đăng Ký" />

					<div className="form-controls">
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									id="username"
									name="username"
									label="Tên đăng nhập"
									type="text"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.username}
									error={!!formik.errors.username}
									helperText={formik.errors.username || null}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									id="fullName"
									name="fullName"
									label="Họ tên"
									type="text"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.fullName}
									error={!!formik.errors.fullName}
									helperText={formik.errors.fullName || null}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									id="email"
									name="email"
									label="Email"
									fullWidth
									type="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									error={!!formik.errors.email}
									helperText={formik.errors.email || null}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="phoneNumber"
									name="phoneNumber"
									label="Số điện thoại"
									type="number"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.phoneNumber}
									error={!!formik.errors.phoneNumber}
									helperText={
										formik.errors.phoneNumber || null
									}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="password"
									name="password"
									label="Mật khẩu"
									type="password"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.password}
									error={!!formik.errors.password}
									helperText={formik.errors.password || null}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="confirmPassword"
									name="confirmPassword"
									label="Nhập lại mật khẩu"
									type="password"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.confirmPassword}
									error={!!formik.errors.confirmPassword}
									helperText={
										formik.errors.confirmPassword || null
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="address"
									name="address"
									label="Địa chỉ"
									type="text"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.address}
									error={!!formik.errors.address}
									helperText={formik.errors.address || null}
								/>
							</Grid>
						</Grid>

						<Button type="submit" variant="contained">
							Submit
						</Button>
					</div>
				</form>
			</div>

			<BottomNav />
		</div>
	);
};

export default Register;
