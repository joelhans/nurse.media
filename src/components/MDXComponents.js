import Image from 'next/image'
import CustomLink from './Link'
import Button from '@components/mdx/Button'
import Clients, { Client } from '@components/mdx/Clients'
import ContactForm from '@components/mdx/ContactForm'
import CTA from '@components/CTA'
import { Callout, Subhead, Tags, Tag } from '@components/mdx/Typography'
import WorkItem from '@components/mdx/WorkItem'

const MDXComponents = {
  Image,
  a: CustomLink,
  Button,
  Callout,
  Clients,
  Client,
  ContactForm,
  CTA,
  Subhead,
  Tags,
  Tag,
  WorkItem,
}

export default MDXComponents
