import Head from "next/head";
import config from "../../lib/config";
const siteTitle:string = "Embedded Systems Blog";
const siteDesc:string = `Take a journey through the world of 
Embedded Systems through Samuel Gondokusumo's assortment of projects in the course.`;
type Props = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
};
export default function OpenGraphMeta({
  url,
  title,
  description,
  image,
}: Props) {
  return (
    <Head>
      <meta property="og:site_name" content={config.site_title} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, siteTitle].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={siteDesc}
      />
      <meta
        property="og:image"
        content={"/icon.png"}
      />
      <meta property="og:type" content="article" />
    </Head>
  );
}
