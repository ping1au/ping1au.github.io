class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="header-container">
          <div class="row">
            <div class="col-3 logo-container d-flex align-items-center">
              <a href="index.html" class="btn-link btn-lg active logo" role="button">
                <img class = "logo" src = "assets/logo.webp"/>
              </a>
            </div>
            <div class="col-9 menu-container">
              <div class="row">
                <div class="col-8 slogan d-flex align-items-center">
                  <span class="align-middle text-right ms-auto">Call us for a free estimate!</span>
                  <div class="vr"></div>
                </div>
                <div class="col-4 slogan d-flex align-items-center contact">
                  514-606-1705<br/>info@fdcfurnishings.com
                </div>
              </div>
              
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <span class="navbar-text">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://ping1au.github.io">HOME <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://ping1au.github.io/testimonials.html">TESTIMONIALS</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          GALLERY
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/bathrooms.html">Bathrooms</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/kitchens.html">Kitchens</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/basements.html">Basements</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/fireplaces.html">Fireplaces</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/outdoor.html">Outdoor</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/stairs.html">Stairs</a>
                          <a class="dropdown-item" href="https://ping1au.github.io/gallery/tiling.html">Tiling</a>
                          <!-- <div class="dropdown-divider"></div> -->
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://ping1au.github.io/before_after.html">BEFORE & AFTER PHOTOS</a>
                      </li>
                      
                      <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">FR</a>
                      </li>
                      <!-- <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                      </li> -->
                    </ul>
                  </span>
                  <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form> -->
                </div>
              </nav>
            </div>
          </div>
        </div>`;
    }
  }
  customElements.define("my-header", MyHeader);
  
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer class="footer-container mt-auto">
          <div class="mt-xl-4"></div>
            <p>DOLLARD-DES-ORMEAUX, PIERREFONDS, ROXBORO, BEACONSFIELD, KIRKLAND,<br/>
              SAINT-ANNE-DE-BELLEVUE, SENNEVILLE, BAIE D’URFÉ, L’ÎLE-BIZARD, POINTE-CLAIRE, DORVAL, LACHINE, <br/>
              L’ÎLE-PERROT, SAINT-LAZARE, HUDSON, VAUDREUIL, RIGAUD, LES CÈDRES, SAINT-CLET</p>
            <a href="https://ping1au.github.io" class="btn btn-link btn-sm active" role="button" aria-pressed="true">
              <img class = "logo-footer" src = "assets/logo.png"/>
            </a>
            <div class="mt-xl-4"></div>
            <p id="contact">
              Roger Larin faslrs FDC Ameublement<br/>
              802 Saint-Robert, Saint Lazare, QC J7T 2M4<br/>
              514 606 1705<br/>
              rogerlarin.fdc@gmail.com<br/>
            </p>
        </footer>`;
    }
  }
  customElements.define("my-footer", MyFooter);
