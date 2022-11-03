import styles from './Aside.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faThLarge,faHome } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu';

const cx = classNames.bind(styles);

function Aside() {
    const dataMenu = [
        { 
            to: '/admin',iconLeft: <FontAwesomeIcon icon={faThLarge} />,iconRight: <FontAwesomeIcon icon={faAngleDown}/>,text: 'Trang chủ',active: false,
            children: [
                {to: '/1',text: 'Children 0'},
                {to: '/2',text: 'Children 1'},
                {to: '/3',text: 'Children 2'},
                {to: '/4',text: 'Children 3'},
                {to: '/5',text: 'Children 4'},
            ]
        },
        {to: '/admin2',iconLeft: <FontAwesomeIcon icon={faHome} />,text: 'Trang chủ 2'}
    ];

    return (  
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src='https://slidesigma.nyc/templatemonster/react/mylo/assets/img/logo-dark.png' alt=''/>
            </div>

            <Menu className={cx('menu')} data={dataMenu}>
                
            </Menu>
        </div>
    );
}

export default Aside;