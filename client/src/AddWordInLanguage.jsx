import LanguagePicker from "./LanguagePicker";

function AddWordInLanguage(props){
    console.log(props.language);
    return (
        <div>
        <LanguagePicker language={props.language}
                        handleChange={props.handleChangeLanguage}/>
        <p>Từ:</p>
        <input type="text" value={props.content} onChange={props.handleChangeContent}/>
        </div>
    )
}

export default AddWordInLanguage;