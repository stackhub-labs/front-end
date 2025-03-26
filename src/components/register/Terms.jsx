import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckboxChecked from "../../assets/checked.svg";
import CheckboxUnChecked from "../../assets/unchecked.svg";
import Button from "../common/Button";

const Terms = () => {
    const navigate = useNavigate();
    const [checkedItems, setCheckedItems] = useState({
        all: false,
        terms: false,
        data: false,
        location: false,
    });

    // 개별 체크박스 토글
    const toggleCheckbox = (key) => {
        const updatedCheckedItems = { ...checkedItems, [key]: !checkedItems[key] };

        // 모든 항목 체크 시 "전체 동의"도 체크
        updatedCheckedItems.all =
            updatedCheckedItems.terms && updatedCheckedItems.data && updatedCheckedItems.location;

        setCheckedItems(updatedCheckedItems);
    };

    // "전체 동의" 체크 시 모든 항목 선택
    const toggleAll = () => {
        const newState = !checkedItems.all;
        setCheckedItems({
            all: newState,
            terms: newState,
            data: newState,
            location: newState,
        });
    };

    // 다음 버튼 클릭 시 모든 필수 약관 체크 확인
    const nextButtonClick = () => {
        if (checkedItems.terms && checkedItems.data && checkedItems.location) {
            navigate("/");
        } else {
            alert("모든 필수 약관에 동의해야 합니다.");
        }
    };

    return (
        <div className="terms-container">
            <h3 className="terms-title">이용 약관에 동의</h3>
            <p className="terms-description">
                Snapgram은 회원님의 개인 정보를 안전하게 보호합니다.<br />
                새 계정을 만들려면 모든 약관에 동의하세요.
            </p>

            {/* 전체 동의 */}
            <div className="terms-agree" onClick={toggleAll}>
                <span>모든 약관에 동의</span>
                <img
                    src={checkedItems.all ? CheckboxChecked : CheckboxUnChecked}
                    alt="전체 동의 체크박스"
                    className="terms-checkbox"
                />
            </div>

            <hr className="terms-divider" />

            {/* 개별 약관 */}
            <div className="terms-list">
                <div className="terms-item" onClick={() => toggleCheckbox("terms")}>
                    <span>이용 약관 (필수)</span>
                    <img
                        src={checkedItems.terms ? CheckboxChecked : CheckboxUnChecked}
                        alt="이용 약관 체크박스"
                        className="terms-checkbox"
                    />
                </div>
                <div className="terms-item" onClick={() => toggleCheckbox("data")}>
                    <span>데이터 정책 (필수)</span>
                    <img
                        src={checkedItems.data ? CheckboxChecked : CheckboxUnChecked}
                        alt="데이터 정책 체크박스"
                        className="terms-checkbox"
                    />
                </div>
                <div className="terms-item" onClick={() => toggleCheckbox("location")}>
                    <span>위치 기반 기능 (필수)</span>
                    <img
                        src={checkedItems.location ? CheckboxChecked : CheckboxUnChecked}
                        alt="위치 기반 기능 체크박스"
                        className="terms-checkbox"
                    />
                </div>
            </div>

            <Button text="다음" onClick={nextButtonClick} />
        </div>
    );
};

export default Terms;
