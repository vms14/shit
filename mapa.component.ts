import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})




export class MapaComponent implements OnInit {

  constructor(private _chefServ: serviciochefs) { }





  
  ngOnInit() {
    var scr;
    scr = document.createElement("script");
    scr.textContent = `
  

    nombres = ["Pedro", "Juan", "Mateo", "Maria","Juana","May Jin","Nigga","Marc","Antonio","David","Jose","Thor"];
    chefs = [ ];
    imagenes = [ "http://vms.heliohost.org/images/huevo32.png", "http://vms.heliohost.org/images/rosquilla32.png", "http://vms.heliohost.org/images/aguacate32.png"];
    especialidades = ["Comida Asiatica", "Comida Japonesa","Comida Rapida","Tortillas","Resposteria","Comida Italiana","Comida Arabe","Comida Saludable","Comida no Saludable","Comida India" ];
    function chooseRandom( arr )
    {
      arr.filter(()=>{ if ( Math.floor(Math.random() * 50 ) < 25) return true; else false; })
    }
    function makeDecimal ( x, y)
    {
      return parseFloat( x+"."+y);
    }
    
    
    for ( i = 0 ; i < 12 ; i++ )
    {
        chefs.push( 
          { 
            chefId: i,
            nombre: nombres[i],
            mail: "randomname"+i+"@random.com", 
            avatar: "http://vms.heliohost.org/images/thumbnails/thumbnails/tn_tn_"+(i+1)+".png", 
            especialidad: especialidades.filter(()=>{ if ( Math.floor(Math.random() * 50 ) < 25) return true; else false; }), 
            estrellas: Math.floor(Math.random() * 5), 
            biografia: "Toda mi vida he cocinado y solo quiero seguir cocinando", 
            galeria: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg", 
            localizacion: {lat: makeDecimal(41, Math.random()* 100), lng: makeDecimal(2, Math.random() * 100)}, 
            ciudad: "barcelona",
            comentarios: "Todo muy bueno y barato"
          }
          
          
          
          
        );
    }

    function createMarkers (gmap)
    {
      win = [];
      markers = [];
      chefs.forEach( (x)=>
      { 
        m = markers.push( new google.maps.Marker({position: x.localizacion,map:gmap,icon:imagenes[Math.floor(Math.random() * 3)]}) );
        
      }
      );
      return markers;
    }

    function createWindows (marker)
    {
      win = [];
      markers.forEach ( () => {w = win.push( new google.maps.InfoWindow({content:"oh", position: x.localizacion})) } );
      return win;
    }

    
    
    function initMap()
    {
      map = new google.maps.Map( document.getElementById('map'), 
                                  { zoom: 9, center: { lat: 41.3973938, lng: 2.1900901 } } );

                                  markers = createMarkers(map);
                                  windows = createWindows();

                                  
                                  for ( i = 0, win = [] ; i < markers.length ; i++)
                                  {
                                    
                                    google.maps.event.addListener( markers[i], "click", function () { markers[i].win.open(map); } );
                                  }

                                 a = new google.maps.Marker({position: {lat: 41.3973938, lng: 2.1900901}, map:map}); 
                                 b = new google.maps.InfoWindow ( { content: "<h1>oh</h1>", position: {lat:41.3973938, lng: 2.1900901} });
                                 google.maps.event.addListener( a, "click", function () { b.open(map); } );

      
    }                            
    console.log('meh');`;
    document.body.appendChild(scr);
    scr = document.createElement("script");
    scr.async = true;
    scr.defer = true;
    scr.async = true;
    scr.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCipCsBpdMwnAfPf1a0znSM2KacrEgclKY&callback=initMap";
    document.body.appendChild(scr);
    //document.body.appendChild(document.createElement("p")).textContent = `oh ` +this.a+`...`;
    
    
    
      
      
    
    
      
  
  
// Initialize and add the map








}



}
