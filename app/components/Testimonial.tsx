"use client"
import Image from "next/image"
import { useState } from 'react';
import { motion } from 'framer-motion';

type TestimonialProps = {
  id: number;
  Testimonial: string;
  TestimonialIcon: string;
  country: string;
  comment: string;
};

const TestimonialData: TestimonialProps[] = [
  {
    id: 1,
    Testimonial: "Lukas",
    TestimonialIcon: "images/userTwo.jpg",
    country: "Germany",
    comment: "Trading with DollarFX has been a game-changer for me. I highly recommend DollarFX to anyone looking to take their trading to the next level"
  },
  {
    id: 2,
    Testimonial: "Reyes",
    TestimonialIcon: "images/userOne.jpg",
    country: "Philippines",
    comment: "I was hesitant to start trading, but DollarFX made the process easy and enjoyable. Thanks to DollarFX, I've been able to grow my investment portfolio and achieve my financial goals"
  },
  {
    id: 3,
    Testimonial: "Elo",
    TestimonialIcon: "images/userThree.jpg",
    country: "Poland",
    comment: "As an experienced trader, I've used many different brokerage platforms, but DollarFX stands out from the rest. I've been consistently impressed with the level of service and professionalism offered by DollarFX"
  },
];

const Testimonials = () => {
  const [inView, setInView] = useState(2);

  const handleClick = (TestimonialId: number) => {
    setInView(TestimonialId);
  };

  return (
    <section className="space-y-32">
        <h2 className="text-8xl text-white font-black text-center lg:text-5xl">
            Loved by elite traders and investors across the globe
        </h2>
        <motion.section 
        className="flex items-center space-x-6 w-full lg:block lg:space-y-6 lg:space-x-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
        exit={{ opacity: 0 }}
        >
        {TestimonialData.map((Testimonial) => (
            <section
            key={Testimonial.id}
            className={`bg-gray-900 bg-opacity-40 rounded-xl p-10 cursor-pointer space-y-9 shadow ${inView === Testimonial.id ? "" : "h-80 lg:h-fit"}`}
            onClick={() => handleClick(Testimonial.id)}
            >
            <img
                src="/assets/star.svg"
                alt="rating"
                className="w-36 h-6"
            />
            <p className="text-white text-opacity-60 text-base font-medium leading-loose">
                {Testimonial.comment}
            </p>
            {inView === Testimonial.id && (
                <section className="flex items-center space-x-6">
                <section className="bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    <img
                    src={Testimonial.TestimonialIcon}
                    alt={`Testimonial Avatar - ${Testimonial.Testimonial}`}
                    className="w-full h-full object-cover rounded-full"
                    />
                </section>
                <section className="space-y-1">
                    <p className="text-white text-2xl font-bold leading-loose">
                    {Testimonial.Testimonial}
                    </p>
                    <p className="text-white text-base font-normal leading-loose">
                    {Testimonial.country}
                    </p>
                </section>
                </section>
            )}
            </section>
        ))}
        </motion.section>
    </section>
  );
};

export default Testimonials;
