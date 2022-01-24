import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

// import Logo from '../../images/logo.webp'
import Plus from '../SvgIcon/icons/Plus'
import Cube from '../SvgIcon/icons/Cube'
import Cryptohub from '../SvgIcon/icons/Cryptohub'
import Github from '../SvgIcon/icons/Github'
import Discord from '../SvgIcon/icons/Discord'
import Twitter from '../SvgIcon/icons/Twitter'
import { isMobile } from '../../utils'

import './Footer.scss'

class Footer extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isContactOpen: false,
            isLinksOpen: false,
            isDevOpen: false,
            isMobile: isMobile()
        }
    }

    onToggleContact = (e) => {
        e.preventDefault()
        this.setState({
            isContactOpen: !this.state.isContactOpen,
        })
    }

    onToggleDev = (e) => {
        e.preventDefault()
        this.setState({
            isDevOpen: !this.state.isDevOpen,
        })
    }

    onToggleLinks = (e) => {
        e.preventDefault()
        this.setState({
            isLinksOpen: !this.state.isLinksOpen,
        })
    }

    updateIsMobile = () => {
        this.setState({isMobile:isMobile()});
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateIsMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }

    render(){
        const { t } = this.props

        const { isContactOpen, isDevOpen, isLinksOpen } = this.state

        return(
          <div>
              {this.state.isMobile ? (
                <div>
                    <Col sm='12'>
                        <Row className="contact-container">
                            <Col xs='12'>
                                <p className="title">Get in touch</p>
                            </Col>
                            <Col xs='12' className={isContactOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleContact} className='toggle_header'>{t('Contact')} <Plus/></a>
                                <Collapse isOpen={isContactOpen} className='toggle_content'>
                                    <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                                </Collapse>
                            </Col>
                            <Col xs='12' className={isDevOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleDev} className='toggle_header'>{t('Development')} <Plus/></a>
                                <Collapse isOpen={isDevOpen} className='toggle_content'>
                                    <a href='/'>{t('Developer Portal')}</a>
                                    <a href='/'>{t('mprovementProposals')}</a>
                                    <a href='/'>{t('Core Talk')}</a>
                                </Collapse>
                            </Col>
                            <Col xs='12' className={isLinksOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleLinks} className='toggle_header'>{t('Useful links')}<Plus/></a>
                                <Collapse isOpen={isLinksOpen} className='toggle_content'>
                                    <a href='/'>{t('Open-source License')}</a>
                                    <a href='/'>{t('Report bug')}</a>
                                    <a href='/'>{t('tradeMark')}</a>
                                    <a href='/'>{t('Brand identity')}</a>
                                    <div className='icons'>
                                        <a href='/'><Cube/></a>
                                        <a href='/'><Cryptohub/></a>
                                        <a href='/'><Github/></a>
                                        <a href='/'><Discord/></a>
                                        <a href='/'><Twitter/></a>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                    </Col>
                    <div className='footer_mobile'>
                        <p className='text-center footer_copyright_mobile'>{t('Copyright © 2018-2021 Core Foundation. All Rights Reserved.')}</p>
                    </div>
                </div>
              ) : (
                <div className='footer'>
                    <div className='footer_contact'>
                        <Container>
                            <div className='footer_container'>
                                <Col md="4">
                                    <p className="title">Get in touch</p>
                                    <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                                    <div className='footer_contact__icons'>
                                        <a href='/'><Cube /></a>
                                        <a href='/'><Cryptohub /></a>
                                        <a href='/'><Github /></a>
                                        <a href='/'><Discord /></a>
                                        <a href='/'><Twitter /></a>
                                    </div>
                                </Col>
                                <Row>
                                    <Col md="6" className='footer_contact_section'>
                                        <p className="title">{t('Useful links')}</p>
                                        <a href='/'>{t('Open-source License')}</a>
                                        <a href='/'>{t('Report bug')}</a>
                                        <a href='/'>{t('tradeMark')}</a>
                                        <a href='/'>{t('Brand identity')}</a>
                                    </Col>
                                    <Col md="6" className='footer_contact_section'>
                                        <p className="title">{t('Development')}</p>
                                        <a href='/'>{t('Developer Portal')}</a>
                                        <a href='/'>{t('Core Improvement Proposals')}</a>
                                        <a href='/'>{t('Core Talk')}</a>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <div className='footer_copyright'>
                        <Container>
                            <Row>
                                <Col>
                                    <p>{t('Copyright © 2018-2021 Core Foundation. All Rights Reserved.')}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                  )}
          </div>
        )
    }
}

export default withNamespaces()(Footer)
