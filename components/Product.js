import Image from 'next/image'
import styles from './Product.module.scss'
import image from '../public/gallery4.webp'

const Product = () => {
	return (
		<div className={styles.componentContainer}>
			<div className={styles.container}>
				<div className={styles.mySwiper}>
					<div className={`${styles.mainWrapper} ${styles.swiperWrapper}`}>
						<div className={`${styles.main} ${styles.swiperSlide} ${styles.beach}`}>
							<div className={styles.leftSide}>
								<div className={styles.mainWrapper}>
									<h3 className={styles.mainHeader}>Closca Bottle</h3>
									<h1 className={styles.mainTitle}>Beach</h1>
									<h2 className={styles.mainSubtitle}>Price</h2>
								</div>
								<div className={styles.mainContent}>
									<div className={styles.mainContent__title}>
										In 20 years, there could be more plastic in our oceans than fish.
									</div>
									<div className={styles.mainContent__subtitle}>
										Plastic pollution injures more than 100.000 marine animals every
										year.It takes around 450 years for one plastic bottle to decompose.
									</div>
								</div>
								<div className={styles.center}>
									<div className={styles.rightSide__img}>
										<img
											className={styles.imgBg}
											src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530'
											alt=''
										/>
										<img
											className={styles.saddleImg}
											src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
