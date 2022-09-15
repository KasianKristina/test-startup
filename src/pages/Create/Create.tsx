import { FC } from 'react'

import { CreateWatchlist } from 'ui/CreateWatchlist'
import { Menu } from 'ui/Menu'

import styles from './styles.module.scss'

export const Create: FC = () => {
  return (
    <div className={styles.Create}>
      <div className={styles.Create__menu}>
        <Menu />
      </div>
      <div className={styles.Create__content}>
        <CreateWatchlist />
      </div>
    </div>
  )
}