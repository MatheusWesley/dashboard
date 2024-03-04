import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';

export const NetPromoterScore = () => {
  return (
    <div className="box nps grid">
        <div className="top text-center">NPS geral</div>
        <div className="middle grid">
          <IonIcon icon={logoGithub} className="icon" />
          Excelente
        </div>
        <div className="bottom">
          <span>NPS Score</span>
          <span>75</span>
        </div>
      </div>
  )
}