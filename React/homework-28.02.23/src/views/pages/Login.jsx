import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const goToAdmin = () => {
    navigate("/admin");
  }

  return (
    <Button onClick={goToAdmin} variant='contained'>Go Add Category</Button>
  )
}

export default Login