import React, { useEffect, useState } from 'react'
import { Image, ImageProps } from '@mantine/core'

type Props = {
  fallbackSrc: string
} & ImageProps

const ImageWithFallback = (props: Props) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error('can not fetch image')
      })
      .catch((err) => {
        setImgSrc(fallbackSrc)
      })
  }, [src])

  return (
    <>
      <Image
        {...rest}
        src={imgSrc}
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
        alt=''
      />
    </>
  )
}

export default ImageWithFallback
