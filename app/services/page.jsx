"use client";
import { motion } from "framer-motion";
import PageTransitionAnimation from "../components/PageTransitionAnimation";

const Services = () => {
  return (
    <PageTransitionAnimation>
      <div className="w-full relative min-h-screen p-9 bg-base-100 flex flex-col gap-12 items-center justify-center pt-36">
        {/* <motion.span className="text-8xl font-bold overflow-hidden">
        <motion.h1
          initial={{ y: "90%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-90%" }}
          transition={{ duration: 0.85, delay: 1, ease: [0.8, 0, 0.25, 1] }}
        >
          OUR SERVICES
        </motion.h1>
      </motion.span> */}
        {/* <AnimatePresence onExitComplete={handleExitComplete}>
        {!shouldExit && (
          <motion.div className="w-full h-[60vh] flex flex-row gap-16 max-w-screen-2xl ">
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.25, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
        <ServiceCards />
      </div>
    </PageTransitionAnimation>
  );
};

export default Services;

const services = [
  {
    title: "Basic Plan",
    icon: "💼",
    price: "$300-400",
    features: [
      "1 Project",
      "Up to 5 team members",
      "Email support",
      "Basic analytics",
    ],
    note: "Best for freelancers or small teams just getting started.",
    button: "Get Started",
  },
  {
    title: "Pro Plan",
    icon: "🚀",
    price: "$600-800",
    features: [
      "Up to 10 Projects",
      "Unlimited team members",
      "Priority email & chat support",
      "Advanced analytics and reports",
    ],
    note: "Best for growing businesses that need more flexibility.",
    button: "Upgrade Now",
  },
  {
    title: "Enterprise Plan",
    icon: "🏢",
    price: "Custom pricing",
    features: [
      "Unlimited projects",
      "Dedicated account manager",
      "24/7 Premium support",
      "Custom integrations",
    ],
    note: "Best for large teams or organizations with custom needs.",
    button: "Contact Sales",
  },
];

function ServiceCards() {
  return (
    <motion.div className="flex flex-row gap-6  w-full max-w-screen-2xl">
      {services.map((service, index) => (
        <motion.div
          initial={{ y: "3rem", opacity: 0 }}
          animate={{ y: "0rem", opacity: 1 }}
          exit={{ y: "-3rem", opacity: 0 }}
          transition={{
            delay: 0.1 + index * 0.1,
            duration: 1,
            ease: [0.7, 0, 0.25, 1],
          }}
          key={index}
          className="w-1/3 h-full min-h-[640px] py-12 px-6 lg:px-8 justify-center items-center border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
        >
          <div className="gap-y-8 flex flex-col justify-center items-center h-full">
            <div className="text-center flex flex-col grow">
              <h2 className="text-3xl font-bold font-cairo tracking-wide mb-2 uppercase">
                {service.title}
              </h2>
              <ul className="mb-4 text-xl text-base-content brightness-75 font-light tracking-wide">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-4">
                {service.note}
              </p>
            </div>
            <p className="text-4xl font-bold text-center">{service.price}</p>
            <button className="w-full mb-4 bg-neutral py-4 rounded-lg text-2xl font-bold">
              {service.button}
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
