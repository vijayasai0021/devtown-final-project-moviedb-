import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-400">
              Welcome to our Movie Mania! We bring you the latest updates on
              movies, TV shows, and entertainment from around the world. Discover
              new releases, and shows, read Movie overviews, and keep track of your
              favorite films.
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Twitter x
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Movie Mania(Vijayasai.Guntreddi). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
