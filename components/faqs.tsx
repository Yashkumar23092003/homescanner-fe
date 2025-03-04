import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does homescanner simplify the property search process?",
    answer:
      "We automate agent calls, property shortlisting, and visit scheduling, eliminating endless calls and multiple site visits.",
  },
  {
    question: "What makes homescanner’s property shortlisting unique?",
    answer:
      "We personally curate only the best properties for you, saving time compared to overwhelming traditional listings.",
  },
  {
    question: "How does homescanner handle scheduling property visits?",
    answer:
      "We schedule visits with an optimized route so you can go directly to the best properties without extra coordination.",
  },
  {
    question: "Why choose homescanner over traditional real estate platforms?",
    answer:
      "Our integrated, user-first approach streamlines everything—from agent calls to visits—making property buying hassle-free.",
  },
  {
    question: "How does homescanner ensure an efficient property buying journey?",
    answer:
      "By managing agents, shortlisting properties, and optimizing visits, we create a smoother, more efficient experience.",
  },
];

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="mb-6 text-4xl font-bold text-[#477dd7] md:mb-12 md:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-300 transition-all"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-blue-500" />
              ) : (
                <FaPlus className="text-green-500" />
              )}
            </button>
            <Transition
              show={openIndex === index}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="px-6 py-4 bg-white text-lg text-gray-600 border-t">
                {faq.answer}
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </section>
  );
}
