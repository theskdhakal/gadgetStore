import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const About = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center w-3/4 mx-auto mt-5 border rounded shadow-lg">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h4 className="text-2xl font-semibold text-center underline text-gray-800">
            About Us
          </h4>
          <div className="mt-4 text-gray-600">
            <p>
              Welcome to GadgetVerse, your premier destination for all things
              tech. GadgetVerse is not just an e-commerce store; it's a gateway
              to a world of limitless possibilities in the realm of electronics
              and innovation. We've carefully curated an extensive collection of
              cutting-edge gadgets, ranging from the latest mobile phones to
              stunning high-definition TVs, state-of-the-art cameras, powerful
              laptops, and immersive gaming equipment, all sourced from renowned
              brands that define excellence in their respective fields.
            </p>
            <p>
              Our mission is to redefine the way you interact with technology.
              We believe that gadgets should not only serve functional purposes
              but also enhance your lifestyle. Whether you're a tech enthusiast,
              a gaming aficionado, a creative professional, or simply someone
              who appreciates the finest in technology, GadgetVerse has you
              covered. Our commitment to quality and authenticity is unwavering,
              ensuring that each product we offer is a testament to
              technological innovation. But we are more than just a store; we
              are your tech partner, guiding you through the ever-evolving
              landscape of gadgets.
            </p>
            <p>
              What sets us apart is our dedication to delivering an unmatched
              shopping experience. With GadgetVerse, you'll have access to a
              vast array of choices, comprehensive product information, expert
              reviews, and personalized recommendations. We're not just about
              selling gadgets; we're here to empower you with the knowledge and
              tools you need to make informed decisions about your tech
              investments. Our customer-centric approach means that your
              satisfaction is our top priority, and we're here to assist you
              every step of the way.
            </p>

            <p>
              At GadgetVerse, we are driven by a passion for innovation and a
              commitment to exceeding your expectations. We invite you to join
              us on this exciting journey through the world of gadgets and
              technology, where the possibilities are endless. Whether you're
              looking to stay connected, entertained, or productive, GadgetVerse
              is your trusted partner in making your tech dreams a reality.
              Welcome to GadgetVerse – where innovation meets lifestyle.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
