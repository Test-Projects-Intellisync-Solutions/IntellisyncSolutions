import React from "react";
import { Card } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";

/**
 * DeployAnywhere Section for GPT Builder Page
 * Two deployment cards: Self-hosted & Script Embed
 * Bonus tagline
 */
const DeployAnywhere: React.FC = () => (
  <section className="py-16 max-w-4xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="flex flex-col items-center p-8 text-center">
        {/* TODO: Screenshot/visual for self-hosted */}
        <div className="h-32 w-full bg-muted rounded-lg mb-4 flex items-center justify-center">[Self-hosted UI Screenshot]</div>
        <h3 className="font-semibold text-lg mb-2">Self-hosted Web Interface</h3>
        <p className="mb-4">Launch your GPT on a standalone link—fully hosted by us.</p>
        <Button>Open Demo</Button>
      </Card>
      <Card className="flex flex-col items-center p-8 text-center">
        {/* TODO: Screenshot/visual for script embed */}
        <div className="h-32 w-full bg-muted rounded-lg mb-4 flex items-center justify-center">[Script Embed Snippet]</div>
        <h3 className="font-semibold text-lg mb-2">Embed via Script Tag</h3>
        <p className="mb-4">Use our pre-generated snippet and paste into any webpage in seconds.</p>
        <Button variant="outline">Copy Script</Button>
      </Card>
    </div>
    <div className="mt-8 text-center text-lg font-semibold">
      Share it like a Google Doc, but way smarter.
    </div>
  </section>
);

export default DeployAnywhere;
