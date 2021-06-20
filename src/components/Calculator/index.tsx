import { FunctionComponent } from 'react'
import styles from './styles.module.css'
import { Button } from 'components/Button'

export const Calculator: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.display}>
        <span>0</span>
      </div>
      <div className={styles.keyboard}>
        <div className={styles.row}>
          {/* // TODO: estruturar em uma variável e montar Buttons com loops para
          evitar repetição */}
          <Button color="gray-dark" className="flex-1">
            AC
          </Button>
          <Button color="gray-dark" className="flex-1">
            +/-
          </Button>
          <Button color="gray-dark" className="flex-1">
            %
          </Button>
          <Button color="blue" className="flex-1">
            /
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="gray-light" className="flex-1">
            7
          </Button>
          <Button color="gray-light" className="flex-1">
            8
          </Button>
          <Button color="gray-light" className="flex-1">
            9
          </Button>
          <Button color="blue" className="flex-1">
            X
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="gray-light" className="flex-1">
            4
          </Button>
          <Button color="gray-light" className="flex-1">
            5
          </Button>
          <Button color="gray-light" className="flex-1">
            6
          </Button>
          <Button color="blue" className="flex-1">
            -
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="gray-light" className="flex-1">
            1
          </Button>
          <Button color="gray-light" className="flex-1">
            2
          </Button>
          <Button color="gray-light" className="flex-1">
            3
          </Button>
          <Button color="blue" className="flex-1">
            +
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="gray-light" className="flex-2">
            0
          </Button>
          <Button color="gray-light" className="flex-1">
            ,
          </Button>
          <Button color="blue" className="flex-1">
            =
          </Button>
        </div>
      </div>
    </div>
  )
}
