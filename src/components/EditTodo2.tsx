import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'

const EditTodo2 = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [body, setBody] = React.useState('');

  const initialRef = React.useRef()

  return (
    <FormControl>
      <Input ref={initialRef} placeholder='Digite sua tarefa' defaultValue={todo.description} onChange={(e) => setBody(e.target.value)} onFocus={(e) => setBody(e.target.value)} />
    </FormControl>
  )
}

export default EditTodo2