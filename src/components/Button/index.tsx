import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { BaseButton } from 'components/BaseButton'
import { ButtonProps } from './types'
import cx from 'classnames'

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  color = 'gray-light',
  className,
  ...rest
}) => {
  return (
    <BaseButton
      className={cx([
        styles.btn,
        { [styles[`btn-${color}`]]: color },
        className,
      ])}
      {...rest}
    >
      {children}
    </BaseButton>
  )
}
