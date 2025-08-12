import React from "react";

const Modal = ({ isOpen, onClose, image, title, description, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-lg relative">
       <img src={image} alt="" />
        <h2 className="text-2xl font-bold mb-2 mt-8">{title}</h2>
        <p className="mb-4">{description}</p>
        <p className="mb-4">{details}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
