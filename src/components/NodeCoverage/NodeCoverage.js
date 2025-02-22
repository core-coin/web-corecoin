import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import Button from '../Button'
import './NodeCoverage.scss'
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow'

class NodeCoverage extends PureComponent {
    static propTypes = {
        blockchainHeight: string,
        networkHashrate: string,
        networkDifficulty: string,
        circulatingSupply: string,
        marketCap: string,
        priceUsd: string,
    }

    static defaultProps = {
        blockchainHeight: "",
        networkHashrate: "",
        networkDifficulty: "",
        circulatingSupply: "",
        marketCap: "",
        priceUsd: "",
    }

    renderDigit = (item, index) => (
        <div className='nodeCoverage_block__cards-card' key={index}>
            <span>{item}</span>
        </div>
    )

    render(){
        const { t, blockchainHeight, networkDifficulty, circulatingSupply, marketCap, priceUsd } = this.props;

        return(
            <div className='nodeCoverage'>
                <Container>
                    <Row>
                        <Col sm='12' lg={{ size: 12 }}>
                            <h3 className='preTitle'>{t('Core Network')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='Planet covered by Blockchain'>
                                    Planet covered by <em>Blockchain</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('Core Blockchain can operate on various platforms and environments - including mesh networks, satellite streams, mobile internet connection, and more.')}</p>
                        </Col>
                        <div className='custom_col'>
                            <div className='custom_row'>
                                <div className="block-container">
                                    <div className='nodeCoverage_block nodeCoverage_block_first'>
                                        <h2>{t('ICAN Address')}</h2>
                                        <p>{t('Introducing a user-friendly, secure crypto address standard, bolstering transaction reliability. Discover dependable, community-friendly blockchain addresses that align with modern financial solutions. Incorporating checksums minimizes address entry errors. ICAN adopts familiar financial standards for simplicity.')}</p>
                                       <div className='text-center power-by'>
                                           <AnimatedArrow text={t('Read more about ICAN')} url='https://cip.coreblockchain.net/cip/cbc/cip-100' targetBlack/>
                                       </div>
                                    </div>
                                </div>
                                <div className="block-container">
                                    <div className='nodeCoverage_block'>
                                        <h2>{t('Statistics')}</h2>
                                        <ul>
                                            <li>
                                                {t('Blockchain Height')}:
                                                <span>{blockchainHeight}</span>
                                            </li>
                                            <li>
                                                {t('Network Difficulty')}:
                                                <span>{networkDifficulty}h/s</span>
                                            </li>
                                            <li>
                                                {t('Circulating Supply')}:
                                                <span>{circulatingSupply}</span>
                                            </li>
                                            <li>
                                                {t('Market Cap')}:
                                                <span>{marketCap}</span>
                                            </li>
                                            <li>
                                                {t('Price')}:
                                                <span>{priceUsd}</span>
                                            </li>
                                        </ul>
                                        <div className='text-center power-by'>
                                            <AnimatedArrow text={t('Core Denomination Units')} url='https://github.com/core-coin/core-denomination/blob/master/units.json' targetBlack />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Col className='text-center transaction-explorer'>
                                <Button
                                  theme='green'
                                  size='normal'
                                  text={t('Transaction Explorer')}
                                  type={'href'}
                                  href='https://blockindex.net/'
                                />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(NodeCoverage)
