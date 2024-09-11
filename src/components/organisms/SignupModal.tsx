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
  FormLabel,
  VStack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import Button from "../atoms/Button";
import { useState, ChangeEvent, useEffect } from "react";
import { FaCheckCircle } from 'react-icons/fa';

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

// 폼 데이터 타입 정의
interface FormData {
  username: string;
  name: string;
  email: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
}

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, openLoginModal }) => {
  // 사용자 입력 상태 관리
  const initialFormData: FormData = {
    username: "",
    name: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // 에러 메시지 상태 추가
  const [isSignupSuccess, setIsSignupSuccess] = useState<boolean>(false); // 회원가입 성공 여부
  const [shakeKey, setShakeKey] = useState<number>(0);

  // 입력 값 변경 시 상태 업데이트
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 폼 제출 시 처리할 로직
  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      setShakeKey(prev => prev + 1);
      return;
    }
    try {
      const response = await fetch("http://yrpark.duckdns.org:8080/api/user/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          name: formData.name,
          email: formData.email,
          birthdate: formData.birthdate,
          password: formData.password
        }),
        mode: "cors",
      });

      const data = await response.json()
      if (response.ok) {
        setErrorMessage(null);  // 에러 메시지 초기화
        setIsSignupSuccess(true);
        handleReset()
      } else if (response.status === 409 && data.error.code === "USERNAME_TAKEN") {
        setErrorMessage("이미 사용중인 아이디입니다.");
        setShakeKey(prev => prev + 1);
      } else if (response.status === 409 && data.error.code === "EMAIL_TAKEN") {
        setErrorMessage("이미 사용중인 이메일입니다.");
        setShakeKey(prev => prev + 1);
      }
      else {
        setErrorMessage("회원 가입에 실패했습니다.");
        setShakeKey(prev => prev + 1);
      }
    } catch (error) {
      console.log("에러 발생")
    }
  }

  // 폼 데이터를 초기화하는 함수
  const handleReset = () => {
    setFormData(initialFormData);
    setErrorMessage(null);  // 에러 메시지 초기화
  };

  // 모달을 닫을 때 폼을 초기화
  const handleClose = () => {
    handleReset();  // 모달을 닫을 때 초기화
    onClose();      // 모달 닫기 함수 호출
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {!isSignupSuccess ? (
          <>
            <ModalHeader>회원가입</ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                {errorMessage && (
                  <Alert
                    status="error"
                    animation={`${shake} 0.5s`}
                    key={shakeKey}>
                    <AlertIcon />
                    <AlertTitle>{errorMessage}</AlertTitle>
                  </Alert>
                )}

                <FormControl>
                  <FormLabel>아이디</FormLabel>
                  <Input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="아이디 입력"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>이름</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름 입력"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>이메일</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일 입력"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>생년월일</FormLabel>
                  <Input
                    name="birthdate"
                    type="date"
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>비밀번호</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호 입력"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <Input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="비밀번호 확인 입력"
                  />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button color="white" bg="brand.primary1" width="100%" onClick={handleSubmit} label="회원가입" />
            </ModalFooter>

            <ModalFooter justifyContent="center">
              <Text fontSize="sm" color="gray.500">
                <a href="#" onClick={() => { handleClose(); openLoginModal(); }}>
                  아이디가 이미 있으신가요?
                </a>
              </Text>
            </ModalFooter>
          </>
        ) : (
          <ModalBody textAlign="center">
            <Box py={6}>
              <Icon as={FaCheckCircle} w={12} h={12} color="green.500" />
              <Text fontSize="2xl" mt={4}>
                회원가입이 완료되었습니다!
              </Text>
              <Text fontSize="lg" mt={2} color="gray.600">
                이제 로그인 하실 수 있습니다.
              </Text>
              <Button
                color="white"
                bg="brand.primary1"
                width="100%"
                onClick={() => {
                  handleClose();
                  openLoginModal();
                }}
                label="로그인 하러 가기"
                mt={6}
                />
            </Box>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;