import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import UserForm from "../UserForm/UserForm";

const NewUser = () => {
	return <div>
        <AdminHeader />
        <PageTitle name="Thêm người dùng"/>
        <UserForm />
    </div>;
};

export default NewUser;
