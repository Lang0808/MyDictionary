import "./ChangeWordDefinition.css";

function ChangeWordDefinition(props){
    return (
        <div>
            {props.isOpen &&
            <div>
                <p>Đổi thành:</p>
                <form onSubmit={props.handleSubmit}>
                    <textarea rows="10" cols="30" type="text" value={props.changedValue} onChange={props.handleChange} id="ChangeDefinition"/>
                    <br/>
                    <input type="submit" value="Submit" id="SubmitChange"/>
                </form>
            </div>
            }        
        </div>
                
        
    )
}

export default ChangeWordDefinition;