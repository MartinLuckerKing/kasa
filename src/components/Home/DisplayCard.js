import data from './../../logement/logement.json'; // Adaptez cela à l'emplacement de votre fichier JSON.
import { Card } from './Card'

export function DisplayCard() {
  return (
    <div className="home">
      {data.map(logement => <Card key={logement.id} logement={logement} />)}
    </div>
  );
}