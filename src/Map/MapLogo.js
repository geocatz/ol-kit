import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { LogoContainer, Logo, LogoText } from './styled'
import OL_KIT_MARK from 'images/ol_kit_mark.svg'
import OL_KIT_MARK_BLACK from 'images/ol_kit_mark_black.svg'
import { connectToMap } from 'Map'; // eslint-disable-line

/**
 * A map control container with built-in positioning
 * @component
 * @category Controls
 * @since 0.1.0
 */
function MapLogo (props) {
  const { logoPosition, translations } = props
  const [isHovered, setHovered] = useState(false)

  return (
    logoPosition === 'none'
      ? null
      : (
        <LogoContainer position={logoPosition}>
          <LogoText>{translations['_ol_kit.logo.title']}</LogoText>
          <Logo
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={translations['_ol_kit.logo.title']}
            href='https://ol-kit.com/'
            target='_blank'>
            {isHovered
              ? <OL_KIT_MARK />
              : <OL_KIT_MARK_BLACK />
            }
          </Logo>
        </LogoContainer>
      )
  )
}

MapLogo.defaultProps = {
  logoPosition: 'right'
}

MapLogo.propTypes = {
  logoPosition: PropTypes.string,
  translations: PropTypes.object
}

export default MapLogo
