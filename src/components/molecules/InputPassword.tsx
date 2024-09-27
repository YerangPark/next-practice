import { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputPasswordProps {
  formLabel: string;
  placeHolder: string;
  value: string;
  onChange: (arg: string) => void;
  isDisabled?: boolean;
  invalidCheck?: boolean;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  formLabel,
  placeHolder,
  value,
  onChange,
  isDisabled = false,
  invalidCheck = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,16}$/;
    return regex.test(password);
  };

  const handleChange = (value: string) => {
    onChange(value);
    // invalidCheck가 true일 때만 유효성 검사 수행
    if (invalidCheck) {
      setIsValid(validatePassword(value));
    }
  };

  return (
    <FormControl mb={4} isInvalid={invalidCheck && !isValid}>
      <Flex align="center">
        <FormLabel mb="0" width="150px">
          {formLabel}
        </FormLabel>
        <InputGroup flex="1">
          <Input
            placeholder={placeHolder}
            value={value}
            type={showPassword ? "text" : "password"}
            isDisabled={isDisabled}
            onChange={(e) => handleChange(e.target.value)}
            maxLength={16}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              size="sm"
              onClick={togglePasswordVisibility}
              variant="ghost"
              isDisabled={isDisabled}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
      {invalidCheck && !isValid && (
        <FormErrorMessage>
          8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputPassword;