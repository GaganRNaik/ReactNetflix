import axios from 'axios'
import React from 'react'
import Movie from './Movie';
import { useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const Row = ({ title, fetchURL,rowId}) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchURL]);
  const slideleft=()=>{
    var sliderleft = document.getElementById("slider"+rowId);
    sliderleft.scrollLeft = sliderleft.scrollLeft - 500;
  }

  const slideright = () => {
    var sliderright = document.getElementById("slider" + rowId);
    sliderright.scrollLeft = sliderright.scrollLeft+500;
  };
  return (
    <>
      <h2 className="text-white p-4 font-bold md:text-xl">{title}</h2>
      <div className=" flex items-center">
        <MdChevronLeft
        onClick={slideleft}
          className="bg-white left-0 z-10 rounded-full absolute opacity-50 on hover:opacity-100 cursor-pointer"
          size={40}
        />

        <div id={"slider"+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <Movie item={item} id={id} key={id} />
          ))}
        </div>
        <MdChevronRight
        onClick={slideright}
          className="bg-white right-0 rounded-full absolute opacity-50 on hover:opacity-100 cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
};

export default Row