import React, { useEffect, useState } from "react";
import Container from "./ui/container";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Searching:", query);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="bg-transparent">
        <Container className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home">
            <img
              src="/images/logo.jpg"
              alt="River Garden"
              className="w-12 h-12 rounded-md bg-white p-1"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-12 text-lg text-white flex-1 justify-center">
            <a href="#home" className="text-[#ff7a42] font-medium">Home</a>
            <a href="#aboutUs" className="hover:text-[#ff7a42]">About Us</a>
            <a href="#offers" className="hover:text-[#ff7a42]">Offers & Discounts</a>
            <a href="#contactus" className="hover:text-[#ff7a42]">Contact Us</a>
          </nav>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {/* Search  */}
            <div className="h-10 flex items-center">
              {!searchOpen ? (
                <BiSearchAlt
                  size={30}
                  className="cursor-pointer hover:text-[#ff7a42] "
                  onClick={() => setSearchOpen(true)}
                />
              ) : (
                <div className="flex items-center gap-2 h-10">
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onBlur={() => setSearchOpen(false)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Search..."
                    className="w-40 h-8 bg-transparent border-b border-[#ff7a42] text-white outline-none px-2"
                  />
                  <button
                    onMouseDown={handleSearch}
                    className="text-[#ff7a42]"
                  >
                    <BiSearchAlt size={26} />
                  </button>
                </div>
              )}
            </div>

            {/* Profile → Login */}
            <CgProfile
              size={26}
              className="cursor-pointer hover:text-[#ff7a42]"
              onClick={() => navigate("/login")}
            />
          </div>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-4 text-white">
            {!searchOpen ? (
              <BiSearchAlt
                size={24}
                onClick={() => setSearchOpen(true)}
              />
            ) : (
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => setSearchOpen(false)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search..."
                className="w-32 bg-transparent border-b border-[#ff7a42] text-white outline-none"
              />
            )}

            <CgProfile
              size={24}
              onClick={() => navigate("/login")}
            />

            <button onClick={() => setMobileOpen(true)}>
              <HiOutlineMenu size={28} />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed top-0 right-0 h-full w-72 bg-gray-100 z-50 p-6">
            <nav className="flex flex-col gap-4">
              <a href="#home">Home</a>
              <a href="#aboutUs">About Us</a>
              <a href="#offers">Offers & Discounts</a>
              <a href="#contactus">Contact Us</a>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 bg-[#ff7a42] text-white py-2 rounded-md"
              >
                Login
              </button>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
