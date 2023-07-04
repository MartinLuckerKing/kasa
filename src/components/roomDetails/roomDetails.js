import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { Collapsible } from '../Buttons/Collapsible';
import { Error404 } from '../../pages/Error/404';
import { Slider } from '../Slider/Slider'; 


export function LogementDetails() {
  const { id } = useParams();
  const [roomDetails, setLogementDetails] = useState(null);

  useEffect(() => {
    import('../../logement/logement.json').then(data => {
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

  if (roomDetails) {
  return (
    <div className='room'>
        <div>
            <section className='room__content'>
                <Slider />
              <div className='room__info'>
                <div className='room__titleUnderTitleTag'>
                  <h2 className='room__title'>{roomDetails.title}</h2>
                  <h3 className='room__location'>{roomDetails.location}</h3>
                  <ul>
                      {roomDetails.tags.map(tag => (
                      <li className='room__tag' key={tag}>{tag}</li>
                      ))}
                  </ul>
                </div>
                    <div className='ratingAndName'>
                        <div className=''>
                            <Rating score={roomDetails.rating} />
                        </div>
                        <div className='nameAndPicture'>
                            <p className='nameAndPicture__name'>{roomDetails.host.name}</p>
                            <img className='nameAndPicture__picture' src={roomDetails.host.picture} alt=''></img>
                        <div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <div className='room__collapsible'>
          <div className="collapsibleWrapper">
          <Collapsible title="Description" classText="test">
          <p>{roomDetails.description}</p>
        </Collapsible>
        </div>
        <div className="collapsibleWrapper">
        <Collapsible title="Équipements" classText="test">
        <ul className='stuffList'>
            {roomDetails.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
            ))}
        </ul>
        </Collapsible>
        </div>
        </div>
            </div>
            </div>
  );
}
else {
  return <Error404 />
}
}