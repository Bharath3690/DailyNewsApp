import React, { useEffect, useState } from 'react'
import Navitem from './Navitem'
import axios from "axios"

function Navboard({category}) {
  const[article,setarticle ] = useState([]) ;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `
https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f8af861f2f0a4a30b7124533ce068a3f`
        const response = await axios.get(url);
        setarticle(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>Latest<span className='badge bg-danger'> News</span></h2>
      {
        article.map((news,index)=>{
          return <Navitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })
      }
    </div>
  )
}

export default Navboard