import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const BoxIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M10.5913 1.37472C11.0197 1.12923 11.5055 1 12 1C12.4945 1 12.9802 1.12922 13.4086 1.37469L13.4103 1.37564L20.5897 5.45387C20.944 5.65718 21.2486 5.9341 21.4834 6.26459C21.5357 6.31393 21.5818 6.37146 21.6197 6.43665C21.6529 6.49361 21.6778 6.55304 21.6949 6.6136C21.8947 7.00518 21.9995 7.43865 22 7.87916V16.0364C21.9995 16.5281 21.8689 17.0118 21.6214 17.4375C21.3739 17.8632 21.0181 18.2167 20.5897 18.4625L20.5868 18.4642L13.4103 22.5407L13.4086 22.5417C13.097 22.7203 12.7549 22.8373 12.4012 22.8879C12.2844 22.959 12.147 23 12 23C11.853 23 11.7156 22.959 11.5988 22.8879C11.2451 22.8373 10.903 22.7202 10.5913 22.5416L10.5897 22.5407L3.41323 18.4642L3.41026 18.4625C2.98191 18.2167 2.62613 17.8632 2.3786 17.4375C2.13107 17.0118 2.00051 16.5289 2 16.0372V7.87994C2.00045 7.43937 2.10533 7.00506 2.30522 6.61344C2.32229 6.55293 2.34721 6.49355 2.38032 6.43665C2.41823 6.37151 2.46432 6.31401 2.51655 6.2647C2.75136 5.93416 3.05599 5.6572 3.41026 5.45388L3.41322 5.45218L10.5913 1.37472ZM12.7692 21.1434L19.8205 17.138L19.8218 17.1373C20.016 17.0256 20.1772 16.8652 20.2894 16.6721C20.402 16.4786 20.4613 16.2591 20.4615 16.0356V7.98603L12.7692 12.4094V21.1434ZM11.2308 12.4094V21.1434L4.17949 17.138L4.17817 17.1373C3.98405 17.0256 3.82281 16.8652 3.71055 16.6721C3.5981 16.4787 3.53876 16.2594 3.53846 16.036V7.98601L11.2308 12.4094ZM12.644 2.70178L19.6539 6.68368L12 11.0849L4.34613 6.68367L11.356 2.70178L11.359 2.70008C11.5539 2.58823 11.775 2.52934 12 2.52934C12.225 2.52934 12.4461 2.58823 12.641 2.70008L12.644 2.70178Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

BoxIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default BoxIcon
