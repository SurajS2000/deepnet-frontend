import React, { useEffect, useState } from "react";
import MenuDetails from "./MenuDetails";
import axios from "axios";

export interface MenuItems {_id:string,menuName:string,description:string,items:{name:string,price:string,description:string}[]}

const Menu = () => {
  const [menu, setMenu] = useState<{menuName:string,_id:string}[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItems>();
  const [loading,setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://deepnet-backend-hfba.vercel.app/api/menus")
      .then((res:{data:{menuName:string,_id:string}[]}) => {
        setMenu(res.data);
        axios.get(`https://deepnet-backend-hfba.vercel.app/api/items/${res.data[0]._id}`).then(
            (res:{data:MenuItems})=>{
                setMenuItems(res.data);
                setloading(false);
            }
        )
      });
  }, []);
    const changeMenu = (id:string) => {
        setloading(true);
        axios.get(`https://deepnet-backend-hfba.vercel.app/api/items/${id}`).then(
            (res:{data:MenuItems})=>{
                setMenuItems(res.data);
                setloading(false);
            }
        )
    };
  return (
    <div>
      <div className="bg-[url('/bg-1.png')] w-full p-5 relative flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex gap-5 flex-wrap justify-center">
          {menu?.map((item:{menuName:string,_id:string}) => (
            <button key={item._id} onClick={()=>{changeMenu(item._id)}} className="border border-[#0796EF] text-white  py-2 text-center w-24 bg-black">
              {item.menuName}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[url('/bg-2.png')] w-full flex relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[url('/f-1.png')] w-1/12 relative"></div>
        <div className="w-10/12 relative py-20">
        {menuItems&&!loading ?
          <MenuDetails details={menuItems} />: 
          <div className="w-full gap-x-2 flex justify-center items-center">
            <div
              className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
            ></div>
            <div
              className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
            ></div>
            <div
              className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
            ></div>
          </div>
          }
        </div>
        <div className="bg-[url('/Frame.png')] w-1/12 relative"></div>
      </div>
    </div>
  );
};

export default Menu;
