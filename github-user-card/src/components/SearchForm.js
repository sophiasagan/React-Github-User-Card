import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        searchText: '',
    }

    handleChanges = e => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeUser(this.state.searchText)
        this.setState({
            searchText: ''
        })
    }

    render() {
        return (
            <div className='searchForm'>
                <form onSubmit={this.handleSubmit}>
                    <input className='searchField'
                     type='text'
                     name='name'
                     placeholder='Enter Github Username'
                     value={this.state.searchText}
                     onChange={this.handleChanges}
                     />
                     <button className='searchBtn'>Search</button>
                </form>
    
            </div>
        )
    }
}

export default SearchForm;