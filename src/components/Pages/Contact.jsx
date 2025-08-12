import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-16 px-6 bg-[#2c2523] text-white sm:px-16 lg:px-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        Contact Me
      </h2>
       <p className="text-center text-white mb-12 max-w-3xl mx-auto">
       I’m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out for collaborations.
      </p>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side: Contact Form */}
        <form className="flex-1 bg-[#3a3230] rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md bg-[#2c2523] border border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md bg-[#2c2523] border border-gray-600 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-md bg-[#2c2523] border border-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 font-semibold text-black hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Right side: Contact Info */}
        <div className="flex-1 bg-[#3a3230] rounded-lg p-8 shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Get in Touch
          </h3>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mdrased8708@gmail.com"
              className="text-orange-400 hover:underline"
            >
              mdrased8708@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:+8801751202502" className="text-orange-400 hover:underline">
              +88 01751202502
            </a>
          </p>
          <p className="mb-4">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/8801751303185"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              +880 1751303185
            </a>
          </p>

          <div className="mt-8 flex flex-col space-y-3 text-cyan-400 text-lg font-semibold">
            <a
              href="https://github.com/raseduzzaman-rased/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/mdraseduzzaman.rased0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/freelancer-rased/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/freelancerrased"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
