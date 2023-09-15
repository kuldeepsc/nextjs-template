import {base_url} from "../../helper/site.helper";

const Header = ({}) => {

    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-0 border-bottomm">
                    <a href="/"
                       className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none site-logo">
                        <img src="/site/images/ardornext_logo.png" alt="phoenix" width="100%" />
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href={base_url()} className="nav-link active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href={base_url('pricing/')} className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href={base_url('faq/')} className="nav-link">FAQs</a></li>
                        <li className="nav-item"><a href={base_url('about/')} className="nav-link">About</a></li>
                    </ul>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                        <a href={base_url('register/')}><button type="button" className="btn btn-warning">Sign-up</button></a>
                    </div>
                </header>
            </div>
            
            <style jsx>
                {`
                    .site-logo{position: relative;}
                    .site-logo>img{position: absolute;width: 180px;top: -3px;}
                `}
            </style>
        </>
    )
}

export default Header;