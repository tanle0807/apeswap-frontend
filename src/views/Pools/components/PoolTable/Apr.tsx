import React from 'react'
import styled from 'styled-components'
import { Address } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { Flex } from '@apeswapfinance/uikit'
import useI18n from 'hooks/useI18n'
import ApyButton from '../../../../components/ApyCalculator/ApyButton'

export interface AprProps {
  poolApr?: string
  tokenAddress?: Address
  quoteTokenAddress?: Address
  bananaPrice?: BigNumber
  originalValue?: number
  hideButton?: boolean
  earnToken?: string
  apr?: BigNumber
  rewardTokenPrice?: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: #ffb300;
      }
    }
  }

  width: 184px;
`

const AprWrapper = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 200;
  font-family: 'Titan One';
`

const Apr: React.FC<AprProps> = ({ hideButton = false, poolApr, earnToken, rewardTokenPrice, apr }) => {
  const TranslateString = useI18n()

  return poolApr !== '0' ? (
    <Container>
      {poolApr ? (
        <Flex justifyContent="center" className="noClick">
          <AprWrapper>{poolApr}%</AprWrapper>
          {!hideButton && (
            <ApyButton
              lpLabel={earnToken}
              rewardTokenName={earnToken}
              addLiquidityUrl="https://app.apeswap.finance/swap"
              rewardTokenPrice={new BigNumber(rewardTokenPrice)}
              apy={apr.div(100)}
            />
          )}
        </Flex>
      ) : (
        <AprWrapper>{TranslateString(656, 'Loading...')}</AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>{poolApr}%</AprWrapper>
    </Container>
  )
}

export default Apr
