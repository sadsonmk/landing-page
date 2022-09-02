import React from 'react'
import { Button } from '../ButtonElements'
import { DataContainer, DataWrapper, DataRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './DataElements'
// import { ReactComponent as Imga } from "../../images/svg-1.svg"


const DataSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt }) => {
  return (
    <>
      <DataContainer lightBg={lightBg} id={id}>
        <DataWrapper>
          <DataRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home' prim='true' dark='true' >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
                {/* <Img /> */}
              </ImgWrap>
            </Column2>
          </DataRow>
        </DataWrapper>

      </DataContainer>

    </>
  )
}

export default DataSection