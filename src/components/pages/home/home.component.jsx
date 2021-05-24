import React, { useContext, Fragment } from "react";
import UserContext from "../../../context/user/userContext";
import { useHistory, withRouter, Link } from "react-router-dom";

// import LocationDropdown from './LocationDropdown.component'

const Home = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const { token, user } = userContext;
  if (token && user) {

    const { 
            property_type_preference,
            rent_price_preference,
            length_of_stay_preference,
            city_preference,
          } = user

    if (property_type_preference === null && 
        rent_price_preference === null &&
        length_of_stay_preference === null &&
        city_preference === null ) {
      history.push("/search_preferences");
    } else {
      history.push("/account");
    }
  }

  return (
    <Fragment>
      <section
        className="h-screen-70vh bg-no-repeat bg-fixed bg-cover bg-top-center"
        style={{ backgroundImage: "url('assets/img/bg.jpg.webp')" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="max-w-5xl flex flex-col justify-center">
            <h1 className="text-white text-7xl font-bold tracking-tight mb-2">
              Find your next home!
            </h1>
            <p className="text-white text-xl font-light mb-8">
              House, condominiums, and apartments for rent.
            </p>
            <Link
              to="/signup"
              className="font-normal w-max text-2xl px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500"
            >
              Sign with us!
            </Link>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="container mx-auto h-full">
          <div className="">
            <div className="">
              <h2>Properties in various cities in NCR</h2>
              <p>Choose your city!</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default withRouter(Home);
