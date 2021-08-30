import axios from "axios";
import React from "react";
import SearchYourWord from "./SearchYourWord";
import TenRandomWord from "./TenRandomWord";
import "./YourDictionary.css";

class YourWord extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SearchValue: '',
            SearchData: [],
            dataTenRandom: [],
        };
        this.handleSearchWord=this.handleSearchWord.bind(this);
        this.handleChangeSearchWord=this.handleChangeSearchWord.bind(this);
        this.handleRoll=this.handleRoll.bind(this);
    }
    handleRoll(){
        const information={
            user: this.props.user,
        }
        axios.post('/api/word/getRandomTen', information)
            .then(res=>{
                this.setState({
                    dataTenRandom: res.data,
                })
            })
    }
    handleSearchWord(){
        const information={
            'user': this.props.user,
            'word': this.state.SearchValue,
        };
        axios.post('/api/word/searchWord', information)
            .then(res=>{
                console.log(res.data);
                this.setState({
                    SearchData: res.data,
                })
            })
            .catch(error=>{
                console.log(error);
            });
    }
    handleChangeSearchWord(e){
        this.setState({
            SearchValue: e.target.value,
        });
    }
    render(){
        if(this.props.user===''){
            return (
                <div>Bạn cần phải đăng nhập</div>
            )
        }
        return (
            <div id="YourDictionaryWrapper">
                <div>Tu dien cua ban</div>
                <br/>
                <SearchYourWord SearchValue={this.state.SearchValue}
                                handleChange={this.handleChangeSearchWord}
                                handleSearchWord={this.handleSearchWord}
                                Words={this.state.SearchData}/>
                <TenRandomWord handleRoll={this.handleRoll} data={this.state.dataTenRandom}/>
            </div>
            
        )
    }
}

export default YourWord;