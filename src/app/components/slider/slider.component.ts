import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  images = [
    'https://media.istockphoto.com/id/1345043834/es/v%C3%ADdeo/la-consejera-da-consejos-durante-una-sesi%C3%B3n-de-terapia-en-l%C3%ADnea.jpg?s=640x640&k=20&c=frQwAc5yrzII0IKK0gxlr6_pPGSEYJ25ly9EahosNXs=',
    'https://media.istockphoto.com/id/1304961896/es/v%C3%ADdeo/telemedicina-y-terapia-en-l%C3%ADnea-m%C3%A9dico-consultor-de-pacientes-de-c%C3%A1ncer-sobre-videollamada.jpg?s=640x640&k=20&c=iU4wcL8rZimmljjvM0U2H6svOANwGrMs4D38wPLb-fs=',
    'https://media.istockphoto.com/id/1370632975/es/v%C3%ADdeo/el-paciente-de-terapia-seria-atenta-escucha-los-consejos-del-terapeuta.jpg?s=640x640&k=20&c=Oy0Fq8LxT3GuWDNrJJ5MdJHmwZCXg0jK4R5H9i3I-V4=',
    'https://media.istockphoto.com/id/1223387274/es/v%C3%ADdeo/jovencita-hablando-con-psic%C3%B3logo-en-l%C3%ADnea-durante-la-consulta-de-asesoramiento-por-webcam.jpg?s=640x640&k=20&c=BeeVgj9jiZ5tv24WaiLYSj8C_2eTzycUygx2BYzcznM=',
    'https://media.istockphoto.com/id/1395851060/es/v%C3%ADdeo/una-mujer-irreconocible-teniendo-una-sesi%C3%B3n-de-terapia-con-un-psic%C3%B3logo-primer-plano-de-un.jpg?s=640x640&k=20&c=UCIrkA1rUS1cZjbpngbj-RV_V90vWmFapBBH_hUwbDw=',
    'https://media.istockphoto.com/id/1316268911/es/v%C3%ADdeo/mujer-vulnerable-habla-con-profesional-de-salud-mental.jpg?s=640x640&k=20&c=JExalyeVYSVsL0Tw_jCgthkaT0ewvkQSMpu94NIWJ_s=',
    'https://media.istockphoto.com/id/1317225074/es/v%C3%ADdeo/consejera-y-personas-sentadas-en-c%C3%ADrculo-durante-una-sesi%C3%B3n-de-terapia-grupal.jpg?s=640x640&k=20&c=Ihr3gVLO7_Q1EU-PwifaTCIh5t_wh0dxur8icLysmdM=',
    'https://media.istockphoto.com/id/1370953204/es/v%C3%ADdeo/la-consejera-escolar-femenina-da-consejos-durante-el-grupo-de-apoyo-para-adolescentes.jpg?s=640x640&k=20&c=96g5-ULeSiQE8MyXfsbhhkVCZGVmcOAbZM5p7Vd9Eck='
  ];
  currentIndex = 0;
  intervalId: number | undefined; // Stores the timer reference

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer(); // Clear the timer when component is destroyed
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change this value to adjust slide transition interval (in milliseconds)
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
