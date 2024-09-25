import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  VStack,
  Text,
} from "@chakra-ui/react"
import { useState, ChangeEvent, useEffect } from "react"
import Button from "../atoms/Button"

interface DeletePortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  portfolioId: number
  portfolioFileName: string
}

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const DeletePortfolioModal: React.FC<DeletePortfolioModalProps> = ({ isOpen, onClose, portfolioId, portfolioFileName }) => {
  const [deleteMessage, setDeleteMessage] = useState<string>("")
  const [isButtonDisabled, setButtonDisabled] = useState(true)

  useEffect(()=>{
    if (deleteMessage === portfolioFileName) {
      setButtonDisabled(false)
    }
    else {
      setButtonDisabled(true)
    }
  }, [deleteMessage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeleteMessage(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${apiUrl}/api/portfolio/${portfolioId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        mode: "cors"
      })
      if (response.ok) {
        console.error(`삭제 성공`)
      } else {
        console.error(`삭제 실패`)
      }
    } catch (error) {
      console.error(`error: ${error}`)
    }
  }

  const handleClose = () => {
    setDeleteMessage("")
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="">포트폴리오 삭제</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            '{portfolioFileName}' 포트폴리오를 삭제하시겠습니까?
          </Text>
          <Text color="brand.text2">
            삭제 작업을 되돌릴 수 없으므로 신중히 삭제해주세요.
            삭제하려면 '{portfolioFileName}' 텍스트를 하단에 작성한 후 삭제 버튼을 눌러주세요.
          </Text>
            <FormControl>
              <Input
                type="text"
                placeholder={portfolioFileName}
                value={deleteMessage}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              width="100%"
              onClick={handleSubmit}
              color="white"
              bg="brand.danger"
              children="삭제"
              isDisabled={isButtonDisabled}
              mb="4"
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DeletePortfolioModal