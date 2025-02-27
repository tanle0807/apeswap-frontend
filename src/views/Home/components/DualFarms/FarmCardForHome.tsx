import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Skeleton, Image } from '@apeswapfinance/uikit'
import { DualFarm } from 'state/types'

interface DualFarmProps {
  farm: DualFarm
}

const PCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  width: 316px;
  height: 90px;
  background-color: ${({ theme }) => (theme.isDark ? '#27262c' : '#faf9fa')};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 15px;
  @media screen and (max-width: 350px) {
    width: 295px;
    margin-right: 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0px;
  }
`

const StyledBackground = styled(Flex)`
  width: 135px;
  height: 90px;
  background: rgb(255, 179, 0, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`

const IconImage = styled(Image)`
  align: center;
  width: 40px;
  height: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 60px;
    height: 60px;
  }
`

const IconQuoteToken = styled(Image)`
  align: center;
  width: 20px;
  height: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 35px;
    height: 35px;
  }
`

const IconRewardToken = styled(Image)`
  align: center;
  width: 25px;
  height: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 35px;
    height: 35px;
  }
`

const IconArrow = styled(Image)`
  align: center;
  width: 5px;
  height: 5px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 10px;
    height: 10px;
  }
`

const DescriptionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 145px;
  width: 190px;
  height: 60px;
`
const ApyWrapper = styled.div`
  width: 160px;
  display: flex;
  margin-top: 7.5px;
  z-index: 1;
`

const ApyText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  display: flex;
  margin-right: 2.5px;
  align-items: center;
  letter-spacing: 1px;
`

const ApyNumber = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 20px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 1px;
`

const StyledHeading = styled(Heading)`
  font-size: 20px;
  ${({ theme }) => theme.mediaQueries.xs} {
    text-align: start;
  }
`

const FarmCardForHome: React.FC<DualFarmProps> = ({ farm }) => {
  return (
    <PCard>
      <StyledBackground>
        <IconImage
          src={`/images/tokens/${farm?.stakeTokens?.token1?.symbol}.svg`}
          alt={farm?.stakeTokens?.token1?.symbol}
          width={50}
          height={50}
          marginLeft="7.5px"
        />
        <IconQuoteToken
          src={`/images/tokens/${farm?.stakeTokens?.token0?.symbol}.svg`}
          alt={farm?.stakeTokens?.token0?.symbol}
          width={25}
          height={25}
          marginLeft="-15px"
          marginTop="30px"
        />
        <IconArrow src="/images/arrow.svg" alt="arrow" width={10} height={10} marginRight="4px" marginLeft="2px" />
        <IconRewardToken
          src={`/images/tokens/${farm?.rewardTokens?.token0?.symbol}.svg`}
          alt={farm?.rewardTokens?.token0?.symbol}
          width={27}
          height={27}
          marginRight="-5px"
          marginBottom="30px"
        />
        <IconRewardToken
          src={`/images/tokens/${farm?.rewardTokens?.token1?.symbol}.svg`}
          alt={farm?.rewardTokens?.token1?.symbol}
          width={27}
          height={27}
          marginTop="20px"
          marginRight="7.5px"
        />
      </StyledBackground>
      <DescriptionContainer>
        <StyledHeading fontFamily="Titan One">
          {farm?.stakeTokens?.token0?.symbol}-{farm?.stakeTokens?.token1?.symbol}
        </StyledHeading>
        <ApyWrapper>
          <ApyText>APR:</ApyText>
          <ApyNumber>
            {farm?.apr?.toFixed(2) !== 'NaN' ? (
              <ApyNumber>{farm?.apr?.toFixed(2)}%</ApyNumber>
            ) : (
              <Skeleton width="80px" />
            )}
          </ApyNumber>
        </ApyWrapper>
      </DescriptionContainer>
    </PCard>
  )
}

export default FarmCardForHome
