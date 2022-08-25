import { Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Index: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <button onClick={() => navigate('/')} className="btn btn-accent">
          Back Home
        </button>
      }
    />
  )
}

export default Index
