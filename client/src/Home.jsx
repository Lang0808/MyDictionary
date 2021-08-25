import AddWord from "./AddWord";
import React from "react";
import axios from "axios";
import AddWordSuccess from "./AddWordSuccess";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addWordSuccess: false,
            language1: '',
            language2:'',
            word1:'',
            word2:'',
        };
        this.handleAddWord=this.handleAddWord.bind(this);
        this.handleCloseAddWordSuccess=this.handleCloseAddWordSuccess.bind(this);
    }
    handleCloseAddWordSuccess(){
        this.setState({
            addWordSuccess: false,
        });
    }
    handleAddWord(language1, language2, contentLanguage1, contentLanguage2){
        if(this.props.user===''){
            alert("Cần đăng nhập để tiếp tục");
        }
        else{
            const information = {
                'user': this.props.user,
                'ngon_ngu_1': language1,
                'ngon_ngu_2': language2,
                'tu_1': contentLanguage1,
                'tu_2': contentLanguage2
            };
            axios.post('api/word/addWord', information).then(res=>{
                alert("Success");
                this.setState({
                    addWordSuccess: true,
                    language1: language1,
                    language2: language2,
                    word1: contentLanguage1,
                    word2: contentLanguage2,
                });
            })
            .catch(error=>{
                alert("Failed");
            });
        }
        
    }   
    render(){
        return(
            <div id="HomeWrapper">
                <AddWord handleAddWord={this.handleAddWord}/>
                <AddWordSuccess 
                    isOpen={this.state.addWordSuccess}
                    language1={this.state.language1}
                    language2={this.state.language2}
                    word1={this.state.word1}
                    word2={this.state.word2}
                    handleClose={this.handleCloseAddWordSuccess}/>
            </div>
        );
    }
    
}

export default Home;