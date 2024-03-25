"use client"

// Importing the necessary modules
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

// Define heroItems object
const heroItems = {
    name: "DollarFX",
    title: "Your Gateway to Financial Markets",
    subtitle: "We believe in empowering individuals to navigate the dynamic world of financial markets with confidence and ease. Whether you're an experienced trader or just starting your journey, our platform offers the tools, insights, and support you need to thrive in forex, stocks, and cryptocurrencies.",
    buttonOne: {
        name: "Login",
        href: "/secure-login"
    },
    buttonTwo: {
        name: "Open Account",
        href: "/create-account"
    },
    heroImg: {
        name: "illustration",
        src: "/assets/illustration.svg",
    }
};

// Defining motion animation variants
const fadeInRight = {
    initial: { opacity: 0, translateX: "-200px" },
    animate: { opacity: 1, translateX: 0 },
    transition: { duration: 2, delay: 1, ease: "linear", type: "spring" },
};

const bounceSoftStyle = {
    initial: { 
      opacity: 0,
      y: -20,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 10, // Adjust the damping for the bounce effect
        stiffness: 100, // Adjust the stiffness for the bounce effect
      },
    },
  };

// Hero component
const Hero = () => {
    const { name, title, subtitle, buttonOne, buttonTwo, heroImg } = heroItems;
    const router = useRouter();

    return (
        <section className="space-y-16 w-full">
            <section className="space-y-8 mx-auto">
                <section className="text-center text-indigo-300 text-lg font-black lg:text-sm">
                    <p>{name}</p>
                </section>
                <motion.section
                    className="flex items-center justify-center"
                    variants={fadeInRight}
                    initial="initial"
                    animate="animate"
                >
                    <p className="text-center text-8xl text-white font-black w-[80%] lg:text-5xl lg:w-full">{title}</p>
                </motion.section>
                <section className="flex items-center justify-center">
                    <p className="text-white text-lg text-center font-medium w-[70%] lg:w-full lg:text-base">{subtitle}</p>
                </section>
                <section className="flex items-center space-x-8 justify-center">
                    <button className="flex items-center justify-around border bg-white rounded-3xl h-12 w-32 hover:bg-slate-900 hover:text-white" onClick={() => router.push(buttonOne.href)}>
                        <p className="text-slate-900 font-medium hover:text-white">{buttonOne.name}</p>
                    </button>
                    <button className="flex items-center" onClick={() => router.push(buttonTwo.href)}>
                        <p className="text-white font-medium">{buttonTwo.name}</p>
                    </button>
                </section>
            </section>
        </section>
    );
};

export default Hero;