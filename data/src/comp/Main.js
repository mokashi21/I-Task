import React from 'react'
import "./Style.css"
import adminAva from "../assets/admin-avatar.png"
import logo from "../assets/cdat_logo.png"
function Main() {
  return (
    <div class="conatiner">
      <header>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <a
                href="/"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
              </a>
              <a href="/" class="list-group-item list-group-item-action py-2 ripple ">
                <i class="fas fa-chart-area fa-fw me-3"></i><span class="text-danger"> Schedule Meeting</span>
              </a>
            </div>
          </div>
        </nav>
        <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                height="50"
                alt=""
              />
            </a>
            <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item ">
                <a
                  class="nav-link  hidden-arrow d-flex align-items-center"
                  href="/"
                  aria-expanded="false"
                >
                  <img
                    src="https://themayanagari.com/wp-content/uploads/2021/01/1-28.jpg"
                    class="rounded-circle ml-8 "
                    height="30"
                    alt="bell"
                  />
                  <span class="badge rounded-pill badge-notification bg-success mb-2 ">9</span>
                </a>
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="/"
                  aria-expanded="false"
                >
                  <img
                    src={adminAva}
                    class="rounded-circle"
                    height="40"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
     
    </div>
  )
}

export default Main
