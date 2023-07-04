import React from 'react'
import { Banner } from '../../components/Banner'
import { Collapsible } from '../../components/Buttons/Collapsible'
import bannerAbout from './../../components/images/bannerAbout.jpg'

export function About() {
  return (
    <>
    <section className='about'>
      <div className='about__banner'>
        <Banner image={bannerAbout}/>
      </div>
      <div className='about__collapsible'>
        <Collapsible classText="about__collapsible__components" title='Fiabilité'>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.</p></Collapsible>
        <Collapsible classText="about__collapsible__components" title='Respect'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Collapsible>
        <Collapsible classText="about__collapsible__components" title='Service'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme.</p> </Collapsible>
        <Collapsible classText="about__collapsible__components" title='Sécurité'><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes.</p> </Collapsible>
      </div>
    </section>
    </>
    
  )
}
