import logo from "../images/logo.png"

export function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-left text-md-left">
            <div className="row nest">
                <div className="col-md-6 col-lg-3 mt-md-0 mt-3">
                <div style={{ display: 'flex', justifyContent: 'left' }}>
                <a href="/" className="logo2">
                <img src={logo} alt="Belle esthetique" />
                </a>
              </div>
                    
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
                <div className="col-md-6 col-lg-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                    <p className="space">On a daily basis, we like to stimulate our olfactory, tactile and visual senses with the different products we use in our care.</p>
                </div>
    
                <div className="col-md-6 col-lg-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">About</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Home</a></li>
                        <li><a href="/store">Store</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/store">Beauty Products</a></li>
                    </ul>
                </div>
    
                <div className="col-md-6 col-lg-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Products</h5>
                    <ul className="list-unstyled">
                        <li><a href="/store">Cream</a></li>
                        <li><a href="/store!">Body-Lotion</a></li>
                        <li><a href="/store">Shampoo</a></li>
                        <li><a href="/store">Moiseturiser</a></li>
                    </ul>
                </div>

            </div>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#"> Belle Esthetique C</a>
        </div>
    
    </footer>
      
    )
   
  }
