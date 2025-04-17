import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "What services does Ai Media offer?",
      answer:
        "Ai Media offers a full suite of digital and creative solutions designed to grow your brand and elevate your online presence. Our services include:\n\n- Digital Marketing & Social Media Management\n- Websites & Mobile Apps UX/UI Design & Development\n- Customized Software Solutions (CRMs, dashboards, booking tools, etc.)\n- Strategic Marketing & Advertising Campaigns\n- Public Relations & Media Outreach\n- Branding & Graphic Design\n- Shopify Website Setup, Hosting & Email Integration\n- Video Production & Photography\n- Event Planning & Management",
    },
    {
      question: "How do I know which services are right for my business?",
      answer:
        "Our team offers a free initial consultation to understand your goals and recommend the best strategy tailored to your business and industry.",
    },
    {
      question: "Can you manage my social media completely?",
      answer:
        "Yes, we offer full social media management — from content creation and posting to audience engagement and paid ad campaigns.",
    },
    {
      question: "How long does it take to develop a website or app?",
      answer:
        "Timelines vary based on project scope. On average, websites take 3–6 weeks, and mobile apps may take 6–12 weeks. We always provide clear timelines before starting.",
    },
    {
      question: "Do you offer custom solutions for specific industries?",
      answer:
        "Absolutely. We design custom tools and software (e.g., CRM, HRM) tailored to your business model, whether you’re in retail, hospitality, healthcare, or any other field.",
    },
  ];
  
  export async function QuestionSection() {
  
    return (
      <div className="py-10">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Decode Marketing Frequently Asked Questions
        </h3>
  
        <Accordion type="single" collapsible className="w-full container ">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="p-3 mb-2 rounded-2xl border-2 border-gray-300 "
            >
              <AccordionTrigger className="text-lg md:text-2xl cursor-pointer" >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  