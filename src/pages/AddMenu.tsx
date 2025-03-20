import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import BottemBar from '../components/BottemBar'

const AddMenu = () => {
  const [menu, setMenu] = useState<{menuName:string,_id:string}>();
  const addMenu = (e:any) => {
    e.preventDefault();
    const payload = {
      menuName: e.target.menuName.value,
      description: e.target.description.value,
    };
    axios
      .post("https://deepnet-backend-hfba.vercel.app/api/menus", payload)
      .then((res) => {
        alert("Menu Added Successfully");
        e.target.menuName.value = "";
        e.target.description.value = "";
        setMenu(res.data);
      });
  };
    const addItem = (e:any) => {
        e.preventDefault();
        const payload = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value
          };
     axios.post(`https://deepnet-backend-hfba.vercel.app/api/items/${menu?._id}`, payload)
      .then(() => {
        alert("Item Added Successfully");
        e.target.name.value = "";
        e.target.description.value = "";
        e.target.price.value = null;
      });
    }
  return (
    <>
      <Header />
      <BottemBar/>
      <div className="bg-[url('/background.jfif')] bg-cover w-full relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {menu ?
        <form className="relative" onSubmit={addItem}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5">Add Item to {menu.menuName}</h1>
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md"
                name="name"
                required
              />
              <input
                type="text"
                placeholder="Discription"
                className="p-2 border border-gray-300 rounded-md"
                name="description"
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="p-2 border border-gray-300 rounded-md"
                name="price"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </form>:<form className="relative" onSubmit={addMenu}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5">Add Menu</h1>
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Menu Name"
                className="p-2 border border-gray-300 rounded-md"
                name="menuName"
                required
              />
              <input
                type="text"
                placeholder="Discription"
                className="p-2 border border-gray-300 rounded-md"
                name="description"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Add Menu
              </button>
            </div>
          </div>
        </div>
      </form>} 
      </div>
    </>
  );
};

export default AddMenu;
