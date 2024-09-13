import React from "react";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: ['Java', 'Node js', 'React', 'Angular'],
            searchKey: '',
            filterItems: []
        }
    }

    handleSearch = (event) => {
        const search = event.target.value;
        this.setState({
            searchKey: search,
            filterItems: this.state.course.filter((item) => 
                item.toLowerCase().includes(search.toLowerCase())
            )
        });
    }

    render() {
        const { course, searchKey, filterItems } = this.state;
        return (
            <>
                <div className="row mt-4">
                    <h3>Search</h3>
                    <div className="row">
                        <label htmlFor="search" className="col-sm-3 col-form-label">Find</label>
                        <div className="col-sm-9">
                            <input 
                                type="text" 
                                id="search"
                                className="form-control" 
                                onChange={this.handleSearch} 
                                value={searchKey}
                                placeholder="Enter your course"
                            />
                            <div>

                            <ul className="list-group">
                                {
                                    (filterItems).map((item) => (
                                        <li className="list-group-item" key={item}>{item}</li>  
                                    ))
                                }
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Search;

