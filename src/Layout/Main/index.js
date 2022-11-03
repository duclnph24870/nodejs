import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Main({children}) {
    return ( 
        <div className={cx('wrapper')}>
         {children}
        </div>
     );
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main;