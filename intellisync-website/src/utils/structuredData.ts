// Structured data templates for JSON-LD

// Organization schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Intellisync Solutions",
  "url": "https://intellisyncsolutions.io",
  "logo": "https://intellisyncsolutions.io/assets/logo.png",
  "sameAs": [
    // Add your social media profiles here
    // "https://twitter.com/intellisyncsolutions",
    // "https://www.linkedin.com/company/intellisync-solutions",
    // "https://github.com/intellisync-solutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "", 
    "contactType": "customer service",
    "email": "chris.june@intellisync.ca" 
  },
  "description": "Intellisync Solutions provides custom AI solutions, web development, and technology integration services."
});

// Product schema
export const getProductSchema = (name: string, description: string, image?: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "image": image || "https://intellisyncsolutions.io/assets/logo.png",
  "offers": price ? {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock"
  } : undefined,
  "brand": {
    "@type": "Brand",
    "name": "Intellisync Solutions"
  }
});

// Service schema
export const getServiceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": name,
  "provider": getOrganizationSchema(),
  "description": description,
  "url": `https://intellisyncsolutions.io${url}`
});

// FAQ schema
export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Breadcrumb schema
export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://intellisyncsolutions.io${item.url}`
  }))
});

// Article schema
export const getArticleSchema = ({
  headline,
  description,
  authorName,
  datePublished,
  dateModified,
  image,
  url
}: {
  headline: string,
  description: string,
  authorName: string,
  datePublished: string,
  dateModified?: string,
  image?: string,
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image || "https://intellisyncsolutions.io/assets/logo.png",
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "Intellisync Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://intellisyncsolutions.io/assets/logo.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://intellisyncsolutions.io${url}`
  }
});
