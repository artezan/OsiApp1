import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ActionSheetController,Platform,ToastController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	 @ViewChild('mySlider') slider: Slides;
	  slides:any;
  segmento:any;
  select= [];
  i=0;
   cucumber: boolean;
   r1:any;
   r2:any;
   r3:any;
   r4:any;
   r5:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {
	this.segmento= 'uno'
    this.slides = [
      {
        id: 'uno'
      },
      {
        id: 'dos'
      },
      {
        id: "tres"
      },
      {
        id: "cuatro"
      },
      {
        id: "cinco"
      }
    ];
    this.r1 = [
    {
      ej1: 'Desplantes',
      ej2: 'Aductores',
      ej3: '',
      detalle: 'Los desplantes son sin peso y los aductores pesados',
      series: '4 series',
      rep1:'30 a 40 pasos ',
      rep2: '12, 10, 8, 6 '

    },
    {
      ej1: 'Sentadilla perfecta ',
      ej2: 'Desplantes banco',
      ej3: '',
      detalle: 'La sentadilla perfecta es con metodo 1 1/2, los despantes son de lado en banco alto',
      series: '4 series',
      rep1:'12 reps',
     rep2: '12 reps'
    },
    {
      ej1: 'Patada glúteo',
      ej2: 'puente glúteo',
      ej3: '',
      detalle: 'Patada para glúteo maquina una pierna, puente para glúteo con isométricos',
      series: '4 series',
      rep1:'15,15,10,10',
      rep2: '12 reps/4iso(8 seg)'

    },
    {
      ej1: 'Patada glúteo',
      ej2: '',
      ej3: '',
      detalle: 'Son en asensos cada serie es de 8,15,25 subiendo de peso y sin descansar entra cada pierna (opcional)',
      series: '3 series',
      rep1:'8,15,25 c/u',
     rep2: ''
    }
    ];

     this.r2 = [
    {
      ej1: 'Jalón al pecho abierto',
      ej2: 'Remo cerrado',
      ej3: '',
      detalle: 'Subir de peso al bajar reps, remo cerrado es en la maquina frente al espejo',
      series: '4 series',
      rep1:'12,10,8,6',
      rep2: '20'

    },
    {
      ej1: 'Pull down con cuerda',
      ej2: 'Remo sentada tríangulo',
      ej3: '',
      detalle: 'Pull down es rápido y con cuerda, el remo es MUY lento',
      series: '4 series',
      rep1:'25 reps',
     rep2: '10 reps'
    },
  {
      ej1: 'Remo trasnuca',
      ej2: 'Remo bajo con maquina abierto',
      ej3: '',
      detalle: 'Remo tras nuca en la máquina y el remo bajo es en la máquina roja',
      series: '4 series',
      rep1:'20 reps',
     rep2: '20 reps'
    },
    {
      ej1: 'Biceps con barra',
      ej2: 'Bíceps con barra invertida',
      ej3: '',
      detalle: 'La barra puede ser con los pesos fijos',
      series: '4 series',
      rep1:'20,20,15,15',
     rep2: '15 reps'
    },
    {
      ej1: 'Biceps tipo martillo',
      ej2: 'biceps en maquina predicador',
      ej3: '',
      detalle: 'Tipo martillo puede ser con cuerda en polea baja o mancuerna',
      series: '4 series',
      rep1:'12 reps',
      rep2: '12 reps'

    }

    ];
     this.r3 = [
    {
      ej1: 'Curl de femoral',
      ej2: 'Puente para glúteo piso',
      ej3: '',
      detalle: 'Subir de peso en cada serie y el puente es pesado en el piso',
      series: '4 series',
      rep1:'30,20,15,10 reps',
      rep2: '10 reps'

    },
    {
      ej1: 'Prensa hasta arriba abierto',
      ej2: 'Curl de femoral una pierna parada',
      ej3: '',
      detalle: 'Prensa hasta arriba, abierto y ligero; curl es parada y pesado',
      series: '4 series',
      rep1:'20 reps',
     rep2: '10 reps'
    },
    {
      ej1: 'Prensa cerrado',
      ej2: 'Desplantes',
      ej3: '',
      detalle: 'Prensa es ligera y los desplantes en Smith',
      series: '4 series',
      rep1:'20 reps',
      rep2: '10 reps'

    },
    {
      ej1: 'Curl de femoral',
      ej2: '',
      ej3: '',
      detalle: 'Es en super serie yo te ayudo <3',
      series: '3 series',
      rep1:'8,10,15,20 y 25( cortas)',
     rep2: ''
    },
    {
      ej1: 'Patada glúteo',
      ej2: 'puente glúteo',
      ej3: '',
      detalle: 'Patada para glúteo maquina una pierna, puente para glúteo con isométricos',
      series: '4 series',
      rep1:'15,15,10,10',
      rep2: '12 reps/4iso(8 seg)'

    }

    ];
     this.r4 = [
    {
      ej1: 'Press horizontal',
      ej2: 'Cristos maquina',
      ej3: 'Press en máquina',
      detalle: 'Es en triserie sin descansar y aumentar de peso en cada una. El press en maquina es la de pecho bajo',
      series: '3 series',
      rep1:'20 reps',
      rep2: '10 reps',
      rep3 : '15 reps'

    },
    {
      ej1: 'Extensión tríceps cuerda invertida',
      ej2: 'Cuerda por atrás de la cabeza',
      ej3: 'Copa con una mano',
      detalle: 'Trata de no morir jaja, sube de peso en cada serie',
      series: '3 series',
      rep1:'20,15,12 reps',
      rep2: '20,15,12 reps',
      rep3 : '20,15,12 reps'
    },
    {
      ej1: 'Press militar',
      ej2: 'Elevación posterior con banco',
      ej3: '',
      detalle: 'Elevación posterior con banco es en el banco alto y te pones viendo hacia el respaldo',
      series: '3 series',
      rep1:'15 reps',
      rep2: '12 reps'

    },
    {
      ej1: 'Elavación lateral dos manos',
      ej2: 'elevación de mancuernas al frente  ',
      ej3: '',
      detalle: '',
      series: '3 series',
      rep1:'15 reps',
     rep2: '15 reps'
    },
    {
      ej1: 'Patada glúteo',
      ej2: 'puente glúteo',
      ej3: '',
      detalle: 'Patada para glúteo maquina una pierna, puente para glúteo con isométricos',
      series: '4 series',
      rep1:'15,15,10,10',
      rep2: '12 reps/4iso(8 seg)'

    }

    ];
     this.r5 = [
    {
      ej1: 'Sentadilla Smith piernas abiertas',
      ej2: 'Extensión cuádriceps cerrado',
      ej3: '',
      detalle: 'Aumenta o disminuye el peso según las reps',
      series: '4 series',
      rep1:'30,20,15,10 ',
      rep2: '8,10,15,20'

    },
    {
      ej1: 'Sentadilla hack piernas cerradas',
      ej2: 'Prensa una pierna ',
      ej3: '',
      detalle: 'La sentadilla hack puede ser en Smith son lentas, la prensa una perna es en la de gluteo que te gusta',
      series: '4 series',
      rep1:'12 reps lentas',
     rep2: '10 reps c/u peada'
    },
    {
      ej1: 'Prensa  abierta',
      ej2: 'sentadilla hack abierta',
      ej3: '',
      detalle: 'Prensa y el hack es con los pies abajo',
      series: '4 series',
      rep1:'20',
      rep2: '15,12,10,8 '

    },
    {
     ej1: 'Extensión cuádriceps',
      ej2: 'sentadilla sissy',
      ej3: '',
      detalle: 'Extensión cuádriceps con una pierna método 1 ½ lento; sentadilla sissy  yo te ayudo',
      series: '4 series',
      rep1:'10 reps',
      rep2: '25 cortas'
    },
    {
      ej1: 'Extensión cuádriceps',
      ej2: 'sentadilla sissy',
      ej3: '',
      detalle: 'Extensión cuádriceps con una pierna método 1 ½ lento; sentadilla sissy  yo te ayudo',
      series: '4 series',
      rep1:'10 reps',
      rep2: '25 cortas'

    }

    ];
    

  }

    onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
   const currentSlide = this.slides[slider.getActiveIndex()];
    this.segmento = currentSlide.id;
  } 
  
  updateCucumber(element) {
     console.log(element);
    var pos = this.select.indexOf(element);
    console.log(pos);
    if (pos != -1) {
      console.log("si esta");
      this.select.splice(pos, 1);
      this.i=this.i-1;

    }else{
      console.log("no esta");
      this.select.push(element);
      this.i=this.i+1;
    } 

  
    console.log(this.i);
   
    
    if (element == 'l1') {
      this.presentToast('Por qué me sigues?');
    }
    if (element == 'l2') {
      this.presentToast('Ya salí, quien me viera comiendo pasitas');
    }
    if (element == 'l3') {
      this.presentToast('No soy como la chica del pasado');
    }
     if (element == 'l4') {
      this.presentToast('Me gusta estar en el depa');
    }
    if (element == 'l5') {
      this.presentToast('Me gusta servirme agua sola!');
    }
     if (element == 'l6') {
      this.presentToast('Me gusta las empanadas de carne');
    }
    if (element == 'l7') {
      this.presentToast('No te emociones... te amo');
    }
     if (element == 'l8') {
      this.presentToast('Es un chorro no lo voy a copiar ');
    }
    if (element == 'l9') {
      this.presentToast('Es lo mínimo ');
    }
     if (element == 'l10') {
      this.presentToast('Perdón por todo');
    }
    if (element == 'l11') {
      this.presentToast('Te amo CES');
    }
    if (element == 'l12') {
      this.presentToast('Soy el hombre más feliz del mundo');
    }
    if (element == 'm1') {
      this.presentToast('Ahi Ahi, en mis huellitas');
    }
       if (element == 'm2') {
      this.presentToast('Carnita de la :)');
    }
    if (element == 'm3') {
      this.presentToast('Me gusta mi prote con coco');
    }
    if (element == 'm4') {
      this.presentToast('ME gusta dormir');
    }
     if (element == 'm5') {
      this.presentToast('ME haces mi te ');
    }


  }

  presentToast(m) {
    var mensaje = String(m);
    console.log(mensaje)
  const toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
  