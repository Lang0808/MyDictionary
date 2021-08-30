import LanguagePicker from "./LanguagePicker";
import "./AddWordInLanguage.css";

function AddWordInLanguage(props){
    return (
        <div className="AddWordInLanguage">
            <LanguagePicker language={props.language}
                            handleChange={props.handleChangeLanguage}/>
            <p>Từ:</p>
            <textarea rows="10" cols="30" type="text" value={props.content} onChange={props.handleChangeContent} className="TextAddWord"/>
        </div>
    )
}

export default AddWordInLanguage;