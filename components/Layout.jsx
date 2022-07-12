import Head from 'next/head'
import {Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }) {
return(
  <>
  <Head>
    <title>
      UAE Real Estate Group</title>
      <html lang='en' />
      <meta name="description" content="UAE Real Estate Group specialized in selling and renting luxorious Apartments, Condos, and Homes."/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="UTF-8"/>

      
  </Head>
  <Box maxWidth="1280px" m="auto">
    <header>
      <Navbar />
    </header>
    <main>
     
      {children}
      </main>
    
    <footer>
      <Footer />
    </footer>
  </Box>
  </>
)

}