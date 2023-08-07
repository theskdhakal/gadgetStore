import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const Categories = () => {
  const callouts = [
    {
      name: "Mobile-phones",
      description: "All kind of mobile phone accessories",
      imageSrc:
        "https://m-cdn.phonearena.com/images/article/64576-wide-two_940/The-Best-Phones-to-buy-in-2023---our-top-10-list",
      imageAlt: "mobile phone from all brands",
      href: "/mobile",
    },
    {
      name: "Televisions",
      description: "All kind of TVs and accessories",
      imageSrc: "https://i.rtings.com/assets/pages/PtBw4Lf8/best-tv-medium.jpg",
      imageAlt: "TV from all brands",
      href: "#",
    },
    {
      name: "Laptops",
      description: "All kind of Laptops and accessories",
      imageSrc:
        "https://sm.pcmag.com/pcmag_au/guide/t/tested-the/tested-the-lightest-laptops-for-2023_1euq.jpg",
      imageAlt: "Your one way stop to all kinds of laptop",
      href: "#",
    },
    {
      name: "Gaming",
      description: "All kind of Gaming consoles and accessories",
      imageSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg",
      imageAlt: "All kind of gamings you are looking for",
      href: "#",
    },
    {
      name: "Camera",
      description:
        "Shop a huge range of digital SLR and compact system cameras from the best camera brands!",
      imageSrc:
        "https://www.whatdigitalcamera.com/wp-content/uploads/sites/13/2015/10/Cameras.jpg",
      imageAlt: "All of your camera need is fulfilled here",
      href: "#",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Item- Categories
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative ">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
