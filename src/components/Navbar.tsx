"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/styles/navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">My Portfolio</div>

        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <Link href="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link href="#about">About</Link>
          </li>
          <li className="navbar-link">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="navbar-link">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="navbar-link">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="navbar-menu">
          <li className="navbar-link">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="#skills" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="#projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
