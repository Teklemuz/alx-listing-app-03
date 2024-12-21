import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { PropertyProps } from '../interfaces';

const IndexPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center py-24" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filters p-4">
        <div className="container mx-auto flex space-x-4">
          {["Top Villa", "Self Checkin", "Luxury"].map((label) => (
            <button key={label} className="pill bg-blue-500 text-white py-2 px-4 rounded">
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="property-listings p-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
            <div key={property.name} className="property-card border p-4 rounded">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-2">{property.name}</h3>
              <p>{property.address.city}, {property.address.country}</p>
              <p>Price: ${property.price}</p>
              <p>Rating: {property.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
