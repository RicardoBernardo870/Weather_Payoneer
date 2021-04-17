import React, {useState} from 'react';
import WeatherCard from '../WeatherCard/WeatherCard'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


import './WeatherCards.css'

const WeatherCards =  (props) =>  {

const [currentPage, setCurrentPage] = useState(0);

const PER_PAGE = 20;
const offset = currentPage * PER_PAGE;
const currentPageData = props.data
    .slice(offset, offset + PER_PAGE)
    .filter(day => day.dt_txt.includes('18:00:00'))
    .map((weather, index) => {
      
      return <WeatherCard degreeType={props.degreeType} data={props.data} className='cards' weather={weather} desc={weather.weather} key={index}/>
    })
const pageCount = Math.ceil(props.data.length / PER_PAGE);
    

function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}
   
   
  return (
    <div>
      <nav>
      
        <div className='pagination1'>
     
      <ReactPaginate
        previousLabel={<ArrowBackIcon />}
        nextLabel={<ArrowForwardIcon />}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageLinkClassName={"pagination__links"}
      /> 
        </div>
      </nav>
      <section>
        <article>
            <div className='container'>
              
               {currentPageData}
               
            </div>
        </article>
      </section>
   </div>
  );
}

export default WeatherCards;



