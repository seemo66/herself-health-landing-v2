// faq accordion component
// displays a list of questions that can expand/collapse to reveal answers
import { useState, useRef } from 'react';

// faq data array
const faqs = [
  {
    question: 'Is Herself Health a primary care provider?',
    answer:
      'Yes! Your membership gives you full access to Herself Health as your main source of primary care. We provide everything from annual exams to ongoing support for your physical and emotional wellbeing.',
  },
  {
    question: 'Is this covered by insurance?',
    answer:
      'No. This is a self-pay membership but members may use HSA or FSA funds for eligible services.',
  },
  {
    question: 'Can I use my HSA or FSA to pay for this?',
    answer:
      'Yes. Most services included in your membership are HSA/FSA-eligible. We’ll provide any documentation you need.',
  },
  {
    question: 'What kinds of care are included?',
    answer:
      'You’ll get everything you expect from a great primary care provider—plus more time, more access, and more support. We specialize in women’s health, including hormone care, mental health, and preventive screenings.',
  },
  {
    question: 'How does billing work?',
    answer:
      'You’ll pay $65/month or $700/year. We bill monthly or annually at a discount. That covers your membership and everything listed.',
  },
  // more faq items can be added here
];

export default function FaqAccordion() {
  // array of currently open faq indices
  const [openIndices, setOpenIndices] = useState([]);

  // ref array to measure content height for smooth expand/collapse
  const panelRefs = useRef([]);

  // toggle faq open/close state
  const toggleFAQ = (index) => {
    setOpenIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close if already open
          : [...prev, index] // open if closed
    );
  };

  return (
    <div className="space-y-[25px] md:mt-[72px]">
      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div key={index} className="border-[2px] border-pink rounded-[10px] overflow-hidden">
            {/* question row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-[20px] py-[15px] gap-[14px] text-left"
            >
              <div className="flex items-center gap-[14px]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/arrow-right.svg`}
                  alt="Arrow"
                  className={`w-[22px] h-[22px] transform transition-transform duration-700 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                />
                <p className="font-untitled font-medium text-[20px] text-black leading-6">
                  {faq.question}
                </p>
              </div>
            </button>

            {/* answer panel */}
            <div
              ref={(el) => (panelRefs.current[index] = el)}
              className="px-[20px] text-[16px] text-gray-700 overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: isOpen ? `${panelRefs.current[index]?.scrollHeight}px` : '0px',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="pb-[15px] font-untitled font-regular text-[20px] text-left">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
