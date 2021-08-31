import "./SearchYourWord.css";

function SearchYourWord(props){
    return (
        <div className="search-word-wrapper">
            <p>Tìm định nghĩa của chính bạn về 1 từ đi nào:</p>
            <textarea rows="10" cols="30" value={props.SearchValue} onChange={props.handleChange} className="textarea-search-word"/>
            <button onClick={props.handleSearchWord} className="button-search-word">
                Tìm lẹ đi
            </button>
            <div>
            {props.Words.map(item=>{
                return (
                    <table key={item.ngon_ngu_1+item.ngon_ngu_2+item.tu_1}>
                        <tr>
                            <th>Từ 1</th>
                            <th>Từ 2</th>
                        </tr>
                        <tr>
                            <td>{item.ngon_ngu_1}</td>
                            <td>{item.ngon_ngu_2}</td>
                        </tr>
                        <tr>
                            <td>{item.tu_1}</td>
                            <td>{item.tu_2}</td>
                        </tr>
                        <br/>
                        
                    </table>
                )
            })}
            </div>
        </div>
    )
}

export default SearchYourWord;