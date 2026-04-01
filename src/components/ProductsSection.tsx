import { motion } from "framer-motion";
import { ArrowRight, Zap, BookOpen, Cpu, Mic, MessageSquare, Target, BarChart3, Layers, Bot, FileText, Briefcase, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  icon: React.ElementType;
  tag?: string;
  tagColor?: "yellow" | "red";
  stripeUrl?: string;
  comingSoon?: boolean;
  details?: {
    features: string[];
    requirements: string[];
    includes: string[];
  };
}

const products: Product[] = [
  {
    id: "job-researcher-skill",
    name: "Job Researcher Skill",
    description: "Detect ghost jobs, research companies, and track applications with OpenClaw automation.",
    price: 29,
    originalPrice: 48,
    icon: Briefcase,
    tag: "New",
    tagColor: "yellow",
    stripeUrl: "https://buy.stripe.com/5kQ7sNfbib7acq08Nz4F205",
    details: {
      features: [
        "Scrape LinkedIn/Indeed job postings automatically",
        "Detect ghost jobs with AI scoring (0-100)",
        "Research companies for red flags and layoffs",
        "Track applications with smart reminders",
        "Generate weekly pipeline reports",
      ],
      requirements: [
        "OpenClaw v2.0+",
        "Tandem Browser",
        "Node.js v18+",
      ],
      includes: [
        "5 automation scripts (scrape, analyze, research, track, report)",
        "30+ page strategy guide",
        "Follow-up email templates",
        "Ghost job detection checklist",
        "Email delivery within 24h",
      ],
    },
  },
  {
    id: "x-autopilot-skill",
    name: "X/Twitter Autopilot",
    description: "Run your own X/Twitter account autonomously. Post, reply, and engage with OpenClaw + X API.",
    price: 19,
    originalPrice: 29,
    icon: MessageSquare,
    tag: "New",
    tagColor: "yellow",
    stripeUrl: "https://buy.stripe.com/8x2cN77IQ2AE1Lm6Fr4F206",
    details: {
      features: [
        "Post to X/Twitter automatically via API",
        "OAuth 1.0a authentication built-in",
        "Character limit validation",
        "Error handling and retry logic",
        "Cron scheduling support for automated posting",
      ],
      requirements: [
        "OpenClaw v2.0+",
        "X Developer account (Free tier)",
        "Node.js v18+",
      ],
      includes: [
        "post-to-x.js script (direct API integration)",
        "OAuth signature generation",
        "30+ page strategy guide",
        "Content templates and examples",
        "Email delivery within 24h",
      ],
    },
  },
  {
    id: "lead-capture-playbook",
    name: "AI Lead Capture Playbook",
    description: "Build automated funnels that capture and qualify leads 24/7 without manual effort.",
    price: 29,
    originalPrice: 49,
    icon: Target,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "automation-blueprints",
    name: "Automation Blueprints",
    description: "Plug-and-play workflows to connect your tools and eliminate repetitive tasks.",
    price: 39,
    icon: Cpu,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "conversion-scripts",
    name: "Conversion Script Pack",
    description: "Battle-tested scripts for chatbots, SMS follow-ups, and email sequences that close.",
    price: 24,
    icon: MessageSquare,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "voice-ai-guide",
    name: "Voice AI Setup Guide",
    description: "Deploy voice agents that answer calls, qualify leads, and book appointments.",
    price: 34,
    originalPrice: 59,
    icon: Mic,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "chatbot-builder",
    name: "Chatbot Builder Kit",
    description: "Train a 24/7 AI chatbot on your business data to handle FAQs and book meetings.",
    price: 29,
    icon: Bot,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "funnel-templates",
    name: "High-Converting Funnels",
    description: "Pre-built funnel templates designed to maximize opt-ins and reduce drop-off.",
    price: 19,
    icon: Layers,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "analytics-playbook",
    name: "Analytics & Tracking Guide",
    description: "Set up end-to-end analytics to know exactly where your leads come from and convert.",
    price: 22,
    icon: BarChart3,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
  {
    id: "email-sequences",
    name: "Email Sequence Vault",
    description: "Proven email nurture sequences that warm leads and drive repeat purchases.",
    price: 24,
    icon: FileText,
    tag: "Coming Soon",
    comingSoon: true,
    tagColor: "yellow",
  },
];

const ProductCard = ({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd(product);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`group relative bg-card border border-border rounded-xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
            product.comingSoon ? 'opacity-70' : 'hover:glow-border-red'
          }`}
        >
          {product.tag && (
            <span
              className={`absolute -top-2.5 right-4 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                product.tagColor === "red"
                  ? "bg-crab-red text-foreground"
                  : product.comingSoon
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary text-primary-foreground"
              }`}
            >
              {product.tag}
            </span>
          )}

          <product.icon
            className={`mb-4 ${product.tagColor === "red" ? "text-crab-red" : product.comingSoon ? "text-muted-foreground" : "text-primary"}`}
            size={26}
          />

          <h3 className="text-base font-bold mb-2 leading-tight">{product.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
            {product.description}
          </p>

          <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>            <span className={`text-xs transition-colors ${product.comingSoon ? 'text-muted-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
              {product.comingSoon ? 'Coming Soon' : 'Click for details →'}
            </span>
          </div>
        </motion.div>
      </DialogTrigger>

      {!product.comingSoon && (
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <product.icon className={`${product.tagColor === "red" ? "text-crab-red" : "text-primary"}`} size={32} />
              <DialogTitle className="text-xl">{product.name}</DialogTitle>
            </div>
            <p className="text-muted-foreground text-sm">{product.description}</p>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <p className="text-sm font-semibold mb-2">What you get:</p>
              <ul className="space-y-1.5">
                {product.details?.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Requirements:</p>
                <ul className="space-y-1">
                  {product.details?.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Includes:</p>
                <ul className="space-y-1">
                  {product.details?.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Zap size={14} className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.stripeUrl ? (
                <a href={product.stripeUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-semibold gap-2">
                    Buy Now <ArrowRight size={18} />
                  </Button>
                </a>
              ) : (
                <Button size="lg" variant="outline" disabled className="font-semibold">
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

const ProductsSection = () => {
  const { toast } = useToast();

  const handleAdd = (product: Product) => {
    if (product.comingSoon) {
      toast({
        title: "Coming Soon",
        description: `${product.name} will be available soon. Stay tuned!`,
      });
      return;
    }
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const availableProducts = products.filter(p => !p.comingSoon);
  const comingSoonProducts = products.filter(p => p.comingSoon);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            OpenClaw Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Grab what you need.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each skill is a complete automation system. One-time purchase, 
            runs forever on your machine.
          </p>
        </div>

        {<!-- Available Now -->}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available Now
            <span className="text-sm font-normal text-muted-foreground ml-2">({availableProducts.length} skills)</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </div>

        {<!-- Coming Soon -->}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            Coming Soon
            <span className="text-sm font-normal text-muted-foreground ml-2">({comingSoonProducts.length} skills in development)</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
