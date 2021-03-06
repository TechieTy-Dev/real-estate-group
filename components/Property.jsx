import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill } from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/invest.jpg'

const Property = ({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="10px"
    paddingLeft="25"
    alignItems="center"
    alignContent="center"
    color="white"
   justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} 
       loading="lazy" width={400} height={260} alt="Cover Photo of a Prestigious Apartment overlooking Dubai"/>
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="#81d4fa">{isVerified && <GoVerified/>}</Box>
            <Text fontWeight="bold" color="white" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar alt="Real Estate Agency Avatar Logo" height="30px" width="30px" src={agency?.logo?.url}></Avatar>
          </Box>
          </Flex>
          <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="#fec234">
            {rooms} <FaBed/> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill/>
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </Text>

      </Box>
    </Flex>
  </Link>
)

export default Property