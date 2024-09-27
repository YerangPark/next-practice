import { useState } from "react"
import InputTextbox from "../molecules/InputTextbox"
import InputPassword from "../molecules/InputPassword"
import InputDate from "../molecules/InputDate"

interface AccountFormProps {
  name: string
  birthdate: string
  email: string
  username: string
  password: string
  confirmPassword: string
  setName: (arg: string) => void
  setBirthdate: (arg: string) => void
  setEmail: (arg: string) => void
  setPassword: (arg: string) => void
  setConfirmPassword: (arg: string) => void
}


const AccountForm: React.FC<AccountFormProps> = ({
  name,
  birthdate,
  email,
  username,
  password,
  confirmPassword,
  setName,
  setBirthdate,
  setEmail,
  setPassword,
  setConfirmPassword
  }) => {
  const [showPassword, setShowPassword] = useState(false)


  return (
    <>
      <InputTextbox formLabel="아이디" placeHolder="" value={username} isDisabled={true} />
      <InputPassword formLabel="비밀번호" placeHolder="********" value={password} onChange={setPassword} invalidCheck={true}/>
      <InputPassword formLabel="비밀번호 확인" placeHolder="********" value={confirmPassword} onChange={setConfirmPassword} />
      <InputTextbox formLabel="이메일" placeHolder="" value={email} onChange={setEmail} />
      <InputTextbox formLabel="이름" placeHolder="" value={name} onChange={setName} />
      <InputDate formLabel="생년월일" value={birthdate} onChange={setBirthdate} />
    </>
  )
}

export default AccountForm