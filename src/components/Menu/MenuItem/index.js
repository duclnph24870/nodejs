import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
import Button from '../../Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem ({ data }) {
    const [active,setActive] = useState(data.active);

    return (  
        <>
            <NavLink 
                to={data.to} 
                className={(nav) => cx('menuItem',{active: nav.isActive})}
                onClick = {() => {
                    setActive((curr) => !curr);
                }}
            >
                <Button IconLeft={data.iconLeft && data.iconLeft} IconRight={data.iconRight && data.iconRight} className={cx('item')}>{data.text}</Button>
            </NavLink>

            {data.children && active && 
                data.children.map((item,index) => {
                    return <NavLink 
                        to={item.to} 
                        className={(nav) => cx('menuItem',{active: nav.isActive,child: active})}
                        key={index}
                    >
                        <Button className={cx('item')}>{item.text}</Button>
                    </NavLink>
                })
            }
        </>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object
}

export default MenuItem ;