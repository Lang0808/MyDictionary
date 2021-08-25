import Popup from "./Popup";

function AddWordSuccess(props){
    return (
        <div>
            {props.isOpen &&
                <Popup handleClose={props.handleClose}>
                    <div>
                        Thành công !!!<br/>
                        Bạn đã thêm:
                        <br/>
                        Ngôn ngữ: {props.language1}, Từ: {props.word1}<br/>
                        Ngôn ngữ: {props.language2}, Từ: {props.word2}<br/>
                    </div>
                    
                </Popup>
            }
        </div>
    )
}

export default AddWordSuccess;