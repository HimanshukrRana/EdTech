import React from "react";
import Layout from "../../src/components/layout/Layout";

import Hero from "../../src/components/courses/webdevelopment/Hero";

import Intro from "../../src/components/courses/webdevelopment/Intro";
import Topics from "../../src/components/courses/webdevelopment/Topics";
import Courses from "../../src/components/courses/webdevelopment/Courses";
import Fee from "../../src/components/courses/webdevelopment/Fee";
import Prerequisites from "../../src/components/courses/Prerequisites";
import Faqs from "../../src/components/courses/webdevelopment/faq/Faqs";
import Advantages from "../../src/components/courses/webdevelopment/Advantages";
import { useRouter } from "next/router";
import { coursedata } from "../../src/data/coursedata";
import QuestionForm from "../../src/components/courses/webdevelopment/QuestionForm";
import Reviews from "../../src/components/courses/webdevelopment/Reviews";
import NotFound from "../404";
import Technologies from "../../src/components/courses/webdevelopment/Technologies";
import Highlights from "../../src/components/courses/webdevelopment/Highlights";

const Template = ({}) => {
  const router = useRouter();

  const data = coursedata[router.query.slug];

  return (
    <>
      {!router.isFallback || router.isReady ? (
        <>
          <Layout>
            {data ? (
              <>
                <Hero {...data.hero} />

                <div className="relative">
                  <QuestionForm />

                  <Intro {...data.intro} />

                  <Highlights highlights={data.highlight} />

                  <Technologies technology={data.technology} />

                  <Fee {...data.fee} />

                  <Prerequisites />

                  <Advantages />

                  <Topics topics={data.topics} />

                  <Courses />

                  <Faqs faq={data.faq} />

                  <Reviews reviews={data.reviews} />
                </div>
              </>
            ) : (
              <>
                <NotFound />
              </>
            )}
          </Layout>
        </>
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default Template;
