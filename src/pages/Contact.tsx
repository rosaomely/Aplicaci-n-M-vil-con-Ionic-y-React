import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton, IonText } from '@ionic/react';
import { logoWhatsapp, logoGithub, mailOpen, send } from 'ionicons/icons';
import React from 'react';

const Contact: React.FC = () => {
  const sendMessage = () => {
    alert('Funcionalidad de envío (Aquí iría integración con email o SMS)');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h3>Ubicación</h3>
          <h3>Contactame a través de mis redes o el formulario de contacto:</h3>
        </IonText>
        
        <IonList>
          <IonItem button={true} detail={false} href="https://wa.me/584123965725" target="_blank">
            <IonIcon icon={logoWhatsapp} slot="start" color="success" />
            <IonLabel>WhatsApp: +58 412 3965725</IonLabel>
          </IonItem>
          <IonItem button={true} detail={false} href="https://github.com/rosaomely" target="_blank">
            <IonIcon icon={logoGithub} slot="start" />
            <IonLabel>GitHub: /rosaomely</IonLabel>
          </IonItem>
          <IonItem button={true} detail={false} href="mailto:omely.palacios@gmail.com">
            <IonIcon icon={mailOpen} slot="start" />
            <IonLabel>omely.palacios@gmail.com</IonLabel>
          </IonItem>
        </IonList>

        <IonButton expand="block" onClick={sendMessage} className="ion-margin-top">
          <IonIcon icon={send} slot="start" />
          Presiona uno de los iconos para enviar un mensaje rápido
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Contact;