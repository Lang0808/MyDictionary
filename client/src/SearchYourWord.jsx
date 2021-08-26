

function SearchYourWord(props){
    return (
        <div>
            <p>Tìm định nghĩa của chính bạn về 1 từ đi nào:</p>
            <input type="text" value={props.SearchValue} onChange={props.handleChange}/>
            <button onClick={props.handleSearchWord}>
                Tìm lẹ đi
            </button>
            <div>
            {props.Words.map(item=>{
                return (
                    <div key={item.ngon_ngu_1+item.ngon_ngu_2+item.tu_1}>
                        Ngôn ngữ 1: {item.ngon_ngu_1}, Ngôn ngữ 2: {item.ngon_ngu_2}<br/>
                        Từ 1: {item.tu_1}, Từ 2: {item.tu_2}<br/>
                        <br/>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default SearchYourWord;