import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AccountNav = () => {
  const location = useLocation();
  const fullPath = location.pathname;
  const basePath = "/account";
  const pathAfterBase = fullPath.startsWith(basePath)
    ? fullPath.slice(basePath.length)
    : fullPath;

  const baseClass = "py-2 px-6 inline-flex gap-2 text-white rounded-full bg-gray-500";
  const [profileClass, setProfileClass] = useState(baseClass);
  const [listClass, setListClass] = useState(baseClass);
  const [bookClass, setBookClass] = useState(baseClass);

  useEffect(() => {
    if (!pathAfterBase || pathAfterBase === '/') {
      setProfileClass(`${baseClass} bg-red-700`);
      setListClass(baseClass);
      setBookClass(baseClass);
    } else if (pathAfterBase === '/bookings') {
      setBookClass(`${baseClass} bg-red-700`);
      setListClass(baseClass);
      setProfileClass(baseClass);
    } else {
      setListClass(`${baseClass} bg-red-700`);
      setBookClass(baseClass);
      setProfileClass(baseClass);
    }
  }, [pathAfterBase]);

  return (
    <nav className="w-full flex mt-8 justify-center gap-2 mb-8">
      <Link className={profileClass} to={"/account"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        My Profile
      </Link>
      <Link className={bookClass} to={"/account/bookings"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        My Bookings
      </Link>
      <Link className={listClass} to={"/account/places"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>
        My Listings
      </Link>
    </nav>
  );
};

export default AccountNav;
