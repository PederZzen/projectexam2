import React, { useState } from 'react'
import { Image } from 'antd'
import useWindowWidth from '../../../../hooks/useWindowWidth'
import { useEffect } from 'react'
import { Wrapper } from './style'
import placeholder from './placeholder.jpg'

const Media = ({ venue }) => {
    const [visible, setVisible] = useState(false)
    const { windowWidth } = useWindowWidth()
    const [media, setMedia] = useState([])

    useEffect(() => {
        setMedia(venue.media)
    }, [])

    return (
        <Wrapper>
            <Image
                preview={{ visible: false }}
                src={venue.media.length > 0 ? venue.media[0] : placeholder}
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    {venue.media.map((image, idx) => {
                        return <Image src={image} alt={venue.name} key={idx} />
                    })}
                </Image.PreviewGroup>
            </div>
            {windowWidth > 750 ? (
                <div className="gallery">
                    {media.slice(0, 5).map((m, idx) => {
                        if (idx !== 0) {
                            return (
                                <Image
                                    key={idx}
                                    onClick={() => setVisible(true)}
                                    preview={{ visible: false }}
                                    src={venue.media[idx]}
                                    alt={`media-${idx}`}
                                />
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            ) : (
                ''
            )}
        </Wrapper>
    )
}

export default Media
