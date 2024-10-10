import React from 'react'
import image from '../assets/img.webp'
const Navitem = ({title,description,src,url}) =>  {
  return (
    <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"375px"}}>
  <img src={src?src:image} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is a report of recent events, often provided through various media channels such as word of mouth, printing, broadcasting, electronic communication, or testimony of observers and witnesses to events. "}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Navitem