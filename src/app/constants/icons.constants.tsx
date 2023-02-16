import { ImagePath } from "../assets/images"

export const LogoImage = () => {
  return <>
    <img src={ImagePath.LogoSVG} alt='Logo' style={{
      backgroundColor: "#fff",
      overflowClipMargin: 'content-box',
      overflow: 'clip',
    }} />
  </>
}
