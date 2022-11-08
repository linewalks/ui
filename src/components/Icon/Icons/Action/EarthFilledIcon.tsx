import React from 'react'

import SVGIcon, { SVGIconProps } from '@components/Icon/Icons/SVGIcon'
import svgRotate from '@src/helpers/svgRotate'

interface IconProps extends SVGIconProps {
  rotate?: number
}

const EarthFilledIcon = (props: IconProps) => {
  const { viewBox, rotate } = props

  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        d="M11.8533 4.00132L12 4C12.0951 4 12.1898 4.00166 12.2841 4.00495L12 4L12.1608 4.00158L12.4463 4.01224L12.6748 4.02806L12.8094 4.04044L13.0966 4.07454L13.2728 4.10069C17.087 4.71127 20 8.01545 20 12C20 15.8941 17.2178 19.1383 13.5327 19.8533L13.2528 19.9025L12.9864 19.9398L13.2728 19.8988L13.1086 19.9235L12.8095 19.9595L12.494 19.985L12.2794 19.9952L11.9976 20L11.6607 19.9929L11.3252 19.9719L11.1906 19.9596L10.9034 19.9255L10.7272 19.8993C6.91303 19.2887 4 15.9846 4 12C4 8.10592 6.78224 4.86168 10.4673 4.14667L10.7384 4.09891C10.8299 4.08442 10.9219 4.07147 11.0144 4.06011L10.7274 4.10082C10.8365 4.08334 10.9463 4.06807 11.0569 4.05507L11.1905 4.04045L11.3781 4.02383L11.0896 4.05123L11.2723 4.03265L11.5582 4.01199L11.8533 4.00132ZM11.8167 2.00164L12 2C12.1189 2 12.2372 2.00207 12.3551 2.00619L12 2L12.201 2.00198L12.5579 2.0153L12.8435 2.03507L13.0118 2.05055L13.3707 2.09317L13.591 2.12587C18.3587 2.88909 22 7.01931 22 12C22 16.8676 18.5222 20.9229 13.9159 21.8167L13.566 21.8781L13.2329 21.9247L13.5911 21.8736L13.3857 21.9044L13.0119 21.9494L12.6175 21.9812L12.3492 21.994L11.997 22L11.5759 21.9912L11.1565 21.9649L10.9882 21.9494L10.6293 21.9068L10.409 21.8741C5.64128 21.1109 2 16.9807 2 12C2 7.13241 5.4778 3.07709 10.0841 2.18334L10.423 2.12364C10.5374 2.10552 10.6524 2.08934 10.7681 2.07513L10.4093 2.12602C10.5456 2.10417 10.6829 2.08509 10.8211 2.06884L10.9882 2.05057L11.2227 2.02979L10.862 2.06404L11.0904 2.04081L11.4477 2.01499L11.8167 2.00164ZM14.42 16.0008H9.57999C10.0082 17.4393 10.6615 18.781 11.4989 19.9849C11.665 19.9948 11.8319 20 12 20C12.1681 20 12.335 19.9948 12.5005 19.9846C13.3385 18.781 13.9918 17.4393 14.42 16.0008ZM18.9291 16.0012L16.4957 16.0009C16.1962 17.1643 15.7691 18.2765 15.2303 19.3216C16.7866 18.6334 18.0827 17.4637 18.9291 16.0012ZM7.5043 16.0009L5.07093 16.0012C5.91729 17.4637 7.2134 18.6334 8.77013 19.3212C8.23061 18.2759 7.80371 17.164 7.5043 16.0009ZM7.12377 10.0002L4.25187 10.0006C4.08745 10.6397 4 11.3096 4 12C4 12.6907 4.08754 13.361 4.25213 14.0004L7.12391 14.001C7.04213 13.3455 7 12.6777 7 12C7 11.3227 7.04208 10.6553 7.12377 10.0002ZM14.8582 9.99998H9.14178C9.04834 10.6532 9 11.321 9 12C9 12.6794 9.04839 13.3475 9.14192 14.001H14.8581C14.9516 13.3475 15 12.6794 15 12C15 11.321 14.9517 10.6532 14.8582 9.99998ZM19.7481 10.0006L16.8762 10.0002C16.9579 10.6553 17 11.3227 17 12C17 12.6777 16.9579 13.3455 16.8761 14.001L19.7479 14.0004C19.9125 13.361 20 12.6907 20 12C20 11.3096 19.9126 10.6397 19.7481 10.0006ZM8.76937 4.67904L8.72443 4.69915C7.18769 5.38969 5.9084 6.55117 5.07035 7.99984L7.50409 7.99992C7.80354 6.83648 8.23057 5.72426 8.76937 4.67904ZM12 4C11.8319 4 11.665 4.00518 11.4995 4.0154C10.6613 5.21928 10.0079 6.56127 9.57969 8.00021H14.4203C13.9921 6.56127 13.3387 5.21928 12.5011 4.01508C12.335 4.00518 12.1681 4 12 4ZM15.2299 4.67879L15.3054 4.82564C15.809 5.82806 16.2104 6.89072 16.4959 7.99991L18.9296 7.99984C18.0833 6.53684 16.787 5.36673 15.2299 4.67879Z"
        transform={svgRotate(rotate, viewBox)}
      />
    </SVGIcon>
  )
}

EarthFilledIcon.defaultProps = {
  viewBox: '0 0 24 24',
  rotate: 0,
}

export default EarthFilledIcon
