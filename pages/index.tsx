import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeArticleTeaser } from "../pages/node--article--teaser"

interface IndexPageProps {
  nodes: DrupalNode[]
}
const RESOURCE_TYPES = [
  "node--article",
]

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Stanford Web Camp</title>
        <meta
          name="description"
          content="Next Js Demo."
        />
      </Head>
      <h1 className="mb-10 text-6xl font-black">Stanford Web Camp 2023.</h1>
      <div className="flex flex-col md:flex-row">
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          storybookData.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {

  // if (resource.type === "node--article") {
  //   // Fetch featured articles.
  //   additionalContent["featuredArticles"] =
  //     await drupal.getResourceCollectionFromContext("node--article", context, {
  //       params: getParams("node--article", "card")
  //         .addFilter("id", resource.id, "<>")
  //         .addPageLimit(3)
  //         .addSort("created", "DESC")
  //         .getQueryObject(),
  //     })
  // }
  
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image, uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      nodes
    },
  }
}
const storybookData = [{
  id: '1',
  title: 'Article1', 
  image:'/sites/default/files/styles/wide/public/2023-05/1679841789953.jpeg?itok=vg1sKJ_4'
},
{
  id: '2',
  title: 'Article2',
  image:'/sites/default/files/styles/wide/public/2023-05/1679841789953.jpeg?itok=vg1sKJ_4'
},
{
  id: '3',
  title: 'Article3',
  image:'/sites/default/files/styles/wide/public/2023-05/1679841789953.jpeg?itok=vg1sKJ_4'
}];