import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu ({ data,className }) {
    return (  
        <div className={cx('wrapper',{
            [className]: className,
        })}>
            {data.map((item,index) => {
                
                return  (
                    <>
                        <MenuItem data={item} key={index}></MenuItem>
                    </>
                    );
            })}
        </div>
    );
}

Menu.propTypes = {
    data: PropTypes.array,
}

export default Menu;