import React from "react";
import { motion } from "framer-motion";
import { Alert } from "../../components/ui/Alert";

/**
 * CustomizationOptions Section for GPT Builder Page
 * Two sections: Instructions box + Initial Prompt Messages
 * Animated preview (mocked)
 */
const CustomizationOptions: React.FC = () => (
  <section className="py-16 max-w-4xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Custom Instructions Box */}
      <div>
        <h3 className="font-semibold mb-2">Custom Instructions</h3>
        <div className="border rounded-lg p-4 bg-muted">
          {/* TODO: Markdown input explanation */}
          <p>Write instructions in Markdown to guide your GPT’s behavior.</p>
        </div>
      </div>
      {/* Initial Prompt Messages */}
      <div>
        <h3 className="font-semibold mb-2">Initial Prompt Messages</h3>
        <ul className="space-y-2">
          {[1,2,3,4].map(i => (
            <li key={i} className="border rounded-lg p-3 bg-background">[Static message {i} preview]</li>
          ))}
        </ul>
      </div>
    </div>
    {/* Animated preview (mocked) */}
    <motion.div className="mt-8 h-32 flex items-center justify-center bg-muted rounded-lg">
      [Animated GPT preview bubble]
    </motion.div>
    <Alert className="mt-8" variant="default">
      <b>Tip:</b> See how your prompt changes model behavior in real-time.
    </Alert>
  </section>
);

export default CustomizationOptions;
