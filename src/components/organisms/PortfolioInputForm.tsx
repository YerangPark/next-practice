import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Image, Input, Select, Tag, Textarea, Text, Flex, Divider } from '@chakra-ui/react'
import PortfolioInputFooter from '../molecules/PortfolioInputFooter'

const PortfolioInputForm: React.FC = () => {
  const [portfolioName, setPortfolioName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [blogLink, setBlogLink] = useState('')
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [techStackOptions] = useState(['React', 'Node.js', 'TypeScript'])

  const handleTechStackSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    if (selected && !selectedTechStack.includes(selected)) {
      setSelectedTechStack([...selectedTechStack, selected])
    }
  }

  return (
    <Box px={8}>
      <Text fontSize="xl" fontWeight="bold" mt={3}>기본 설정</Text>
      <Divider my={2} />
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel mb="0" width="200px">포트폴리오 이름</FormLabel>
          <Input placeholder="포트폴리오 이름을 입력하세요" value={portfolioName} onChange={e => setPortfolioName(e.target.value)} />
        </Flex>
      </FormControl>
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel mb="0" width="200px">상부 타이틀</FormLabel>
          <Input placeholder="상부 타이틀을 입력하세요" value={title} onChange={e => setTitle(e.target.value)} />
        </Flex>
      </FormControl>
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel mb="0" width="200px">메인 소개글</FormLabel>
          <Textarea placeholder="메인 소개글을 입력하세요" value={description} onChange={e => setDescription(e.target.value)} />
        </Flex>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>대표 사진</FormLabel>
        {image && <Image src={image} alt="대표 사진 미리보기" boxSize="200px" mb={4} />}
        <Button variant="outline" onClick={() => setImage('/images/sample.jpg')}>대표 사진 추가</Button>
      </FormControl>

      <Text fontSize="xl" fontWeight="bold" mt={10} >임베드 링크</Text>
      <Divider my={2} />
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel mb="0" width="200px">깃허브 링크</FormLabel>
          <Input placeholder="깃허브 링크를 입력하세요" value={githubLink} onChange={e => setGithubLink(e.target.value)} />
        </Flex>
      </FormControl>
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel mb="0" width="200px">블로그 링크</FormLabel>
          <Input placeholder="블로그 링크를 입력하세요" value={blogLink} onChange={e => setBlogLink(e.target.value)} />
        </Flex>
      </FormControl>

      <Text fontSize="xl" fontWeight="bold" mt={10}>기술 스택</Text>
      <Divider my={2} />
      <FormControl mb={4}>
        <FormLabel>기술 스택 검색</FormLabel>
        <Input placeholder="기술 스택을 검색하세요" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>기술 스택 선택</FormLabel>
        <Select placeholder="기술 스택을 선택하세요" onChange={handleTechStackSelect}>
          {techStackOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </FormControl>
      <Box mt={4}>
        <FormLabel>선택된 기술 스택</FormLabel>
        {selectedTechStack.map(stack => (
          <Tag key={stack} colorScheme="teal" variant="solid" mr={2}>{stack}</Tag>
        ))}
      </Box>
    </Box>
  )
}

export default PortfolioInputForm