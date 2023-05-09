import { DrupalNode } from "next-drupal"
import {Article} from "components/article/article"
import { absoluteUrl, formatDate } from "lib/utils"
import PropTypes from 'prop-types';

interface NodeArticleTeaserProps {
  node: DrupalNode
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  console.log('?', node);
  return (
    <article {...props}>
      <Article
        title={node.title}
        image={absoluteUrl(node.field_image?.uri.url?node.field_image?.uri.url: node.image)}
        buttonText={node.title}
      />
    </article>

  )
}
NodeArticleTeaser.propTypes = {
  /**
   * IndexPage
   */
  nodes: PropTypes.string,
};