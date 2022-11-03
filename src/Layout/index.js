import Aside from './Aside';
import Main from './Main';
import PropTypes from 'prop-types';
import styles from './LayoutAdmin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Aside/>
            <Main children={children}/>
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AdminLayout;