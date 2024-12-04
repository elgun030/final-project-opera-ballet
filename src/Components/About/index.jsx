import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="p-8 font-sans bg-black  text-white">
        <div className="mb-[81px] flex flex-col gap-2.5 container mx-auto max-w-[1440px]">
        <h1 className="text-[52px] leading-[71px] font-bold mb-4">Contact</h1>
          <h2 className="font-medium text-[26px] leading-[36.58px] font-sf-pro">
            For registration and training: (+994)12-493-16-51
          </h2>
          <h2 className="font-medium text-[26px] leading-[36.58px] font-sf-pro">
            For general questions: (+994)12-493-34-49
          </h2>
          <h2 className="font-medium text-[26px] leading-[36.58px] font-sf-pro">
            Email: info@operabellet.az
          </h2>
        </div>

        <div className="container max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Location on the map</h2>
          <iframe
            className="w-full h-[500px] "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.539032272705!2d49.84278197603873!3d40.374744458193845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307daf1120da8b%3A0xc9b55ae565bd4ea1!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgQWthZGVtaWsgT3BlcmEgdsmZIEJhbGV0IFRlYXRyxLE!5e0!3m2!1saz!2saz!4v1733237577816!5m2!1saz!2saz"
            title="Google Maps Location"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
