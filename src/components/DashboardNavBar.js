import { useState } from "react";
import { NavLink } from "react-router-dom";
const DashboardNavBar = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="font-sans bg-admin-dark text-admin-light ">
        <div className="px-10 mx-auto uppercase md:text-sm">
          {/* logo */}
          <div className="flex justify-between">
            <div className="flex space-x-12">
              <div>
                <a className="flex items-center py-4 px-3 hover:font-bold">
                  <svg
                    className="h-6 w-6 mr-2 text-admin-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="capitalize font-bold pl-2">E-Commerce</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-6">
                <NavLink
                  exact
                  activeClassName="bg-admin-darkblue"
                  to="/dashboard"
                  className="py-4 px-3 hover:bg-admin-darkblue"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  activeClassName="bg-admin-darkblue"
                  to="/dashboard/products"
                  className="py-4 px-3 hover:bg-admin-darkblue"
                >
                  Products
                </NavLink>
                <NavLink
                  activeClassName="bg-admin-darkblue"
                  to="/dashboard/sales"
                  href=""
                  className="py-4 px-3 hover:bg-admin-darkblue"
                >
                  sales
                </NavLink>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/dashboard/settings"
                className="flex items-center py-4 px-3 space-x-2 group"
              >
                <svg
                  className="h-6 w-6 mr-1 group-hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </NavLink>
              <a
                href=""
                className="flex items-center py-4 px-3 space-x-2 group"
              >
                <svg
                  className="h-6 w-6 mr-1 group-hover:animate-ping"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </a>
            </div>
            {/* mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {!mobileMenu ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${mobileMenu ? "block" : "hidden"}`}>
          <a className="block px-4 py-2 text-sm hover:text-bold">Dashboad</a>
          <a className="block px-4 py-2 text-sm hover:text-bold">Products</a>
          <a className="block px-4 py-2 text-sm hover:text-bold">Sales</a>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavBar;
