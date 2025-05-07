import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert } from "@/components/ui/alert";

/**
 * IngestionMethods Section for GPT Builder Page
 * Tabs for Website, PDF, Freeform
 * Each tab = animation/mockup + description
 * Bonus: Why use all 3? panel
 */
const IngestionMethods: React.FC = () => (
  <section className="py-16 max-w-4xl mx-auto">
    <Tabs defaultValue="website">
      <TabsList className="mb-8">
        <TabsTrigger value="website">🌐 Website Scraper</TabsTrigger>
        <TabsTrigger value="pdf">📄 PDF Upload</TabsTrigger>
        <TabsTrigger value="text">📝 Freeform Input</TabsTrigger>
      </TabsList>
      <TabsContent value="website">
        {/* TODO: Animation/visual for website scraping */}
        <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">[Website Scraper 3D Illustration]</div>
        <p>Parse HTML, XML, or sitemaps from any public site for instant knowledge ingestion.</p>
      </TabsContent>
      <TabsContent value="pdf">
        {/* TODO: Animation/visual for PDF upload */}
        <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">[PDF Drag & Drop Illustration]</div>
        <p>Drag and drop PDFs—extracts all text for your GPT’s brain.</p>
      </TabsContent>
      <TabsContent value="text">
        {/* TODO: Animation/visual for freeform input */}
        <div className="mb-4 h-40 flex items-center justify-center bg-muted rounded-lg">[Freeform Text Illustration]</div>
        <p>Paste or type any text—"About Us", product specs, or anything else.</p>
      </TabsContent>
    </Tabs>
    <Alert className="mt-8" variant="default">
      <b>💡 Why use all 3?</b> Combining all sources gives your GPT the deepest, most accurate context.
    </Alert>
  </section>
);

export default IngestionMethods;
