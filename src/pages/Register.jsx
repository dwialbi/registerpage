import React from "react"
import {
  VStack,
  Text,
  Input,
  Flex,
  Heading,
  Radio,
  HStack,
  Button,
  InputGroup,
  InputRightElement,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"

const Register = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { isOpen, onOpen, onClose } = useDisclosure()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [value, setValue] = useState("Male")

  const handleUsername = (event) => {
    setUsername(event.target.value)
    
  }
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
 
  

  return (
    <Flex alignItems="center" justifyContent={"center"} height="100vh">
      <VStack align="flex-start" border={"1px"} p="10" rounded={"2xl"} spacing="3" w="450px">
        <Heading mb={"10px"}>Register</Heading>

        {/* Username */}
        <Text fontSize={"13px"}>Username</Text>
        <Input onChange={handleUsername}/>

        {/* Email */}
        <Text fontSize={"13px"}>Email</Text>
        <Input onChange={handleEmail}/>
        

        {/* Password */}
        <Text fontSize={"13px"}>Password</Text>
        <InputGroup size="md" >
          <Input type={show ? "text" : "password"} onChange={handlePassword} pr="4.5rem" />
          <InputRightElement w="4.5rem">
            <Button onClick={handleClick} h="1.75rem" size="sm">{show ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>

        {/* Gender */}
        <Text fontSize={"13px"}>Gender</Text>
        <RadioGroup onChange={setValue} value={value} >
          <HStack>
            <Radio value="Male" size="sm" >Male</Radio>
            <Radio value="Female" size="sm">Female</Radio>
          </HStack>
        </RadioGroup>


        {/* Register */}
        <Flex justifyContent={"center"} w="full" >
        <Button onClick={onOpen} colorScheme="blue" marginTop="20px">Register</Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Username: {username}
                <br/>
                Email: {email}
                <br/>
                Password: {password}
                <br/>
                Gender: {value}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="blue">Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Flex>
  )
}

export default Register
