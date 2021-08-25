import React from "react";
import AddWordInLanguage from "./AddWordInLanguage";

class AddWord extends React.Component{
    constructor(props){
        super(props);
        this.state={
            language1: 'English',
            language2: 'Vietnamese',
            contentLanguage1: '',
            contentLanguage2: '',
        }
        this.handleChangeLanguage2=this.handleChangeLanguage2.bind(this);
        this.handleChangeLanguage2=this.handleChangeLanguage2.bind(this);
        this.handleChangeContentLanguage2=this.handleChangeContentLanguage2.bind(this);
        this.handleChangeContentLanguage1=this.handleChangeContentLanguage1.bind(this);
    }
    handleChangeLanguage1(event){
        event.preventDefault();
        this.setState({
            language1: event.target.value,
        });
    }
    handleChangeLanguage2(event){
        event.preventDefault();
        this.setState({
            language2: event.target.value,
        });
    }
    handleChangeContentLanguage1(event){
        event.preventDefault();
        this.setState({
            contentLanguage1: event.target.value,
        })
    }
    handleChangeContentLanguage2(event){
        event.preventDefault();
        this.setState({
            contentLanguage2: event.target.value,
        })
    }
    render(){
        return (
            <div id="AddWordWrapper">
                <h3>Thêm từ</h3>
                <AddWordInLanguage language={this.state.language1}
                                    handleChangeLanguage={this.handleChangeLanguage1}
                                    content={this.state.contentLanguage1}
                                    handleChangeContent={this.handleChangeContentLanguage1}/>
                <AddWordInLanguage language={this.state.language2}
                                    handleChangeLanguage={this.handleChangeLanguage2}
                                    content={this.state.contentLanguage2}
                                    handleChangeContent={this.handleChangeContentLanguage2}/>
                <button 
                    onClick={()=>this.props.handleAddWord(this.state.language1, this.state.language2, this.state.contentLanguage1, this.state.contentLanguage2)}>
                        Thêm từ
                </button>
            </div>
        )
    }
    
}

export default AddWord;