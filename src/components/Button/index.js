import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    className,
    to,
    IconLeft,
    IconRight,
    children,
    disabled,
    pill,
    outline,
    color = 'transparent',
    ...passProps
}) {

    let Component = 'button';
    const props = {
        ...passProps,
    }

    if (to) {
        props.to = to;
        Component = Link;
    }

    if (disabled) {
        // loại bỏ tất cả sự kiện đi khi mà trong trạng thái disabled
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (  
        <Component style={{
            '--color': color
        }} className={cx('wrapper',{
            [className]: className,
            disabled,
            pill,
            outline
        })} {...props}>
            {IconLeft && <span className={cx('iconLeft')}>{IconLeft}</span>}
            {children}
            {IconRight && <span className={cx('iconRight')}>{IconRight}</span>}
        </Component>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    pill: PropTypes.bool,
    outline: PropTypes.bool,
    color: PropTypes.string,
    IconLeft: PropTypes.node,
    IconRight: PropTypes.node,
    children: PropTypes.node,
}

export default Button;