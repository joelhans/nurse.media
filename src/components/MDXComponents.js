import Image from 'next/image'
import CustomLink from './Link'
import Button from '@components/mdx/Button'
import Clients, { Client } from '@components/mdx/Clients'

const MDXComponents = {
  Image,
  a: CustomLink,
  Button,
  Clients,
  Client,
}

export default MDXComponents
