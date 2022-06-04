import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "../components/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" p="10" alignItems="center">
    <Image src={imageUrl} width={500} height={300} alt="Banner" />
    <Box p="5">
      <Text color="white" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        {title1}
        <br /> {title2}
      </Text>
      <Text
        fontSize="lg"
        fontWeight="medium"
        paddingTop="3"
        paddingBottom="3"
        color="white"
      >
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="#fec234">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box bgColor="#37435b">
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Condos, Villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Own Your Luxurious"
        title2="Dream Home"
        desc1="Explore Houses, Villas, Cottages"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
