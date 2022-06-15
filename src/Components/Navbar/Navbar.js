import React from 'react'

function Navbar() {
  return (
    
    <div className='container-fluid bg-dark '>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="../Images/logo.jpg" alt="logo" className='img-fluid' width={100} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Channels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>Categoroes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">My Stuff</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar