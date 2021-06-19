import { FunctionComponent } from 'react'
import styles from './styles.module.css'

export const Button: FunctionComponent = ({ children }) => {
  return <button className={styles.btn}>{children}</button>
}
