import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import CodeBlock from '@components/mdx/CodeBlock'
import Aside from '@components/mdx/Aside'
import ChecklistProvider from '@components/mdx/ChecklistProvider'
import Checklist from '@components/mdx/Checklist'
import Checkbox from '@components/mdx/Checkbox'
import FontLoader from '@components/mdx/FontLoader'
import Sidenote from '@components/mdx/Sidenote'
import Video from '@components/mdx/Video'
import SignUp from '@components/mdx/SignUp'
import Statement from '@components/mdx/Statement'
import StoryQuote from '@components/mdx/StoryQuote'
import ContactForm from '@components/Contact/ContactForm'
import Clients, { Client } from '@components/mdx/Clients'
import Package, { Body, Get } from '@components/mdx/Package'
import { Callout, Subhead, Price, Tags, Tag } from '@components/mdx/Typography'
import WorkItem from '@components/mdx/WorkItem'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: CodeBlock,
  Aside,
  Checkbox,
  Checklist,
  Callout,
  ChecklistProvider,
  FontLoader,
  Sidenote,
  Video,
  SignUp,
  Statement,
  StoryQuote,
  Callout,
  Clients,
  Client,
  Body,
  Get,
  Subhead,
  Package,
  Price,
  Tags,
  Tag,
  WorkItem,
  ContactForm,
  // wrapper: ({ components, layout, ...rest }) => {
  //   const Layout = require(`../layouts/${layout}`).default
  //   return <Layout {...rest} />
  // },
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
