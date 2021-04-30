import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons"
import React from "react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import ThemeToggle from "./themeToggle" 

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks {
            name
            slug
          }
        }
      }
    }
  `)
 
  const { navLinks } = data.site.siteMetadata
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
          <Flex as="nav" display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navLinks={navLinks} />
          </Flex>
        </Flex>
        <ThemeToggle />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navLinks={navLinks} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({navLinks}) => {
    const color = useColorModeValue("gray.600", "gray.200")
    const colorHover = useColorModeValue("gray.800", "white")

  return (
    <Stack as="ul" direction={"row"} spacing={4}>
      {navLinks.map((navItem) => (
        <Box as="li" key={navItem.name} listStyleType="none">
          <Link
            as={GatsbyLink}
            p={2}
            to={navItem.slug}
            fontSize={"sm"}
            fontWeight={500}
            color={color}
            activeStyle={{ color: "white", background: "black", borderRadius:"3px" }}
            _hover={{
              textDecoration: "none",
              color: colorHover,
            }}
          >
            {navItem.name}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = ({ navLinks }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navLinks.map((navLink) => (
        <MobileNavItem key={navLink.name} {...navLink} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ name, slug }) => {
  const { onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={ onToggle}>
      <Flex
        py={2}
        as={GatsbyLink}
        to={slug} 
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none", 
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {name}
        </Text>
      </Flex>
    </Stack>
  )
}

export default NavBar; 