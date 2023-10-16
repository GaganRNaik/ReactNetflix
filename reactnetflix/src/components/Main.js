import React, { useState, useEffect } from "react";
import requests from '../Requests'
import axios from 'axios'
const Main = () => {
    const [movies,setMovies]=useState([])
    const movie = movies[Math.floor(Math.random()* movies.length)];
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{setMovies(response.data.results)})
    },[])
    

    const truncate=(str,num)=>{
      if(str?.length>num){
       return str.slice(0, num) + '...';
      }else{
        return str;
      }
    }
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
            <div className=" my-4">
              <button className="bg-gray-300 text-black px-5 py-2 rounded-sm border border-gray-300">
                Play
              </button>
              <button className="text-white px-5 py-2 rounded-sm border border-gray-300 ml-2">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Relesed:{movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncate(movie?.overview,150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main