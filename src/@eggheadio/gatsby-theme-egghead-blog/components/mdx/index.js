import React from 'react'

import Title from '@eggheadio/gatsby-theme-egghead-blog/src/components/mdx/Title'
import Paragraph from '@eggheadio/gatsby-theme-egghead-blog/src/components/mdx/Paragraph'
import Code from '@eggheadio/gatsby-theme-egghead-blog/src/components/mdx/Code'
import { CodeSandbox } from 'mdx-embed'
import Callout from '../../../../components/Callout'

export default {
  h1: (props) => <Title {...props} />,
  'li.p': (props) => (
    <Paragraph style={{ display: 'inline-block' }} {...props} />
  ),
  p: (props) => <Paragraph {...props} />,
  code: Code,
  pre: (preProps) => <pre {...preProps} />,
  CodeSandbox,
  Callout,
}
