import React, { PureComponent } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'

import Logo from '../../images/logo.png'
import Button from '../Button'
import Menu from '../SvgIcon/icons/Menu'
import Search from '../SvgIcon/icons/Search'
import Close from '../SvgIcon/icons/Close'
import Language from '../SvgIcon/icons/Language'

import './HeaderNavbar.scss'

const LanguageIcon = <Language />
const SearchIcon = <Search />

const body = document.body
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
let lastScroll = 0

class HeaderNavbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  renderLink = ({ link, label }, index) => (
    <NavItem key={index}>
      <NavLink href={link}>{label}</NavLink>
    </NavItem>
  )

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset
      if (currentScroll === 0) {
        body.classList.remove(scrollUp)
        return
      }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {})
  }

  onOpenSidebar = () => {
    this.setState({
      isMenuOpen: true,
    })
  }

  onCloseSidebar = () => {
    this.setState({
      isMenuOpen: false,
    })
  }

  renderNavbar = (item, index) => (
    <Trans
      i18nKey={index}
      defaults={item.label}
    >
      <li key={index} className='nav-item'>  
        <a className='nav-link' href={item.link}>
          one
        </a>
      </li>
    </Trans>
  )

  render() {
    const { t } = this.props
    const { isMenuOpen } = this.state
    const isMobile = window.innerWidth <= 768
    const list = Array.from(t('menuItemList', { returnObjects: true }))

    return (
      <div className='headerNavbar'>
        <Container>
          <Row>
            <Col>
              <Navbar expand='md'>
                <div>
                  <NavbarBrand href='/'>
                    <img src={Logo} alt='Core Chain' />
                  </NavbarBrand>
                </div>
                {isMobile ? (
                  <div>
                    <a onClick={this.onOpenSidebar}>
                      <Menu />
                    </a>
                    <div
                      className={
                        isMenuOpen
                          ? 'headerNavbar_sidebar open'
                          : 'headerNavbar_sidebar'
                      }
                    >
                      <Container>
                        <Col className='headerNavbar_sidebar__header'>
                          <NavbarBrand href='/'>
                            <img src={Logo} alt='Core Chain' />
                          </NavbarBrand>
                          <a onClick={this.onCloseSidebar}>
                            <Close />
                          </a>
                        </Col>
                        <Nav navbar >
                          {list.map(this.renderNavbar)}
                        </Nav> 
                        <div className='headerNavbar_sidebar__search'>
                          <Button
                            text={t('language')}
                            theme='ghosMAt'
                            size='extraSmall'
                            hover={false}
                            href='/language'
                            type='router'
                            onClick={this.onCloseSidebar}
                          />
                        </div>
                        <Button
                          mobileFullWidth
                          theme='green'
                          text={t('get started')}
                          type='router'
                          href='/get-started'
                        />
                      </Container>
                    </div>
                  </div>
                ) : (
                  <div className='headerNavbar_flex'>
                  <Nav navbar >
                      {list.map(this.renderNavbar)} 
                    </Nav> 
                    <div className='headerNavbar_left'>
                      <Button
                        icon={SearchIcon}
                        theme='ghost'
                        size='extraSmall'
                        hover={false}
                        href='/search'
                        type='router'
                      />

                      <Button
                        icon={LanguageIcon}
                        theme='ghost'
                        size='extraSmall'
                        hover={false}
                        href='/language'
                        type='router'
                      />
                      <Button
                        theme='green'
                        text={t('get started')}
                        type='router'
                        href='/get-started'
                      />
                    </div>
                  </div>
                )}
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(HeaderNavbar)
