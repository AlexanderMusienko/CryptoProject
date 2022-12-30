import { Stack } from '@chakra-ui/react'
import React from 'react'

export default function PageLayout({children}) {

  return (
    <Stack overflow={'hidden'}>{children}</Stack>
  )
}
