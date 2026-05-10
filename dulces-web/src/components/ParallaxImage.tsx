import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

type Props = {
  src: string
  alt?: string
  className?: string
}

export default function ParallaxImage({
  src,
  alt,
  className
}: Props) {
  const { scrollY } = useScroll()

  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, -120]
  )

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ y }}
      className={className}
    />
  )
}