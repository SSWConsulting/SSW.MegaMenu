import React from "react";
import styles from './index.module.css';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import MenuPanel from './menu-panel';

const DesktopMenu = (props) => {
  return (
    <div className={cs(styles.menuDrop, styles.hiddenXs, styles.hiddenSm)}>
      <ul>
        {props.menuModel &&
          props.menuModel.menuItems.map((item, index) => {
            return (
              <li key={index}>
                {!item.children && (
                  <a
                    href={item.navigateUrl ? item.navigateUrl : null}
                    className={cs(styles.ignore, 'unstyled')}
                  >
                    {item.text}
                  </a>
                )}{' '}
                {item.children && (
                  <>
                    <div
                      role="presentation"
                      className={cs(
                        styles.ignore,
                        styles['cursor-pointer'],
                        styles['inline-block'],
                        'unstyled',
                      )}
                    >
                      {item.text} <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.Menu}>
                      <MenuPanel item={item} prefix={props.prefix} />
                    </div>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default DesktopMenu;
