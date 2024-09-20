import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Input,
  FormControl,
  VStack,
  Text,
  Flex,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  keyframes
} from "@chakra-ui/react"
import { FaUser, FaLock } from "react-icons/fa"
import { useState, ChangeEvent } from "react"
import Button from "../atoms/Button"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  openSignupModal: () => void
  openFindIdModal: () => void
  openFindPasswordModal: () => void
}

interface ErrorResponse {
  success: false
  error: {
    code: string
    message: string
  }
}

interface SuccessResponse {
  success: true
  data: any[]
  token: string
}

type LoginResponse = SuccessResponse | ErrorResponse;

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, openSignupModal, openFindIdModal, openFindPasswordModal }) => {
  // 로그인 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [shakeKey, setShakeKey] = useState<number>(0);

  // 입력 값 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // 폼 제출 핸들러
  const handleSubmit = async () => {
    try {
      console.log(apiUrl);
      const response = await fetch(`${apiUrl}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
        mode: "cors",
      });

      const data: LoginResponse = await response.json()
      if (data.success) {
        console.log("로그인 성공 추후 대시보드 화면으로 이동")
        localStorage.setItem('token', data.token)
        handleReset()
      } else if ((response.status === 401 && data.error.code === "INVALID_CREDENTIALS") ||
        (response.status === 401 && data.error.code === "PASSWORD_MISMATCH")) {
        setErrorMessage('아이디 또는 비밀번호가 틀렸습니다');
        setShakeKey(prev => prev + 1);
      }  else {
        setErrorMessage('로그인에 실패했습니다.');
        setShakeKey(prev => prev + 1);
      }
    } catch (error) {
      setErrorMessage('에러가 발생했습니다.');
      setShakeKey(prev => prev + 1);
    }
  };

  // 폼 데이터 초기화 함수
  const handleReset = () => {
    setFormData({ username: "", password: "" });
  };

  // 모달을 닫을 때 폼 데이터 초기화
  const handleClose = () => {
    handleReset()
    setErrorMessage(null)
    onClose()
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">로그인</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {/* 아이디 입력 */}
            <FormControl>
              <Flex alignItems="center">
                <Icon as={FaUser} color="gray.500" mr={2} />
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="아이디 입력"
                />
              </Flex>
            </FormControl>

            {/* 비밀번호 입력 */}
            <FormControl>
              <Flex alignItems="center">
                <Icon as={FaLock} color="gray.500" mr={2} />
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="비밀번호 입력"
                />
              </Flex>
            </FormControl>

            <Button color="white" bg="brand.primary1" width="100%" onClick={handleSubmit} children="로그인" />
            {errorMessage && (
              <Alert
              status="error"
              animation={`${shake} 0.5s`}
              key={shakeKey}
              >
                <AlertIcon />
                <AlertTitle>{errorMessage}</AlertTitle>
              </Alert>
            )}
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Text fontSize="sm" color="gray.500">
            <a href="#" onClick={() => { handleClose(); openFindIdModal(); }}>아이디 찾기</a> |&nbsp;
            <a href="#" onClick={() => { handleClose(); openFindPasswordModal(); }}>비밀번호 찾기</a> |&nbsp;
            <a href="#" onClick={() => { handleClose(); openSignupModal(); }}>회원가입</a>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;