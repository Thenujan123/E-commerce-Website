import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-3 shadow-md bg-white">
      {/* Logo */}
      <div className="mb-2 md:mb-0">
        <Image src="/images/logo.png" alt="Logo" width={144} height={40} />
      </div>

      {/* Search bar */}
      <div className="flex w-full md:w-1/2">
        <input
          type="text"
          id="search_field"
          placeholder="Enter Product Name ..."
          className="flex-grow border bg-white border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          id="search_btn"
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          <FaSearch />
        </button>
      </div>

      {/* Cart */}
      <div className="text-center mt-4 md:mt-0">
        <span id="cart" className="text-lg font-medium">
          Cart
        </span>
        <span
          id="cart_count"
          className="ml-2 text-sm bg-blue-600 text-white px-2 py-1 rounded-full"
        >
          2
        </span>
      </div>
    </nav>
  );
};

export default Nav;
