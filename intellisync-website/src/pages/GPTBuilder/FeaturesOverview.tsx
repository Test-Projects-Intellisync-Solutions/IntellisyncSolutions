import React from "react";
import { Card } from "../../components/ui/Card";
import { LucideIcon, Lock, Rocket, Brain, Palette, MessageCircle, Wrench, BarChart, FileText } from "lucide-react";

/**
 * FeaturesOverview Section for GPT Builder Page
 * 3-column responsive card layout, Lucide icons, feature title, description
 */
const features = [
  { icon: Lock, title: "Google/Email Sign-in", desc: "Secure, fast sign-in with Google or email account." },
  { icon: Rocket, title: "Auto-Guided Setup Flow", desc: "Step-by-step builder—no guesswork, no overwhelm." },
  { icon: Brain, title: "Multi-source Knowledge Ingestion", desc: "Combine website, PDF, and text for deep context." },
  { icon: Palette, title: "Avatar Customization", desc: "Pick your look. Make your GPT feel like yours." },
  { icon: MessageCircle, title: "Initial Prompt Design", desc: "Set the tone and behavior from the first message." },
  { icon: Wrench, title: "Self-hosted + Script Embed Deployment", desc: "Host on our link or embed in your site in seconds." },
  { icon: BarChart, title: "Real-Time Usage Insights", desc: "See who’s using your GPT and how, live." },
  { icon: FileText, title: "Chat Session Logs", desc: "Review conversations and improve over time." },
];

const FeaturesOverview: React.FC = () => (
  <section className="py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map(({ icon: Icon, title, desc }, i) => (
        <Card key={title} className="flex flex-col items-center p-6 text-center">
          <Icon size={40} className="mb-4 text-primary" />
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{desc}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default FeaturesOverview;
