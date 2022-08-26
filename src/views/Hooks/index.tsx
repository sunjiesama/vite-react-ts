import { GetUser } from '@/apis/index'
import React, { useEffect } from 'react'
const Index: React.FC = () => {
  useEffect(() => {
    void GetUser().then((res) => {
      if (res.username !== null) {
        res.username = ''
      }
    })
  })
  return (
    <div>
      <button className="btn btn-accent">button</button>
    </div>
  )
}
export default Index
