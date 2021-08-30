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
                        <table>
                            <tr>
                                <th>Ngôn ngữ 1</th>
                                <th>Ngôn ngữ 2</th>
                            </tr>
                            <tr>
                                <td>{props.language1}</td>
                                <td>{props.language2}</td>
                            </tr>
                            <tr>
                                <th>Từ 1</th>
                                <th>Từ 2</th>
                            </tr>
                            <tr>
                                <td>{props.word1}</td>
                                <td>{props.word2}</td>
                            </tr>
                        </table>
                    </div>
                    
                </Popup>
            }
        </div>
    )
}

export default AddWordSuccess;