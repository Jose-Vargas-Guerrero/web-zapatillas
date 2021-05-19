import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="container-fluid" id="navbar-container">
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#seccion-1">Sneackxr</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#seccion-1">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#seccion2">section 1</a>
                                </li>
                                <li class="nav-item active">
                                <a class="nav-link active" aria-current="page" href="#banner-container">section 2</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
                            