import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { BaseButtonProps } from './types'

export const BaseButton: FunctionComponent<BaseButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button className={styles.baseBtn} {...rest}>
      {children}
    </button>
  )
}
