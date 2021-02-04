import Head from "next/head";
import config from "../../lib/config";

const siteTitle:string = "Embedded Systems Blog";
const siteDesc:string = "A compilation of blogs about my activities in the Embedded Systems course.";
type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
};
export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}: Props) {
  return (
    <Head>
      <title>
        {title ? [title, siteTitle].join(" | ") : siteTitle}
      </title>
      <meta
        name="description"
        content={description ? description : siteDesc}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it.keyword).join(",")
        }
      />
      {author ? <meta name="author" content={author} /> : null}
      <link rel="canonical" href={config.base_url + url} />
    </Head>
  );
}
