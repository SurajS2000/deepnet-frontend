
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#121618] flex fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-1/2 pl-10">
        <div className="absolute mt-14 text-2xl font-bold flex">
          <img className="h-12" src="/Logo.png" alt="" />
          <div>
            <span className="text-[#0796EF]">DEEP </span><span className="text-white">NET</span>
            <p className="text-[#857878]">Soft</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center pt-5">
        <div className="hidden gap-5 sm:flex">
          <button className="text-white border-[#0796EF] hover:border-b-2"><Link to="/" className="text-white">Home</Link></button>
          <button className="text-white border-[#0796EF] hover:border-b-2"><Link to="/" className="text-white">Menu</Link></button>
          <button className="text-white border-[#0796EF] hover:border-b-2"><Link to="/add" className="text-white">Add Menu</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
