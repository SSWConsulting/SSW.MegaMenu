
type CustomImageProps = React.ImgHTMLAttributes<HTMLImageElement>;


export const CustomImage = (props: CustomImageProps) => {
  return (
    <img {...props} />
  )
}