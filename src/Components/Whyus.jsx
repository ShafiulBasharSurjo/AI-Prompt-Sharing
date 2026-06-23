import {
  FaRocket,
  FaCheckCircle,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaRocket,
    title: "Save Time",
    description:
      "Skip endless trial and error with proven prompts ready to use.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Assured",
    description: "Browse community-reviewed prompts with ratings and feedback.",
  },
  {
    icon: FaUsers,
    title: "Community Driven",
    description: "Connect with creators and discover innovative prompt ideas.",
  },
  {
    icon: FaRobot,
    title: "Multi-AI Support",
    description: "Works with ChatGPT, Gemini, Claude, Midjourney and more.",
  },
  {
    icon: FaChartLine,
    title: "Performance Analytics",
    description: "Track engagement, views, bookmarks and popularity.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Monetization",
    description: "Share your expertise and grow your creator profile.",
  },
];

export default function Whyus() {
  return (
    <section className="bg-[#0A061F] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Why Choose PromptHub?
          </h2>

          <p className="mx-auto max-w-2xl text-gray-400">
            Everything you need to discover, share and manage high-quality AI
            prompts in one platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-fuchsia-500/40
                "
              >
                <div className="mb-5 inline-flex rounded-xl bg-linear-to-r from-violet-500 to-fuchsia-500 p-4 text-2xl text-white">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
