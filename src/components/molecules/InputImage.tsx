import { Box, Button, FormControl, FormLabel, Image } from "@chakra-ui/react"

interface InputImageProps {
  formLabel: string
  image: string
  alt: string
  onClick: (img: string)=>void
  buttonLabel: string
}


const InputImage: React.FC<InputImageProps>  = ({ formLabel, image, alt, onClick, buttonLabel }) => {
  return (
    <FormControl mb={4}>
      <Box display="flex" alignItems="center">
        <FormLabel mb="0" width="150px">{formLabel}</FormLabel>
        <Box display="flex" alignItems="center">
          {image && <Image src={image} alt={alt} boxSize="150px" mr={4} />}
          <Button variant="outline" onClick={() => onClick('/images/notebook.jpg')}>{buttonLabel}</Button>
        </Box>
      </Box>
    </FormControl>
  )
}

export default InputImage