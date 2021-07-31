import Image from 'next/image'
import CustomLink from './Link'
import Button from '@components/mdx/Button'
import Clients, { Client } from '@components/mdx/Clients'
import ContactForm from '@components/mdx/ContactForm'
import { Subhead } from '@components/mdx/Typography'

const MDXComponents = {
  Image,
  a: CustomLink,
  Button,
  Clients,
  Client,
  ContactForm,
  Subhead,
}

export default MDXComponents
