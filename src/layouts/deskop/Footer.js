import dynamic from 'next/dynamic';
import { base_url } from '../../helper/site.helper';
// import { LazyLoad, withLazyLoad } from '../../utils/LazyLoad';
import OnScrollLoad from '../../utils/OnScrollLoad';
import ErrorBoundaryComponent from '../../utils/ErrorBoundaryComponent';

const BootStrapModal = dynamic(import('../../elements/modal'));

// const TableFilter = dynamic(import('../../components/desktop/examples/TableFilter'));
// const TableFilterWithLazy = withLazyLoad(TableFilter);

function Footer({}) {
  const tableData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <>
    {/*  <TableFilterWithLazy data={tableData} />
      <LazyLoad><h2>WithLazyLoad Loaded</h2></LazyLoad> */}
      <OnScrollLoad offset={10}>
        {/* Login Modal */}
        <ErrorBoundaryComponent>
          <BootStrapModal modalID="loginModal" modalTitle="Please sign in" modalButton={false} modalAttribute={{ size: '', buttonClass: 'btn btn-primary' }}>
            <div className=" p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingEmail"
                    placeholder="name@ardorsys.com"
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button">Sign up</button>
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="button">
                  Sign up with Facebook
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                  Sign up with Google
                </button>
              </form>
            </div>

          </BootStrapModal>
        </ErrorBoundaryComponent>
        {/* Login Modal END */}

      </OnScrollLoad>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href={base_url()} className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href={base_url('pricing')} className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href={base_url('faq')} className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href={base_url('about')} className="nav-link px-2 text-muted">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href={base_url('register')} className="nav-link px-2 text-muted">
                Register
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2023 ardor, Inc</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
