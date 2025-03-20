

interface MenuDetailsProps {
    details:any
}


const Items: React.FC<MenuDetailsProps> = ({details}) => {
  return (
    <div className="w-1/2 p-5">
      <div className="flex text-3xl font-bold items-center text-white">
        <span>{details.name}</span>
        <span className="flex-grow border-b-4 border-dotted border-white mt-3"></span>
        <span>{details.price}</span>
      </div>
      <p className="text-gray-500">{details.description}</p>
    </div>
  );
};

export default Items;
