import React from "react";
import { Tabs } from "../../components/ui/Tabs";
import { Alert } from "../../components/ui/Alert";

/**
 * IngestionMethods Section for GPT Builder Page
 * Tabs for Website, PDF, Freeform
 * Each tab = animation/mockup + description
 * Bonus: Why use all 3? panel
 */
const IngestionMethods: React.FC = () => (
  <section className="py-16 max-w-4xl mx-auto">
    <Tabs
      tabs={[
        {
          label: "🌐 Website Scraper",
          content: (
            <>
              <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">
                [Website Scraper 3D Illustration]
              </div>
              <p>Parse HTML, XML, or sitemaps from any public site for instant knowledge ingestion.</p>
            </>
          ),
        },
        {
          label: "📄 PDF Upload",
          content: (
            <>
              <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">
                [PDF Upload Illustration]
              </div>
              <p>Upload and ingest knowledge from PDF documents.</p>
            </>
          ),
        },
        {
          label: "📝 Freeform Input",
          content: (
            <>
              <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">
                [Freeform Input Illustration]
              </div>
              <p>Paste or type any text to add custom knowledge.</p>
            </>
          ),
        },
      ]}
    />
    <Alert className="mt-8" variant="default">
      <b>💡 Why use all 3?</b> Combining all sources gives your GPT the deepest, most accurate context.
    </Alert>
  </section>
);

export default IngestionMethods;
