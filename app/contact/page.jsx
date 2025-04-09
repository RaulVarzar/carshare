"use client";

import { IoIosChatboxes } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="relative">
      <div className="flex relative justify-center flex-col lg:flex-row py-32 sm:py-36 md:py-60  bg-base-100 min-h-screen ">
        <div className="w-full max-w-3xl md:w-1/2 relative  p-9 bg-base-100 grid place-content-center gap-y-10">
          <ContactOption
            title={"Chat with us"}
            description={
              "Lorem ipsum dolor sit amet quasi suscipit expedita repellendus excepturi"
            }
          >
            <IoIosChatboxes />
          </ContactOption>
          <ContactOption
            title={"Visit us"}
            description={
              "Lorem ipsum dolor sit amet quasi suscipit expedita repellendus excepturi"
            }
          >
            <IoLocationOutline />
          </ContactOption>
          <ContactOption
            title={"Call us"}
            description={
              "Lorem ipsum dolor sit amet quasi suscipit expedita repellendus excepturi"
            }
          >
            <BiPhoneCall />
          </ContactOption>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

function ContactOption({ children, title, description }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-sm:items-center">
      <div className="bg-base-300 text-3xl sm:text-4xl w-fit bg-opacity-65 grid place-content-center p-3 sm:p-4 h-fit border border-base-content border-opacity-10 rounded-xl">
        {children}
      </div>
      <div className="flex flex-col max-sm:text-center">
        <h1 className="font-medium text-3xl tracking-wide">{title}</h1>
        <p className="font-light tracking-wide text-xl opacity-50 max-w-sm 2xl:max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactForm({}) {
  return (
    <div className="p-6 md:p-10 xl:p-16 2xl:p-20 w-full md:w-1/2 max-w-3xl 2xl:max-w-4xl">
      <div className="flex flex-col px-12 py-20 gap-y-8 lg:gap-y-12 rounded-3xl w-full h-full border border-base-content border-opacity-10 bg-base-200 gap-4 items-center justify-start">
        <div className="flex flex-col gap-2  w-full">
          <h1 className="text-4xl 2xl:text-5xl max-w-xl text-balance font-medium tracking-wide">
            Lorem ipsum dolor sit amet
          </h1>
          <h2 className="font-light text-2xl 2xl:text-3xl tracking-wide opacity-70">
            lorem ipsum bla bla bla
          </h2>
        </div>
        <div className="w-full flex flex-col gap-8 grow">
          <div className="w-full h-12 border-base-content border border-opacity-10 bg-base-300 rounded-lg"></div>
          <div className="w-full h-12 border-base-content border border-opacity-10 bg-base-300 rounded-lg"></div>
          <div className="w-full h-24 grow border-base-content border border-opacity-10 bg-base-300 rounded-lg"></div>
        </div>
        <button className="w-full bg-base-content border-base-300 rounded-lg py-4 px-8 text-base-100 font-normal text-2xl">
          Send message
        </button>
      </div>
    </div>
  );
}
