import { useState } from "react";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";
import {useNavigate} from "react-router-dom";

const Info = () => {

    const h4Style = {
        fontSize: "0.8rem",
        margin: "18px",
        color: "#808080"
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("가입 정보:", {email, password, name, nickName});
    };

    const handleAgreeTermsClick = () => {
        navigate("/terms"); // 약관 페이지로 이동
    };

    const handleButtonClick = () => {
        handleSubmit();
        handleAgreeTermsClick();
    };

    return(
        <div>
            <Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Input
                type="text"
                placeholder="성명"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Input
                type="text"
                placeholder="사용자 이름"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
            />

            <h4 style={h4Style}>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Snapgram에 업로드 했을 수 있습니다. </h4>

            <Button text="가입" onClick= {handleButtonClick} />
        </div>
    );
};


export default Info;