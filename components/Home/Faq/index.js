import React from "react";
import QuestionAnswer from "./QuestionAnswer";

const content = [
  { 
    question: "Who is a ParaPay Agent?", 
    answer: "ParaPay Agent is any duly approved business entity/individual that have successfully completed the registration process with Canary Tech LTD to render services on her behalf to the public."
  },
  { 
    question: "What are the requirements for becoming an Agent? Interested business entity/individuals should have the following to qualify as an agent:", 
    answer: {
      list: [
        "Must have an existing physical business outlet/location",
        "Must have a functional mobile phone number",
        "A copy of any statutory ID card (Driver’s license, National ID card, Int’l passport or PVC)",
        "Duly completed Guarantor’s Form with Guarantor’s ID card & Passport photograph.",
        "A Passport-sized photograph",
        "Proof of Address (Utility bill e.g. PHCN, DSTV, GOtv, StarTimes, etc.)",
        "3-month Bank statement (not compulsory for some category of agents)",
        "A duly completed ParaPay Agent application form/agreement",
      ],
      listType: "list-alpha"
    },
  },
  { 
    question: "What transactions can I carry out as an ParaPay Agent?", 
    answer: {
      list: [
        "Cash Deposit",
        "Cash Withdrawal",
        "Fund Transfer",
        "Airtime Top up",
        "Bill Payments",
        " More services depending on category of agent.",
      ],
      listType: "list-alpha"
    },
  },
  { 
    question: "How long does it take to be created as an Agent?", 
    answer: "If all your documentations are complete, your agent account will be created in 10 minutes."
  },
  { 
    question: "Can I have more than one agent account or/and location?", 
    answer: "Yes, you can have as many agent locations or/and accounts as you want."
  },
  { 
    question: "How will people know that I am a ParaPay Agent?", 
    answer: "After registration, ParaPay will give you branding materials that will help in your publicity. E.g. Banners, Posters, Danglers, Stickers & T-Shirts. You are expected to put the branding items in your business location."
  },
  { 
    question: "Is there any provision for training after onboarding?", 
    answer: "For us the onboarding process is not complete without training. Immediately after registration, you will receive an invite for training in any of our hubs closest to you. You can also undertake an online training if you are not able to make it to the hub."
  },
  { 
    question: "What are the benefits of being an ParaPay Agent?", 
    answer: {
      list: [
        "Additional income/commission from transaction fees",
        "Increased sales due to increased footfalls",
        "Good brand",
        "Guaranteed training and dedicated field support",
        "Comprehensive branding and marketing support",
        "Social relevance to the community through Financial Inclusion services (FIS)",
        "Low start-up capital",
      ],
      listType: "list-alpha"
    }
  },
  { 
    question: "What is the Agent recruitment/Registration/Setup Process?", 
    answer: {
      list: [
        "ParaPay conducts KYC on a prospective agent and certify that agent meets the agent selection criteria.",
        "A field officer signs up an agent.",
        "Agent completes and submits ParaPay Agent Registration Form and Agreement.",
        "Agent makes provision for the minimum Agent Start-up Capital (N5,000) -Agent funds ParaPay designated bank account or Agent Wallet with the Agent’s minimum start-up capital (depending on agent’s class) by either cash deposit or funds transfer for onward credit to Agent’s trading account or Wallet",
        "The ParaPay Agent’s account is activated, and agent receives login details and a credit alert to the tune of the Agent’s deposited start-up capital.",
        "Agent undergoes training and receives the following setup kits:",
      ],
      listType: "list-roman"
    },
    answer2: {
      list: [
        "Certificate of Completion/registration called “Agent certificate”",
        "Agent code for identification",
        "Transaction Log Book/Register",
        "Branding materials",
        "Commission Structure Sheet",
        "Agent commences full operations"
      ],
      listType: "list-alpha"
    }
  },
  { 
    question: "Who is a Sub-Agent?", 
    answer: "A sub-agent is a duly approved business entity that has successfully completed the agent registration process with ParaPay and is authorised to sign up other agents. The entity is called an agent aggregator or sub-agent."
  },
  { 
    question: "How do I become/register as Sub-agent?", 
    answer: {
      list: [
        "You can complete the aggregator registration form on our website (agent.ParaPay.io). Once your registration process is completed and approved you will receive a notification.",
        "Send us a mail to: [email protected] OR [email protected] And one of our team members will reach out to you.",
      ],
      listType: "list-roman"
    }
  },
  { 
    question: "What are the income streams for an Agent?", 
    answer: "An agent can earn from doing the following transactions for a third party:",
    answer2: {
      list: [
        "Cash-out",
        "Cash-in",
        "Funds Transfers",
        "Billspayments",
        "Bank account opening"
      ],
      listType: "list-alpha"
    }
  },
  { 
    question: "How and when are commissions paid?", 
    answer: "ParaPay Agents’ commissions are paid instantly. All commissions are paid directly to Agents’ designated commission wallet."
  },
  { 
    question: "As an Agent can I bring on the platform another agent?", 
    answer: "Yes. It is called Agent referral."
  },
  { 
    question: "What channels are available to agents to carry out transaction?", 
    answer: {
      list: [
        "POS",
        "Web",
        "USSD",
        "Mobile",
      ],
      listType: "list-roman"
    }
  },
  { 
    question: "How safe is ParaPay Agents’ platforms?", 
    answer: "ParaPay’ Agency terminals/channels, applications and processing systems are compliant with the global payment industry security standards. All infrastructure/systems are secured."
  },
  { 
    question: "How do I get support and resolve transactions issues?", 
    answer: "We have a 24/7 multi-lingual customer care desk that provides support on all customer’s enquiries, complain, feedback and issues. The desk is made up of experienced personnel with high level of expertise in Agency Banking. They can be contacted via:",
    answer2: {
      list: [
        "Email – [email protected]",
        "Phone -- +234 913 444 5083",
        "WhatsApp --  +234 806 178 7752",
        "On-line Chat -- from our website; ParaPay.io",
        "On the Agents’ Platform (for registered agents only)"
      ],
      listType: "list-roman"
    }
  },
]

const brandStyle = "font-bold mt-5 md:mt-8 text-4xl text-center text-blue-900"; 
const containerStyle = "bg-gray-200 p-2 md:px-8 lg:px-12 py-4 relative z-20";

const Faq = () => (
	<section className={containerStyle}>
		<h1 className={brandStyle}>
			Frequently Asked Questions
		</h1>
		<div className="container mx-auto my-8">
			{content?.map((item, index) => (
				<QuestionAnswer
					answer={item.answer}
					answer2={item.answer2}
					key={index}
					index={index}
					initValue={index === 0 ? true : false}
					last={content?.length - 1 === index ? true : false}
					question={item.question}
				/>
			))}
		</div>
	</section>
);

export default Faq;
