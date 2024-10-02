import { Image } from '@mantine/core';
import React from 'react';
import BoxSvg from '@assets/svgs/why-us/box.svg';
import TruckSvg from '@assets/svgs/why-us/truck.svg';
import WorldSvg from '@assets/svgs/why-us/world.svg';

export const WhyUs = () => {
  return (
    <div className="px-4 pb-16 text-center">
      <h2 className="mb-4 text-4xl font-medium">
        <b>Why</b> us?
      </h2>
      <p className="mb-12 text-lg">
        Full commitment regardless of the size of the order. This approach allows us to meet the
        expectations of even the most demanding customers.
      </p>
      <div className="flex justify-center space-x-8">
        <div className="max-w-xs">
          <div className="relative mb-8">
            <Image
              src={WorldSvg.src}
              alt="Globe icon representing extensive resources"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">EXTENSIVE RESOURCES</h3>
          <p className="text-justify">
            Our network of partners extends from transport companies, customs agencies, IT partners,
            to production plants and storage warehouses.
          </p>
        </div>
        <div className="max-w-xs">
          <div className="relative mb-8">
            <Image
              src={BoxSvg.src}
              alt="Box icon representing tailor-made solutions"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">TAILOR-MADE SOLUTIONS</h3>
          <p className="text-justify">
            We want to follow our clients, not impose common patterns of action on them. We create
            tailor-made solutions that are best for their business, not our convenience.
          </p>
        </div>
        <div className="max-w-xs">
          <div className="relative mb-8">
            <Image
              src={TruckSvg.src}
              alt="Truck icon representing supply chain design"
              className="mx-auto max-h-[100px] max-w-[100px]"
            />
          </div>
          <h3 className="mb-2 text-[22px] font-bold">SUPPLY CHAIN DESIGN</h3>
          <p className="text-justify">
            We offer comprehensive creation of supply chains, designed to meet the requirements of
            specific customers. We select optimal forms of transport, carriers and subcontractors.
          </p>
        </div>
      </div>
    </div>
  );
};
