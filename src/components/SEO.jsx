import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteName = 'Le Shawarma Club';
  const defaultDescription = 'Le meilleur shawarma d\'Abidjan dès 1 000 F CFA. Pain libanais frais, viandes marinées et sauce secrète. Livraison rapide à Abidjan.';
  const defaultKeywords = 'shawarma, abidjan, restaurant, fast food, libanais, livraison, nourriture, côte d\'ivoire';
  const defaultImage = 'https://shawarma-club.com/images/logo-club.png'; // Update with real URL if possible
  const siteUrl = 'https://shawarma-club.com'; // Update with real URL if possible

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaImage = image || defaultImage;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={siteName} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
};

export default SEO;
