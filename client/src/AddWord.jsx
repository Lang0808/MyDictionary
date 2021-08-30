import React from "react";
import AddWordInLanguage from "./AddWordInLanguage";
import axios from 'axios';
import AddWordUnSuccess from "./AddWordUnsuccess";
import AddWordSuccess from "./AddWordSuccess";
import "./AddWord.css";

class AddWord extends React.Component{
    constructor(props){
        super(props);
        this.state={
            language1: 'English',
            language2: 'Vietnamese',
            contentLanguage1: '',
            contentLanguage2: '',
            addWordSuccess: false,
            addWordUnsuccess: false,
            prevDef: ''
        }
        this.handleChangeLanguage2=this.handleChangeLanguage2.bind(this);
        this.handleChangeLanguage1=this.handleChangeLanguage1.bind(this);
        this.handleChangeContentLanguage2=this.handleChangeContentLanguage2.bind(this);
        this.handleChangeContentLanguage1=this.handleChangeContentLanguage1.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleCloseAddWordSuccess=this.handleCloseAddWordSuccess.bind(this);
        this.handleCloseAddWordUnsuccess=this.handleCloseAddWordUnsucess.bind(this);
    }
    handleCloseAddWordUnsucess(){
        this.setState({
            addWordUnsuccess: false,
        });
    }
    handleCloseAddWordSuccess(){
        this.setState({
            addWordSuccess: false,
        });
    }
    handleSubmit(){
        if(this.props.user===''){
            alert("Cần đăng nhập để tiếp tục");
        }
        else{
            const information = {
                'user': this.props.user,
                'ngon_ngu_1': this.state.language1,
                'ngon_ngu_2': this.state.language2,
                'tu_1': this.state.contentLanguage1,
                'tu_2': this.state.contentLanguage2
            };
            axios.post('api/word/addWord', information).then(res=>{
                this.setState({
                    addWordSuccess: true,
                });
            })
            .catch(error=>{
                this.handleAddWordUnsuccess();
                this.setState({
                    addWordUnsuccess: true,
                })
            });
        }
        
    }   
    handleAddWordUnsuccess(){
        const information={
            'user': this.props.user,
            'language1': this.state.language1,
            'language2': this.state.language2,
            'word1': this.state.contentLanguage1
        };
        console.log(information);
        axios.post('/api/word/getWordInDetail', information)
            .then(res=>this.setState({prevDef: res.data[0].tu_2}));
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
            <div>
            <div id="AddWordWrapper">
                <h3 id="Instruction">Thêm từ vào từ điển của chính bạn</h3>
                <div id="AddWordInLanguageWrapper">
                    <AddWordInLanguage language={this.state.language1}
                                        handleChangeLanguage={this.handleChangeLanguage1}
                                        content={this.state.contentLanguage1}
                                        handleChangeContent={this.handleChangeContentLanguage1}/>
                    <AddWordInLanguage language={this.state.language2}
                                        handleChangeLanguage={this.handleChangeLanguage2}
                                        content={this.state.contentLanguage2}
                                        handleChangeContent={this.handleChangeContentLanguage2}/>
                </div>
                <button 
                    onClick={this.handleSubmit}
                    className="AddWordButton">
                        Thêm từ
                </button>
                </div>
                <AddWordSuccess 
                    isOpen={this.state.addWordSuccess}
                    language1={this.state.language1}
                    language2={this.state.language2}
                    word1={this.state.contentLanguage1}
                    word2={this.state.contentLanguage2}
                    handleClose={this.handleCloseAddWordSuccess}/>
                <AddWordUnSuccess
                    user={this.props.user}
                    language1={this.state.language1}
                    language2={this.state.language2}
                    word1={this.state.contentLanguage1}
                    word2={this.state.contentLanguage2}
                    prevDef={this.state.prevDef}
                    isOpen={this.state.addWordUnsuccess}
                    handleClose={this.handleCloseAddWordUnsuccess}/>
            </div>
            
        )
    }
    
}

export default AddWord;