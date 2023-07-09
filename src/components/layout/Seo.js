import Head from "next/head";
import { useRouter } from "next/router";

// !Guide: Change these default meta
const defaultMeta = {
  title: "edtech",
  siteName: "edtech",
  description:
    "We provide best Courses for the growth of the personal Knowledge",
  url: "",
  type: "Ed -Tech",
  robots: "follow, noindex",
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: "title.png",
};

function SeoProps(props) {
  this.date = props.date;
  this.templateTitle = props.templateTitle;
  //Assign any other properties from defaultMeta if exists.
  Object.assign(this, props);
}

<Seo seoprops={SeoProps} />;
// type SeoProps = {
//   date?: string,
//   templateTitle?: string,
// } & Partial<typeof defaultMeta>;

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="es" />
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <link rel="icon" type="image/x-icon" href="/images/title.jpg" />
      {/* Open Graph */}
      {/* <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      */}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
