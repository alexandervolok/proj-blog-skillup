import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './menu.css'

class Menu extends Component {
    
    state = {
        showMenu: false
    }

    toggleMenu = () => {
        this.setState ({
            showMenu: !this.state.showMenu
        })
    }
        render () {
            return (
                <div className="menu">
                  <button onClick={this.toggleMenu} className="menu_button" />
                  {this.state.showMenu ? (
                    <ul className="menu_items">
                      <li className="menu-item">
                        <Link to="/travel" onClick={this.toggleMenu}>
                          {" "}
                          Travel{" "}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/fashion" onClick={this.toggleMenu}>
                          {" "}
                          Fashion{" "}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/lifestyle" onClick={this.toggleMenu}>
                          {" "}
                          Lifestyle{" "}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about" onClick={this.toggleMenu}>
                          {" "}
                          About me{" "}
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </div>
              );
            }
          }

export default Menu