import React from "react";
import { useState } from "react";
import "./faq.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = [
    {
      question: "What is your mobile app development process?",
      answer:
        "We follow a structured process to ensure quality and efficiency...",
    },
    {
      question: "How long does it take to develop an app?",
      answer:
        "The time to develop an app depends on complexity, typically ranging from a few weeks to several months...",
    },
    {
      question: "How do you ensure the security of the apps you develop?",
      answer:
        "We implement industry-standard security practices to safeguard your app...",
    },
    {
      question: "Do you offer post-launch support and updates?",
      answer:
        "Yes, we provide ongoing support and updates to keep your app running smoothly...",
    },
    {
      question: "Can you develop apps for both iOS and Android platforms?",
      answer:
        "We also offer cross-platform solutions to ensure that your apps reach more users on multiple devices.",
    },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="сontainer">
    {faqItems.map((item, index) => (
      <div key={index} className="item">
        <div className={`question ${openIndex === index ? 'open' : ''}`} onClick={() => toggleOpen(index)}>
          <h3>{item.question}</h3>
          <button className="button">{openIndex === index ? '×' : '+'}</button>
        </div>
        {openIndex === index && <div className="answer"><p>{item.answer}</p></div>}
      </div>
    ))}
  </div>
  );
}
