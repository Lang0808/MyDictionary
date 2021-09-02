import axios from "axios";
import React from "react";
import FilterWord from "./FilterWord";
import "./AllYourWord.css";

class AllYourWord extends React.Component{
    constructor(props){
        super(props);
        this.state={
            word: [],
            lastId: 0,
            loading: false,
            filter_on: false,
        }
        this.handleLocationSearch=this.handleLocationSearch.bind(this);
        this.toggle_filter_button=this.toggle_filter_button.bind(this);
    }
    toggle_filter_button(){
        this.setState({
            filter_on: !this.state.filter_on,
        })
    }
    componentDidMount(){
        let options ={
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        let handleObserver=(entries, observer)=>{
            entries.forEach(entry=>{
                console.log(entry.intersectionRatio);
                if(entry.intersectionRatio===1){
                    this.handleLocationSearch();
                }
            })
        }
        let observer=new IntersectionObserver(handleObserver, options);    
        observer.observe(this.loadingRef);
    }
    handleLocationSearch(){
        this.setState({
            loading: true,
        })
        console.log(this.props);
        const location_search=window.location.search.slice(1);
        console.log(location_search);
        const information={
            lastId: this.state.lastId,
            user: this.props.user,
            search_query: location_search,
        }
        console.log("handle location search called");
        axios.post('/api/word/loadWord', information)
            .then(res=>{
                console.log(res);
                var maxId=this.state.lastId;
                for(let i=0;i<res.data.length;i++){
                    if(res.data[i].id>maxId){
                        maxId=res.data[i].id;
                    }
                }
                this.setState({
                    word: [...this.state.word, ...res.data],
                    lastId: maxId,
                    loading: false,
                })
            });
    }
    render(){
        const loadingCSS = {
            height: "100px",
            margin: "30px",
            color: "red",
            fontWeight: "bold",
            textAlign: "center"
        };
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
        console.log(this.state.word);
        return (
            <>
            <div className="AllYourWordWrapper">
                <FilterWord filter_on={this.state.filter_on} toggle_filter_button={this.toggle_filter_button}/>
                <table className="all-your-word-table">
                    <tr>
                        <th>Ngôn ngữ 1</th>
                        <th>Từ 1</th>
                        <th>Ngôn ngữ 2</th>
                        <th>Từ 2</th>
                    </tr>
                {this.state.word.map(item=>{
                    return (
                        <tr key={item}>
                            <td>{item.ngon_ngu_1}</td>
                            <td>{item.tu_1}</td>
                            <td>{item.ngon_ngu_2}</td>
                            <td>{item.tu_2}</td>
                        </tr>  
                    )
                })}
                </table>
            </div>
            <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS}>
                    <span style={loadingTextCSS}>Đang tải...</span>
                </div>
            </>
            
        )
    }
    
    
}
export default AllYourWord;