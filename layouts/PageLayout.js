import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import SectionContainer from '@components/SectionContainer'
import ContentWrap from '@components/ContentWrap'
import ContentHeader from '@components/ContentHeader'
import ContentBody from '@components/ContentBody'
import CTA from '@components/CTA'

export default function PostLayout({ children, frontMatter }) {
  return (
    <>
      <PageSeo url={`${siteMetadata.siteUrl}/articles/${frontMatter.slug}`} {...frontMatter} />
      <SectionContainer>
        <ContentWrap>
          <ContentHeader>{frontMatter.title}</ContentHeader>
          <ContentBody summary={frontMatter.summary}>{children}</ContentBody>
        </ContentWrap>
      </SectionContainer>
    </>
  )
}
