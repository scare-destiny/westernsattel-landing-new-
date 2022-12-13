import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Text,
	Box,
	Table,
	Tbody,
	Tr,
	Th,
	Td,
} from '@chakra-ui/react'

const ContactFormModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='full'
				closeOnOverlayClick={true}
			>
				<ModalContent
					bg='hsl(210deg,15%,6%)'
					padding='72px 16px 0px'
					color='whiteAlpha.900'
					pb='128px'
				>
					<ModalHeader fontSize='3xl' mb='32px' textAlign='center' p='0'>
						Danke für Deine Kontaktanfrage - wir melden uns in Kürze!
					</ModalHeader>
					<ModalCloseButton color='white' size='lg' />
					<ModalBody p='0' fontSize='xl'>
						<Text mb='5'>
							Bewerte jetzt Dein Nutzererlebnis auf unserer Website bei Google und wir
							pflanzen in Deinem Namen einen Baum.
						</Text>
						<Text>Sie sollte in etwa so aussehen:</Text>

						<Box
							maxW='600px'
							m='64px auto 0px'
							bg='rgba(21, 17, 24, 0.6)'
							border='2px dashed gray'
						>
							<Table variant='unstyled' p='16px'>
								<Tbody>
									<Tr>
										<Th scope='col' textAlign='right'>
											from
										</Th>
										<Td>me@joshwcomeau.com</Td>
									</Tr>
									<Tr>
										<Th scope='col' textAlign='right'>
											to
										</Th>
										<Td>zhenya.venger@gmail.com</Td>
									</Tr>
									<Tr>
										<Th scope='col' textAlign='right'>
											subject
										</Th>
										<Td>Important: Confirm your email</Td>
									</Tr>
								</Tbody>
							</Table>
						</Box>
					</ModalBody>

					<ModalFooter>
						{/* <Button variant='ghost'>Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ContactFormModal
