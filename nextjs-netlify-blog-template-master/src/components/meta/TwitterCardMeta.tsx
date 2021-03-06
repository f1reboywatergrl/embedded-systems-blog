import config from "../../lib/config";
import Head from "next/head";
const siteTitle:string = "Embedded Systems Blog";
const siteDesc:string = `Take a journey through the world of 
Embedded Systems through Samuel Gondokusumo's assortment of projects in the course.`;
type Props = {
  url: string;
  title?: string;
  description?: string;
};
export default function TwitterCardMeta({ url, title, description }: Props) {
  return (
    <Head>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={config.twitter_account} />
      <meta property="twitter:url" content={config.base_url + url} />
      <meta
        property="twitter:title"
        content={title ? [title, siteTitle].join(" | ") : ""}
      />
      <meta
        property="twitter:description"
        content={siteDesc}
      />
    </Head>
  );
}
