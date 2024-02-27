import './Footer.css';

export  default function Footer (){
    return (
        <div>
        
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
           <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
       
        <footer className="mainfooter" role="contentinfo">
          <div className="footer-middle">
          <div className="container">
            <div className="row" >
              
              <div className="col-md-3 col-sm-6">
             
                <div className="footer-pad" >
                  <h4></h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Webmaster</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
               
               
              </div>
                <div className="col-md-3">
                    <h4>Follow Us</h4>
                    <ul className="social-network social-circle">
                     <li><a href="https://web.facebook.com/?_rdc=1&_rdr" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                     <li><a href="https://www.linkedin.com/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    </ul>				
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 copy">
                    <p className="text-center">&copy; Copyright 2023 - The Next Chapter.  All rights reserved.</p>
                </div>
            </div>
        
        
          </div>
          </div>
        </footer>
          
          
        </div>
    )
}