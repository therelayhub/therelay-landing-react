// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion";
  import React from "react";
  
  const FaqSection = () => {
    // FAQ data for mapping
    const faqItems = [
      {
        question: "What apps can I connect to The Relay?",
        answer: "",
      },
      {
        question: "How can I get my organization on The Relay?",
        answer: "",
      },
      {
        question: "Do I need technical skills to set up The Relay?",
        answer: "",
      },
      {
        question: "Is The Relay secure?",
        answer: "",
      },
      {
        question: "What exactly can I automate with The Relay?",
        answer: "",
      },
      {
        question: "Which platforms is The Relay on?",
        answer: "",
      },
      {
        question: "What features will be added in the future?",
        answer: "",
      },
    ];
  
    return (
      <section className="flex flex-col items-center gap-6 py-20 px-8 w-full bg-colors-app-background">
        <div className="max-w-[720px] w-full flex flex-col items-center gap-12">
          <h2 className="w-full text-center text-colors-app-foreground font-text-5xl-font-semibold text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)] [text-shadow:0px_25px_50px_-12px_#00000040] shadow-box-shadow-shadow-2xl">
            Answers for the curious
          </h2>
  
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <Accordio
                key={index}
                value={`item-${index}`}
                className="border-b border-colors-app-border py-4"
              >
                <AccordionTrigger className="flex justify-between items-center gap-3 hover:no-underline">
                  <span className="font-text-base-font-medium font-[number:var(--text-base-font-medium-font-weight)] text-colors-app-card-foreground text-[length:var(--text-base-font-medium-font-size)] tracking-[var(--text-base-font-medium-letter-spacing)] leading-[var(--text-base-font-medium-line-height)] [font-style:var(--text-base-font-medium-font-style)] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FaqSection;
  