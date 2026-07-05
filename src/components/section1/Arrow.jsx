import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Arrow = () => {
  return (
    <div className="relative">
      <MoveUpRight className="absolute bottom-6 left-6 w-10 h-10" />
    </div>
  )
}

export default Arrow