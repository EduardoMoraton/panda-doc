import React from 'react'
import clsx from 'clsx'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from './styles.module.css'
import pandaImage from './../../../static/img/logo_panda.png'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

type FeatureItem = {
  title: string
  icon_name: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast',
    icon_name: 'ant-design:thunderbolt-outlined',
    description: <>Quick reports </>,
  },
  {
    title: 'Reliable',
    icon_name: 'ph:lock',
    description: <>Accurate for each home </>,
  },
  {
    title: 'Accurate',
    icon_name: 'clarity:bullseye-line',
    description: <>We are using the real data from the REE</>,
  },
]

function Feature({ title, icon_name, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon icon={icon_name} className={styles.featureSvg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={'row'}>
            <p></p>
        </div>
      </div>
    </section>
  )
}
