import data from '../../logement/logement.json';
import { Card } from '../../components/Card'
import { Banner } from '../../components/Banner';
import bannerHome from './../../components/images/bannerHome.jpg'


export function Home() {
  return (
    <div className="home">
      <div className='home__banner'>

        <Banner image={bannerHome}
        
        text={'Chez vous, partout et ailleurs'}
        textStyle={'home__banner__text'}
        />
        </div> 

      <div className='home__card__container'>
        {data.map(logement => 
          <Card key={logement.id} logement={logement} />
        )}
      </div>
    </div>
  );
}
