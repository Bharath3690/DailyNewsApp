import React from 'react'

const Navbar = ({setcategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DailyNews</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link" onClick={()=>setcategory("technology")} >Technology</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={()=>setcategory("business")} >Business</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={()=>setcategory("health")}>Health</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={()=>setcategory("sports")}>Sports</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={()=>setcategory("entertainment")}>Entertainment</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar