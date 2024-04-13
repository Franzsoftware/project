

let activitiesSection = document.getElementById('a');

let BASE_URL_IMG = 'https://mdlbiyrwccyoblevhoid.supabase.co/storage/v1/object/public/assets';

function formatDataFromAPI(data) {
    let newArray = []

    for (let i = 0; i < data.length; i++) {
        newArray.push({
            title: data[i].title,
            description: data[i].description,
            textButton: data[i].textButton,
            color: data[i].color,
            img: BASE_URL_IMG +  data[i].img
        })
    }

    return newArray
}

fetch('https://mdlbiyrwccyoblevhoid.supabase.co/rest/v1/francesc_activities?select=*', {
    mode: 'cors',
    method: 'GET',
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbGJpeXJ3Y2N5b2JsZXZob2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjA3MDgsImV4cCI6MjAyNjUzNjcwOH0.RNheTQLsl5dmh4406McR8ttAmwzfoxnEiDo4gutMCbA',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbGJpeXJ3Y2N5b2JsZXZob2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjA3MDgsImV4cCI6MjAyNjUzNjcwOH0.RNheTQLsl5dmh4406McR8ttAmwzfoxnEiDo4gutMCbA'
    },
    
    
}).then((response) => {
    
    if (response.status === 200) {
    response.json().then(data => {
        let formattedData = formatDataFromAPI(data)
        for (let i= 0; i < formattedData.length; i++) {
      
            activitiesSection.innerHTML +=  

       `   
          <div class="actGeneral" style="background-color:${formattedData[i].color}; flex-direction: ${(i % 2 == 0) ? 'row-reverse':'row'};">
              <div class="firstText">
                  <h4>${formattedData[i].title}</h4>
                  <p>${formattedData[i].description}</p>
                  <a href="#contacto" title="${formattedData[i].textButton}">${formattedData[i].textButton}</a>
              </div>
              <div class="firstImage">
                  <figure>
                      <img src="${formattedData[i].img}" alt="Imagen actividad" title="Actividad" />
                  </figure>
              </div>
          </div> 
       `                     
  }    
    })
}  else { 
   
    alert('Ha ocurrido un error, intenta visualizar el contenido en unos instantes')
}
})  .catch(() => {
 
    alert('Ha ocurrido un error, intenta visualizar el contenido en unos instantes')

})









    