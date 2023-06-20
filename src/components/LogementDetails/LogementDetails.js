import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { Collapsible } from '../Buttons/Collapse';


export function LogementDetails() {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);

  useEffect(() => {
    import('./../../logement/logement.json').then(data => {
        const foundLogement = data.default.find(logement => logement.id === id);
        setLogementDetails(foundLogement);
      });
    }, [id]);

    function Rating({ score }) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
            stars.push(<FontAwesomeIcon key={i} icon={fullStar} />);
            } 
            else {
            stars.push(<FontAwesomeIcon className='withoutRating' key={i} icon={fullStar} />);
            }
        }
        return <div>{stars}</div>;
        }

  if (!logementDetails) {
    return <div>Rechargez la page...</div>;
  }

  return (
    <div className='logement'>
        <div>
            <div className='logement__content'>
                <img className='logement__picture' src={logementDetails.cover} alt={logementDetails.title} />
            
            <h2 className='logement__title'>{logementDetails.title}</h2>
            <h3 className='logement__location'>{logementDetails.location}</h3>
            <ul>
                {logementDetails.tags.map(tag => (
                <li className='logement__tag' key={tag}>{tag}</li>
                ))}
            </ul>
                <div className='ratingAndName'>
                    <div>
                        <Rating score={logementDetails.rating} />
                    </div>
                    <div className='nameAndPicture'>
                        <p className='nameAndPicture__name'>{logementDetails.host.name}</p>
                        <img className='nameAndPicture__picture' src={logementDetails.host.picture}></img>
                    <div>
                </div>
            </div>
            </div>
            <Collapsible title="Description">
          <p>{logementDetails.description}</p>
        </Collapsible>
        <Collapsible title="Équipements">
        <ul className='stuffList'>
            {logementDetails.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
            ))}
        </ul>
        </Collapsible>
            </div>
        </div>
    </div>
  );
}
