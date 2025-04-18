type CardItemProps = {
    image: string;
    title: string;
    description: string;
  };

function CardItem({ image, title, description }: CardItemProps) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
        <img
          src={image}
          alt="Card Visual"
          className="w-full h-80 object-contain"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>
        </div>
      </div>
    );
  }
  
  export default CardItem;
  