import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const faqData = [
    {
      question: "Why do I need family health insurance?",
      answer:
        "Family Health insurance provides financial protection in the event of an illness or accident. Family health insurance is a floater policy where any family member can utilise the entire sum insured. Family coverage differs from one policy to another.",
    },
    {
      question: "How much does a family health insurance plan cost?",
      answer:
        "Generally, health insurance premiums are based on the insured`s age, as this is the primary factor that determines the premium. Besides, past medical history, occupation, policy duration and plan type are also important factors that determine a policy’s premium.",
    },
    {
      question: "What is the difference between individual health insurance and family health insurance?",
      answer: (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>Individual Health Insurance</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>Family Health Insurance</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Sum insured can be utilised by one individual only
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Sum insured can be utilised by any member of the family
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>Covers only one individual</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>Covers the entire family</td>
            </tr>
          </tbody>
        </table>
      ),
        },
    {
      question: "Who all can be covered in a family floater health insurance?",
      answer:
        "A family insurance policy can cover self, spouse, dependent children, parents and parents-in-law. Family Health Optima Insurance Plan and Arogya Sanjeevani Policy, Star Health and Allied Insurance Co Ltd. provide coverage for self, spouse, dependent children, parents and parents-in-law. Star Comprehensive Insurance Policy and Young Star Insurance Policy family insurance policies provide coverage for self, spouse and dependent children.",
    },
    {
      question:"Is there any waiting period for claims under a Family health plan?",
      answer:"Waiting periods for pre-existing diseases are plan specific ranging from 1 year to 4 years.Our Star Comprehensive Insurance Policy has 36 months waiting period for pre-existing diseases. However, there is an option cover called Buy back of pre-existing disease waiting period which reduces the waiting period from 36 to 12 months. Our Young Star Insurance Policy has a waiting period of 12 months on payment of additional premium and Family Health Optima Insurance Plan has a waiting period of 48 months for pre-existing diseases.",
    },
    {
       question:"What is the maximum number of claims allowed over a year?",
       answer:"No matter how many times you make a claim, it is not limited. You can make claims up to the limits of your sum insured.",
    },
    {
        question:"Can I buy more than one family health plan?",
        answer:"A family is allowed to hold any number of policies based on their affordability. There is no restriction on the number of policies one can hold subject to the previous Policies are disclosed in the Proposal form.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 mb-11 p-10 bg-sky-100">
      <h1 className="flex text-center justify-center text-2xl font-bold mb-3">Confused? We’ve got the answers</h1>
      <h1 className="flex text-center justify-center text-md mb-6">Get all your Health Insurance related doubts clarified.</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-white rounded-lg shadow-lg"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white hover:bg-yellow-50 "
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-gray-800">{item.question}</h3>
              <button className="text-xl font-bold text-gray-600">
                {openIndex === index ? <KeyboardArrowUpIcon/>: <KeyboardArrowDownIcon/>}
              </button>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
        <button className="items-center justify-center center p-3 bg-blue-700 text-white rounded-lg mt-3">Buy Now</button>
      </div>
    </div>
  );
};

export default FAQ;