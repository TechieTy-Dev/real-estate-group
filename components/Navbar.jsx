import Link  from "next/link";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'

const Navbar = () => (
  <Flex p="4" borderColor="gray.200" bg="wheat">
    <Box fontSize="3xl" color="#333333" fontWeight="bold">
      <Link href="/" paddingLeft="2"
      >Ty Real Estate Group</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} alt="Drop Down Menu" icon={<FcMenu />} varient="outlined" />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buying</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Renting</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar;