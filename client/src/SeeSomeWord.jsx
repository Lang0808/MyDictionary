import React from "react";
import axios from "axios";
import "./SeeSomeWord.css";

class SeeSomeWord extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SomeWordData:[],
            done: false
        }
        this.getSomeWord=this.getSomeWord.bind(this);
    }
    getSomeWord(){
        const information={
            'user': this.props.user
        };
        console.log("get some word");
        axios.post('/api/word/fewWord', information)
            .then(res=>{
                console.log(res.data);
                this.setState({SomeWordData: res.data, done: true})
            })
            .catch(error=>{alert("ERROR !")});
    }
    componentDidMount(){
        if(this.props.user!=''){
            this.getSomeWord();
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
               this.getSomeWord();
        }
    }
    render(){
        return (
            <div id="SeeSomeWord">
                <h3>Các từ của bạn</h3>
                <a href="/YourDictionary" id="LinkToDictionary">Xem lại các từ bạn đã định nghĩa</a>
                <p>Một vài từ bạn đã định nghĩa</p>
                <br/>
                {
                    this.state.done &&
                    <table>
                        <tr>
                            <th>Ngôn ngữ 1</th>
                            <th>Từ 1</th>
                            <th>Ngôn ngữ 2</th>
                            <th>Từ 2</th>
                        </tr>
                        {this.state.SomeWordData.map(item=>{
                            return (
                                <tr key={item.ngon_ngu_1+item.ngon_ngu_2+item.tu_1}>
                                    <td>{item.ngon_ngu_1}</td>
                                    <td>{item.tu_1}</td>
                                    <td>{item.ngon_ngu_2}</td>
                                    <td>{item.tu_2}</td>
                                </tr>
                            )
                        })}
                    </table>
                }
                
            </div>
        )
    }
    
}

export default SeeSomeWord;