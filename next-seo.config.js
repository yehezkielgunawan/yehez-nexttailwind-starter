/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "yehez-nexttailwind-starter",
  titleTemplate: "%s | yehez-nexttailwind-starter",
  defaultTitle: "yehez-nexttailwind-starter",
  description:
    "Yehezkiel Gunawan's personalized Next.js + Tailwind CSS + TypeScript starter template",
  canonical: "https://yehez-nexttailwind-starter.yehezgun.com",
  openGraph: {
    url: "https://yehez-nexttailwind-starter.yehezgun.com",
    title: "yehez-nexttailwind-starter",
    description: "Next.js + Tailwind CSS + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/Yehez-NextTailwind-Starter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250",
        alt: "yehez-nexttailwind-starter.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehez-nexttailwind-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
