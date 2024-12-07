import PageOverlayed from '@/components/layout/PageOverlayed'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const page = () => {
  return (
    <PageOverlayed>
     <PageHeader text="Latest from 255" subtext="Stay up-to-date with our latest blog posts."/>
    </PageOverlayed>
  )
}

export default page