import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav, Dropdown } from "react-bootstrap";
import {
  AppHeaderDropdown,
  AppSidebarToggler,
  // @ts-ignore
} from '@coreui/react';
import { Link } from 'react-router-dom';

import logo from "../../Assets/logo.svg";
import avatar from "../../Assets/avatar.jpg";

interface Props {
  locale: string,
  onChangeLanguage: (locale: string) => void,
  showAvatar: boolean
}

class AdminHeader extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleLanguage(eventKey: string) {
    this.props.onChangeLanguage(eventKey);
  }
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <span className="navbar-brand">
        <img src={logo} width="32" height="35" alt="Core-ui app" />
        <span><FormattedMessage id="Scuti asia" /></span>
        </span>
        <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FormattedMessage id={this.props.locale} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onSelect={this.handleLanguage}
                    eventKey="vi"
                    active={this.props.locale === 'vi' && true}
                  >
                    <FormattedMessage id="Vietnameses" />
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={this.handleLanguage}
                    eventKey="en"
                    active={this.props.locale === 'en' && true}
                  >
                    <FormattedMessage id="English" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {this.props.showAvatar && <AppHeaderDropdown>
                <NavDropdown title={
                  <img src={avatar} className="img-avatar" alt='avatar'/>
                }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item ><Link to="/admin/logout"><FormattedMessage id="Logout" /></Link></NavDropdown.Item>
                </NavDropdown>
              </AppHeaderDropdown>}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}



export default AdminHeader;
