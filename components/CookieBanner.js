import { useEffect, useRef } from 'react'
import { useCookieConsentContext } from '@use-cookie-consent/react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	Text,
	ModalBody,
	Link,
	useDisclosure,
	Button,
	Flex,
	HStack,
	VStack,
	Switch,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import NextLink from 'next/link'

const CookieBanner = ({ modalHeader, modalText }) => {
	useEffect(() => {
		if (!isClientConsentCookieExists()) {
			onOpen()
		}
	}, [])

	const { acceptAllCookies, declineAllCookies, acceptCookies } =
		useCookieConsentContext()
	const { consent } = useCookieConsentContext()

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = useRef(null)

	const generateClientConsentCookie = () => {
		if (!isClientConsentCookieExists()) {
			Cookies.set('COOKIE_CONSENT_PERMISSION', 'true')
		}
	}

	const isClientConsentCookieExists = () => {
		if (Cookies.get('COOKIE_CONSENT_PERMISSION')) {
			return true
		}
		return false
	}

	const toggleMarketingCookies = () => {
		// setCheckedAll(!thirdPartyCookiesChecked)
		!consent.thirdParty
			? acceptCookies({ thirdParty: true })
			: acceptCookies({ thirdParty: false })
	}

	const handleAllCookies = () => {
		acceptAllCookies()
		onClose()
		generateClientConsentCookie()
		location.reload()
	}

	const handleAllCookiesDecline = () => {
		declineAllCookies()
		acceptCookies({ necessary: true })
		onClose()
		generateClientConsentCookie()
		location.reload()
	}

	return (
		<>
			<Modal
				size='sm'
				isOpen={isOpen}
				closeOnOverlayClick={false}
				isCentered
				blockScrollOnMount={false}
				initialFocusRef={initialRef}
			>
				<ModalOverlay />
				<ModalContent ref={initialRef}>
					<ModalHeader>{modalHeader}</ModalHeader>
					<ModalBody>
						<Text size='sm' py={2}>
							{modalText}
						</Text>
						<Flex gap={2}>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Impressum</Link>
							</NextLink>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Datenschutz</Link>
							</NextLink>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Cookie Richtlinien</Link>
							</NextLink>
						</Flex>
						<HStack spacing={8}>
							<Accordion pt='4' allowToggle w='100%'>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Flex alignItems='center' textAlign='left'>
												<AccordionIcon />
												Notwendige Cookies
												<Switch
													isDisabled
													isChecked
													float='right'
													colorScheme='red'
													pos='absolute'
													left='60'
												></Switch>
											</Flex>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										Diese Cookies sind unerlässlich, damit Sie die Website nutzen und ihre
										Funktionen nutzen können. Sie können nicht abgeschaltet werden. Sie
										werden als Antwort auf Anfragen von Ihnen gesetzt, wie z.B. das
										Einstellen Ihrer Datenschutzeinstellungen, das Einloggen oder das
										Ausfüllen von Formularen.
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</HStack>
						<HStack spacing={8}>
							<Accordion allowToggle w='100%'>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Flex alignItems='center' textAlign='left'>
												<AccordionIcon />
												Drittanbieter Cookies
												<Switch
													float='right'
													colorScheme='red'
													pos='absolute'
													left='60'
													onChange={() => toggleMarketingCookies()}
												></Switch>
											</Flex>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										Diese Cookies werden verwendet um externe Medien auf dieser Website
										(in dem Funnel) anzuzeigen und somit Content bereitzustellen. Hierbei
										handelt es sich um Third-Party-Cookies.
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</HStack>
					</ModalBody>
					<VStack alignItems='center' pb='2'>
						<Button w='90%' colorScheme='red' mr={3} onClick={handleAllCookies}>
							Accept All
						</Button>
						<Button w='90%' variant='ghost' onClick={handleAllCookiesDecline}>
							Only Necessary
						</Button>
					</VStack>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CookieBanner
