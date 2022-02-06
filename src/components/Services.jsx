import React, { useRef, useEffect } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle, innerRef }) => (
  <div
    ref={innerRef}
    className="opacity-0 flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-x"
  >
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  const targetRef = useRef([]);

  // for appear on scroll animation
  useEffect(() => {
    const appearOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };
    // define intersection observer
    const observer = new IntersectionObserver(function appearOnScroll(entries) {
      entries.forEach((entry) => {
        // if element is not visable just return
        if (!entry.isIntersecting) {
          return;
        } else {
          // if visable change show animation and stop observe
          entry.target.classList.add("animate-slide-in-right");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    // to observe tagetRef
    if (targetRef.current) {
      targetRef.current.forEach((target) => {
        if (target) observer.observe(target);
      });
    }
  }, [targetRef]);

  return (
    <div className="flex w-full flex-col mf:flex-row justify-center items-center gradient-bg-services 2xl:px-20">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-10 py-12 px-4">
        <div className="flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br /> continue to imporve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center 2xl:items-end">
        <ServiceCard
          innerRef={(el) => (targetRef.current[0] = el)}
          color="bg-[#2952E3]"
          title="security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our product."
        />
        <ServiceCard
          innerRef={(el) => (targetRef.current[1] = el)}
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our product."
        />
        <ServiceCard
          innerRef={(el) => (targetRef.current[2] = el)}
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our product."
        />
      </div>
    </div>
  );
};

export default Services;
