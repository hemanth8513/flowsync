import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import faqs from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return <div className="min-h-screen">
    {/* Hero Section */}
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">Streamline Your Workflow <br/> 
      <span className="flex mx-auto gap-3 sm:gap-4 items-center">
        with <Image
        src = {"/logo.jpeg"}
        alt="FlowSync logo"
        width={400}
        height={80}
        className="h-14 sm:h-50 w-auto object-contain"
        />
      </span>
      </h1>
      <p className="text-xl text-gray-300 mb-5 max-w-3xl mx-auto">Empower your team with our intuitive project management solution.</p>
      <Link href="/onboarding">
      <Button size="lg" className="mr-2">Get Started <ChevronRight size={18}/></Button>
      </Link>
      <Link href="#features">
      <Button size="lg" variant="outline" className="mr-4">Learn More</Button>
      </Link>
    </section>

    <section id="features" className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{features.map((feature,index) => {
          return (
            <Card key={index} className="bg-gray-800">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
        </div>
      </div>
    </section>

    <section className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq,index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
}
