import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const UserButtonWithMenu: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    localStorage.removeItem('token')
    await router.push('/')
  }

  return (
    <Menu>
      <MenuButton as={Button} bg="white" border="1px solid" borderColor="gray.200">
        <Icon as={FaUser} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        <MenuItem>개인정보 수정</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserButtonWithMenu