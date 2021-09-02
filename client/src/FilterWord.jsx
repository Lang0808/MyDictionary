import React from "react";
import "./FilterWord.css";

function FilterWord(props){
    var text_in_filter_button=(props.filter_on ? 'Tắt bộ lọc' : 'Bật bộ lọc');
    return (
        <div className="filter-wrapper">
            <fieldset>
            <legend><button className="filter-button" onClick={props.toggle_filter_button}>{text_in_filter_button}</button></legend>
            <div className="filter-inner">
                {props.filter_on && 
                    <form className="filter-form" >
                        <div className="filter-form-inner">
                            <div className="filter-form-select-container">
                                <label htmlFor="filter-language1" className="filter-form-label">Ngôn ngữ 1</label>
                                <select name="language1" id="filter-language1" className="filter">
                                    <option value="English">Tiếng Anh</option>
                                    <option value="Vietnamese">Tiếng Việt</option>
                                    <option value="Korean">Tiếng Hàn</option>
                                    <option value="Japanese">Tiếng Nhật</option>
                                    <option value="Chinese">Tiếng Trung</option>
                                </select>
                            </div>
                            <div className="filter-form-select-container">
                                <label htmlFor="filter-language2" className="filter-form-label">Ngôn ngữ 2</label>
                                <select name="language2" id="filter-language2" className="filter">
                                    <option value="English">Tiếng Anh</option>
                                    <option value="Vietnamese">Tiếng Việt</option>
                                    <option value="Korean">Tiếng Hàn</option>
                                    <option value="Japanese">Tiếng Nhật</option>
                                    <option value="Chinese">Tiếng Trung</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="Lọc" className="filter-submit"/>
                    </form>
                }
            </div>
            </fieldset>
        </div>
    )
}
export default FilterWord;