'use client';

import { LottiePlayer8 } from "@/components/lottiejson";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState } from "react";

export default function ContactUs() {
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    alert('Message sent successfully!');
    window.location.reload();
  };

  return (
    <div className="">
      <Header />
      <div className="flex mt-[-50px] justify-center">
        <LottiePlayer8 />
      </div>
      <section className="bg-[#1f2c3f] rounded-xl w-[90%] md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="py-4 md:py-6 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
          <p className="mb-4 md:mb-8 lg:mb-16 font-light text-center text-white text-sm md:text-base lg:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="block p-2 md:p-3 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="name@example.com" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                <input type="text" id="subject" className="block p-2 md:p-3 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="How can we help?" required />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                <textarea id="message" rows={6} className="block p-2 md:p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" className="w-full md:w-auto py-2.5 md:py-3 px-5 text-sm border border-gray-400 hover:border-gray-500 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">{clicked ? 'Message Sent' : 'Send message'}</button>
        </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
