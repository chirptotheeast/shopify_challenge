import React, { Component } from 'react'

export default class SearchBar extends Component {

    componentDidMount(){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bd37504c")
          .then((res) => res.json())
          .then((data) => console.log(data));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
