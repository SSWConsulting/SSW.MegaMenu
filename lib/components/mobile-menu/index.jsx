import React, { useEffect } from 'react';
import styles from './index.module.css';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = (props) => {
  const [menuModel, setMenuModel] = React.useState(null);

  useEffect(() => {
    if (!menuModel) {
      fetch('https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json')
        .then(res => res.json())
        .then((response) => {
          setMenuModel(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [])

  return (
    <div
      ref={props.innerRef}
      className={cs(styles.sbSlidebar, styles.sbLeft, props.className)}
      style={{ left: props.isMenuOpened ? '0' : '-84vw' }}
      onClick={(event) => openItem(event)}
    >
      <div className={cs(styles.menuDrop, styles.navbarCollapse)}>
        <ul className={styles.navbarNav}>
          {menuModel &&
            menuModel.menuItems.map((item, index) => 
              <MenuItems item={item} key={index} />
            )}
        </ul>
      </div>
    </div>
  );
}

const MenuItems = ({ item }) => {
  if (!item.children || item.navigateUrlOnMobileOnly) {
    return (
      <li className={styles.dropdown}>
        <a
          href={item.navigateUrl ? item.navigateUrl : null}
          className={cs(styles.ignore, 'unstyled')}
        >
          {item.text}
        </a>
      </li>
    );
  } else if (item.children) {
    return (
      <li className={styles.dropdown}>
        <div role="presentation" className={cs(styles.dropdownToggle)}>
          {item.text} <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul className={styles.dropdownMenu}>
          {item.children.map((item, index) => 
            <MenuItems item={item} key={index} />
          )}
        </ul>
      </li>
    );
  }

  return <></>;
}

const closeOpenedElements = (element) => {
  var openedItems = document.getElementsByClassName(cs(styles.dropdown, styles.open));
  for (let item of openedItems) {
    if (item !== element.parentNode?.parentNode) {
      item.className = styles.dropdown;
    }
  }
}

const closeElement = (element) => {
  element.className = styles.dropdown;
}

const openElement = (element) => {
  closeOpenedElements(element);
  element.className = cs(styles.dropdown, styles.open);
}

const openItem = (event) => {
  if (event.target.parentNode.className === styles.dropdown) {
    closeOpenedElements(event.target.parentNode);
    openElement(event.target.parentNode);
  } else if (event.target.parentNode.parentNode.className === styles.dropdown) {
    closeOpenedElements(event.target.parentNode);
    openElement(event.target.parentNode.parentNode);
  } else if (event.target.parentNode.className === cs(styles.dropdown, styles.open)) {
    closeElement(event.target.parentNode);
  } else if (
    event.target.parentNode.parentNode.className === cs(styles.dropdown, styles.open)
  ) {
    closeElement(event.target.parentNode.parentNode);
  }
}

export default React.forwardRef((props, ref) => <MobileMenu innerRef={ref} {...props} />);
