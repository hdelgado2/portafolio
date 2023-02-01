import React,{ useState } from 'react'
import { useEffect } from 'react'


const Footer = () => {
    const [first, setfirst] = useState(0)

    useEffect(() => {
        setfirst(new Date().getFullYear())
    }, [first])
    

  return (
    <>
    <div className="copyright py-4 text-center text-white">
    <div className="container"><small>Copyright © Your Website {first}</small></div>
    </div>
    </>
  )
}

export default Footer