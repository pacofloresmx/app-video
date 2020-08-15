import React, { Component } from 'react';
import '../assets/styles/Search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }
    
    render() {
        return(
            <section className="search">
                <h2 className="search__title">¿Qué quieres ver hoy?</h2>
                <input type="text" className="input" placeholder="Buscar..." />
            </section>
        )
    };
}

export default Search;