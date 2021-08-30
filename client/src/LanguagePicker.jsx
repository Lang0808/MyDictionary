import "./LanguagePicker.css";

function LanguagePicker(props){
    return (
        <div>
            <span className="TitleSelectLanguage">Chọn ngôn ngữ: </span>
            <select data-width="fit" onChange={props.handleChange} className="SelectLanguage">
                <option value="English" selected={props.language==="English"}>Tiếng Anh</option>
                <option value="Vietnamese" selected={props.language==="Vietnamese"}>Tiếng Việt</option>
                <option value="Korean" selected={props.language==="Korean"}>Tiếng Hàn</option>
                <option value="Japanese" selected={props.language==="Japanese"}>Tiếng Nhật</option>
                <option value="Chinese" selected={props.language==="Chinese"}>Tiếng Trung</option>
            </select>
        </div>
    )
}

export default LanguagePicker;