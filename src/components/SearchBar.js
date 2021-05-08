import React, { Component } from 'react'
import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";

export default function SearchBar(){

    //  const dispatch = useDispatch()

    axios
        .get("http://www.omdbapi.com/?i=tt3896198&apikey=bd37504c")
          .then((res) =>{
            console.log(res)
          })



        return (
            <div>
                <form onSubmit={console.log('hi')}>
                <input type="text"></input>
                </form>
                
            </div>
        )
}
