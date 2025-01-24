import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link to="mission" className="text-sm/6 font-semibold leading-6 text-gray-900">
          Our Mission
        </Link>
        <Link to="team" className="text-sm/6 font-semibold leading-6 text-gray-900">
          Our Team
        </Link>
        <Link to="contact-us" className="text-sm/6 font-semibold leading-6 text-gray-900">
          Contact Us
        </Link>
      </div>
      <Outlet/>
      {/* <Routes>
        <Route path="about/contact-us" element={<ContactUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes> */}
      {/* <OurTeam /> */}
      {/* <ContactUs /> */}
    </>
  );
}
