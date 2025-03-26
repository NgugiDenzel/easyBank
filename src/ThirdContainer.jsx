import Money from "./assets/image-currency.jpg";
import Restaurant from "./assets/image-restaurant.jpg";
import Plane from "./assets/image-plane.jpg";
import Confetti from "./assets/image-confetti.jpg";

function ThirdContainer() {
  const cards = [
    {
      img: Money,
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller, and we are becoming more mobile. So why should you be forced to receive money in a single currency?",
    },
    {
      img: Restaurant,
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      img: Plane,
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don't charge fees on purchases while you are abroad. We will even show you...",
    },
    {
      img: Confetti,
      title: "Our invite-only Beta accounts are now live",
      description:
        "After a lot of hard work by the whole team, we are excited to launch our closed beta. It's easy to request an invite through the site.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4  mt-8 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
          <div className="p-5">
            <h1 className="text-lg font-bold mb-2">{card.title}</h1>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThirdContainer;
