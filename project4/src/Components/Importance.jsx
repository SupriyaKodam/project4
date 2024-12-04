import React, { useEffect, useState } from "react";

const Importance = () => {
  const gridData = [
    {
      id: 1,
      heading: "Pre & Post-Hospitalization",
      paragraph:
        "When it comes to health conditions, one often thinks only about hospitalization expenses. But what about the costs incurred before and after hospitalization? A good medical policy for family needs to cover such expenses thus relieving you from financial stress.",
    },
    {
      id: 2,
      heading: "Annual Health Check-up",
      paragraph:
        "Having a periodic health check-up helps you prevent various health problems. Besides providing cover for incurred medical expenses, some family floater medical insurance plans also facilitate annual health check-up that helps keep your health on track.",
    },
    {
      id: 3,
      heading: "COVID-19 Cover",
      paragraph:
        "Pandemics like COVID-19 remind us about the importance of health and the necessity of health Insurance. So to be financially stable even during uncertainties, it is essential to buy medical health insurance for your family.",
    },
    {
      id: 4,
      heading: "Financial Assistance",
      paragraph:
        "Insuring yourself will make sure that you are financially backed up in times of need. Medical inflation is ever-rising, so a sudden medical emergency may drain your savings.",
    },
    {
      id: 5,
      heading: "Cashless Treatment",
      paragraph:
        "A cashless medical insurance is extremely important in today's digital world. The quick cashless payment facility allows you to concentrate on your recovery rather than worrying about the lengthy medical bill payment process.",
    },
    {
      id: 6,
      heading: "Covers Pre-existing Diseases",
      paragraph:
        "Most medical insurance for families cover Pre- existing Diseases. Any medical conditions or ailments from which the policyholder is already suffering before opting for the medical insurance policy is referred to as a pre-existing disease.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(gridData.slice(0, 5)); // Initial visible cards
  const [animationClass, setAnimationClass] = useState(""); // To handle smooth animation

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("translate-x-[-33.33%] transition-transform duration-1000"); // Sliding animation

      // Update cards after the animation ends
      setTimeout(() => {
        setVisibleCards((prevCards) => {
          const [firstCard, ...restCards] = prevCards;
          return [...restCards, firstCard]; // Move the first card to the end
        });
        setAnimationClass(""); // Reset animation class for next round
      }, 500); // Match the duration of `transition-transform`
    }, 5000); // Trigger every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center justify-center  w-full lg:w-[1100px] bg-gray-300 gap-5 p-20 rounded-lg">
        <h1 className="font-sans text-blue-700 text-sm md:text-xl">
          IMPORTANCE OF MEDICAL INSURANCE
        </h1>
        <h2 className="text-xl md:text-4xl font-bold mt-3 mb-4">
          Why Do I Need a Health Insurance Plan?
        </h2>
        <p className="text-center mb-6 w-full md:w-[600px]">
          The rising medical costs and an ever-increasing number of diseases make medical insurance a necessity. While
          doing your financial planning, you should always add a medical insurance plan to your list. The best family
          health insurance is the one that meets your needs. At Star Health, our expert advisors and array of unique
          plans ensure you get the best policy according to your requirements.
        </p>

        {/* Horizontal Scrolling Grid */}
        <div className="relative w-full overflow-hidden">
          <div className={`flex gap-6 ${animationClass}`}>
            {visibleCards.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full h-auto md:w-[30%] bg-white rounded-lg p-10 shadow-md transition-colors duration-300 hover:bg-blue-100"
              >
                <h3 className="font-semibold text-lg text-blue-700">{item.heading}</h3>
                <p className="text-gray-700 mt-2">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="p-3 bg-blue-700 text-white rounded-lg mt-3">Buy Now</button>
      </div>
    </div>
  );
};

export default Importance;
