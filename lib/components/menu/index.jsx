import React from 'react';
import styles from './index.module.css';
import DesktopMenu from './desktop-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cs from 'classnames';

import menu from '@assets/data/menu.json';

const searchUrl = `https://www.google.com.au/search?q=site:ssw.com.au%20`;
class Menu extends React.Component {
  menu_Search(search) {
    if (window) {
      window.open(searchUrl + search);
    }
  }

  handleKeyDownOnMenuSearchInput(event) {
    if (event.key === 'Enter') {
      this.menu_Search(event.target.value);
    }
  }

  render() {
    const { menuModel } = this.props;
    return (
      // this.state.menuModel &&
      <div className={styles.MegaMenu}>
        <div className={styles.menuContent}>
          <div
            className={cs(
              styles.menuMobile,
              styles.visibleXs,
              styles.visibleSm
            )}
          >
            <div
              className={styles.sbToggleLeft}
              onClick={(e) => this.props.onClickToggle(e)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <DesktopMenu
            prefix={this.props.prefix}
            menuModel={menuModel}
          ></DesktopMenu>
          <div className={styles.menuSearch}>
            <input
              type="text"
              className={styles.searchBox}
              onKeyDown={(event) => this.handleKeyDownOnMenuSearchInput(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuModel: menu ?? {},
      menuLoaded: false,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    fetch('https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json')
      .then((res) => res.json())
      .then(function (response) {
        currentComponent.setState({
          menuModel: {
            ...response,
            menuItems: response.menuItems.map((menuItem) => {
              return {
                ...menuItem,
                src: menuItem.groupImageUrl,
              };
            }),
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { menuModel, menuLoaded } = this.state;

    return (
      <Menu menuModel={menuModel} menuLoaded={menuLoaded} {...this.props} />
    );
  }
}

export default Wrapper;
