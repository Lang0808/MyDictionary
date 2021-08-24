import Popup from "./Popup";
import "./SignupSuccess.css";

function SignupSuccess(props){
    return (
        <div>
            {
                props.isOpen && 
                <Popup handleClose={props.handleClose}>
                    <h3>Đăng ký thành công !!!</h3>
                    <br/>
                    <a href="/" id="Link">Quay lại trang chủ</a>
                </Popup>
            }
        </div>
        
        
    )
    
}

export default SignupSuccess;