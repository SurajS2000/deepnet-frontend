import Items from "./Items";
import { MenuItems } from "./Menu";



const MenuDetails: React.FC<{details:MenuItems}> = ({details}) => {
  return (
    <div className="border border-gray-400 my-10 py-10">
        <img className="absolute -mt-20 sm:-mt-44 sm:-ml-10 w-20 sm:w-40" src="/image.png" alt="" />
      <div className="flex w-full justify-center items-center gap-5">
        <hr className="border-t-2 border-gray-400 w-20" />
        <div className="flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold transform relative">
            {details.menuName}
            <span className="absolute top-0 left-0 text-red-500 -z-10 translate-x-0.5 translate-y-0.5">
            {details.menuName}
            </span>
          </h1>
        </div>
        <hr className="border-t-2 border-gray-400 w-20" />
      </div>
      <div className="p-10 flex flex-wrap">
        {details?.items.map((item:any) => (
            <Items details={item} />
        ))}
      </div>
      <img className="absolute right-0 bottom-30 sm:w-40 sm:bottom-20 w-20" src="cocktail.png" alt="" />
    </div>
  );
};

export default MenuDetails;
