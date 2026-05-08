import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Bizzybee Technology | Premium AI Growth & Marketing Agency", 
  description = "Bizzybee Technology helps businesses scale with AI-driven marketing, performance advertising, and custom automation systems. Get your free AI growth audit today.",
  keywords = "AI Marketing, Growth Agency, Performance Marketing, AI Automation, Digital Marketing Strategy",
  ogImage = "https://bizzybee.ai/og-image.png",
  ogType = "website",
  canonicalUrl = "https://bizzybee.ai",
  schemaMarkup = null
}) => {
  const siteName = "Bizzybee Technology";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Security Headers (Partial emulation via meta) */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' https://apis.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;" />
      
      {/* Structured Data (JSON-LD) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}

      {/* Organization Schema (Global) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Bizzybee Technology",
          "url": "https://bizzybee.ai",
          "logo": "https://bizzybee.ai/logo.png",
          "sameAs": [
            "https://instagram.com/chandru_with_dev",
            "https://facebook.com/BizzyBeeTechnology"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7845994734",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
