//import React from "react";
import '../../assets/css/Home.css'
var Home = () =>{
    var styling = {
        fontSize: "25px",
        color: "blue",
        textDecoration: "underline",
    }
    return(
        <header>
            <h1 style={styling}>This is Home Page</h1>
            <h2 id='idSEg'>Testing Styling</h2>
            <h1 className='box-model'>Hello</h1>
        </header>
    )
}
export default Home;

