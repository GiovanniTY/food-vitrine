"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTarifsOpen, setIsTarifsOpen] = useState(false)
  const [isDesktopTarifsOpen, setIsDesktopTarifsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const tarifsRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTarifsMenu = (isDesktop = false) => {
    if (isDesktop) {
      setIsDesktopTarifsOpen(!isDesktopTarifsOpen)
    } else {
      setIsTarifsOpen(!isTarifsOpen)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const closeDropdown = (e) => {
      if (isDesktopTarifsOpen && tarifsRef.current && !tarifsRef.current.contains(e.target)) {
        setIsDesktopTarifsOpen(false)
      }
    }
    document.addEventListener("click", closeDropdown)
    return () => document.removeEventListener("click", closeDropdown)
  }, [isDesktopTarifsOpen])

  // Varianti per animazioni
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-secondary backdrop-blur-md shadow-md" : "py-4 bg-secondary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <span className="text-xl md:text-2xl font-light text-text font-serif tracking-wider">
                Makè Pizza
              {/*   <span className="font-normal italic ml-1">Photographie</span> */}
                <span className="block h-0.5 max-w-0 bg-secondary transition-all duration-500 group-hover:max-w-full"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
          <Link
  to="/cart"
  className="text-text relative group"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 group-hover:scale-110 transition-transform"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 6.75M17 13l1.35 6.75M9 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>

  {/* Badge per numero articoli (opzionale) */}
  {/* 
  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
    3
  </span> 
  */}
</Link>

            <Link
              to="/about"
              className="text-text text-sm uppercase tracking-widest hover:text-text/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-highlight after:transition-all hover:after:w-full "
            >
              Qui-nous sommes
            </Link>

            <Link
              to="/review" //recensioni
              className="text-text text-sm uppercase tracking-widest hover:text-text/80 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-highlight after:transition-all hover:after:w-full"
            >
              
            </Link>

            {/* Tarifs Dropdown */}
            <div className="relative" ref={tarifsRef}>
              <button
                onClick={() => toggleTarifsMenu(true)}
                className="flex items-center text-text text-sm uppercase tracking-widest hover:text-text/80 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-highlight after:transition-all hover:after:w-full"
              >
                Menu
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isDesktopTarifsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDesktopTarifsOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute right-0 mt-2 w-48 origin-top-right"
                  >
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-xl overflow-hidden">
                      <div className="py-1">
                        {["Pizza", "Burger", "Pates"].map((item, i) => (
                          <motion.div key={item} custom={i} variants={menuItemVariants}>
                            <Link
                              to={`/${item.toLowerCase()}`}
                              className="block px-4 py-2 text-sm text-text hover:bg-white/20 transition-colors"
                              onClick={() => setIsDesktopTarifsOpen(false)}
                            >
                              {item}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white hover:text-white/80 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 px-4 space-y-8">
              {/* Logo in mobile menu */}
              <img src="/Aline-logo.svg" alt="Logo" className="w-48 h-auto mb-8" />

              <div className="flex flex-col items-center space-y-6 w-full max-w-xs">
                <Link
                  to="/"
                  className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors w-full text-center py-2"
                  onClick={toggleMenu}
                >
                  Accueil
                </Link>

                <Link
                  to="/about"
                  className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors w-full text-center py-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>

                <Link
                  to="/portfolio"
                  className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors w-full text-center py-2"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>

                {/* Mobile Tarifs dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => toggleTarifsMenu()}
                    className="flex items-center justify-center text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors w-full text-center py-2"
                  >
                    Tarifs
                    <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isTarifsOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isTarifsOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="mt-2 w-full"
                      >
                        <div className="flex flex-col items-center space-y-4 py-4 border-t border-white/10">
                          {["Chevaux", "Chiens", "Couples", "Mariages"].map((item, i) => (
                            <motion.div key={item} custom={i} variants={menuItemVariants} className="w-full">
                              <Link
                                to={`/${item.toLowerCase()}`}
                                className="block text-white/80 text-lg hover:text-white transition-colors text-center"
                                onClick={toggleMenu}
                              >
                                {item}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Social media icons */}
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar