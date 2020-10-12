import React from 'react'
import styles from './styles.module.scss'
import ImdbSvg from '../../../public/static/assets/svgs/imdb.svg'
import Button from '../../ui/Button'

interface TitleProps {
  title?: string
  className?: string
}

const Detail: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <div className={styles.card + ' ' + className}>
      <div className={styles.cardImage}>
        <img src="https://source.unsplash.com/random/270x386" alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.infoHeaderLeft}>
            <img src={ImdbSvg} alt="" />
            <p>8.8</p>
          </div>
          <div className={styles.infoHeaderRight}>
            <Button name="Add to Favorites" type="nobg" />
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.year}>2019</p>
          <h3 className={styles.title}>The Godfather</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit doloremque fuga voluptas neque hic non ea illo fugiat
            enim quos explicabo voluptates delectus et minima culpa quibusdam
            pariatur, atque vero, ipsa nam perferendis, facere cupiditate? Eos
            magni explicabo sint dolores, unde placeat temporibus magnam at
            recusandae, sequi dolorem beatae. Sequi praesentium sunt totam
            voluptatibus quo eius sit saepe sint, molestias architecto nostrum
            optio ullam ipsa qui excepturi dolorem dolor enim vitae in delectus
            incidunt mollitia quaerat. Error, nobis ipsa autem fugit sequi
            nesciunt repellendus minima blanditiis laudantium nisi corporis
            dolor nihil sapiente officiis quisquam quos amet modi corrupti
            eveniet quaerat impedit aliquid. Delectus quasi illo, ad vero iusto
            qui provident velit quo quia iste? Ea quidem eum, ipsum pariatur aut
            reprehenderit dignissimos tempore sunt odio.
          </p>
        </div>
        <div className={styles.infoFooter}>
          <Button name="Action" type="small" />
          <Button name="Biography" type="small" />
          <Button name="Action" type="small" />
          <Button name="Biography" type="small" />
        </div>
      </div>
    </div>
  )
}

export default Detail
