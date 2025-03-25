import "./RegisterPage.css";
import Header from "../register/Header.jsx";
import Info from "../register/Info.jsx";
const RegisterPage = () => {

    return(
        <div className="register-page">
            <Header />
            <div className="info-container">
                <Info />
            </div>
        </div>
    );
}

export default RegisterPage;