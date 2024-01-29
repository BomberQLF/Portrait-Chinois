document.addEventListener('DOMContentLoaded', function () {

    fetch('analogies.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            generation(data);
        })
    })

    document.querySelectorAll('.reponse').forEach(function (element) {
        element.style.color = 'white'
        element.style.paddingTop = '0';
        element.style.paddingBottom = '0';
        element.style.paddingLeft = '50px';
        element.style.paddingRight = '50px';
        element.style.fontSize = '2.2rem'
        element.style.borderLeft = 'solid 1px white'
        element.style.borderBottom = 'solid 1px white'
    })


    document.querySelectorAll('.fruitLink, .filmLink, .objectLink, .sportLink, .colorLink, .countryLink, .songLink').forEach(function (element) {
        element.style.color = 'rgb(224, 183, 68)';
    })

    document.querySelectorAll('.mainLink, .fruitLink, .filmLink, .objectLink, .sportLink, .colorLink, .countryLink, .songLink').forEach(function (element) {
        element.style.paddingLeft = '40px'
        element.style.paddingRight = '40px'
        element.style.backgroundColor = 'black'
        element.style.color = 'rgb(224, 183, 68)'

    })

    document.querySelectorAll('.reponse').forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            event.target.style.transition = 'all 1s ease';
            event.target.style.color = 'black';
            event.target.style.backgroundColor = 'white';
        });

        element.addEventListener('mouseout', function (event) {
            event.target.style.transition = 'all 1s ease';
            event.target.style.color = 'white';
            event.target.style.backgroundColor = '';
        });
    });



    console.log(analogies);

    //JS pour générer toutes mes sections + contenu
    function generation(data) {
        for (let i = 0; i < data.length; i++) {
            var donnee = data[i];

            var nouvelleSection = document.createElement('section');
            nouvelleSection.classList.add('sectionAnalogies');
            nouvelleSection.id = `section${i + 1}`

            var divTitre = document.createElement('div');
            divTitre.classList.add('titleGroupe');

            var titreH2 = document.createElement('h2');
            titreH2.classList.add('h2Analogies');
            titreH2.textContent = donnee.valeursAnalogie;

            var divInterne = document.createElement('div');
            divInterne.classList.add('divAnalogies');

            var divInterne2 = document.createElement('div');
            divInterne2.id = 'divInterne2'

            var img = document.createElement('img');
            img.classList.add('img')
            img.src = donnee.url

            if (i % 2 !== 0) {
                divInterne.classList.add('flexReverse')
            }

            var paragraph = document.createElement('p');
            paragraph.textContent = donnee.argumentation;

            divInterne2.appendChild(img);
            if (i === 5) {
                var lienYoutube = document.createElement('a');
                img.classList.add('strasbourgeoise');
                lienYoutube.classList.add('ytb')
                lienYoutube.href = 'https://www.youtube.com/watch?v=4meGLb8wV9g';
                lienYoutube.textContent = 'Cliquer ici pour écouter';
                
                divInterne2.appendChild(lienYoutube);
            }
            divInterne.appendChild(divInterne2);
            divInterne.appendChild(paragraph);
            divTitre.appendChild(titreH2);
            divTitre.appendChild(divInterne);
            nouvelleSection.appendChild(divTitre);

            document.body.appendChild(nouvelleSection);
            document.querySelector('main').appendChild(nouvelleSection);

        }
        var footer = document.querySelector('footer');

        document.body.appendChild(footer);
        
        
    }
    
    var formulaire = document.getElementById('formulaire');
    formulaire.addEventListener('submit', function(event){
        event.preventDefault();
        var inputAnalogie = document.getElementById('analogie');
        var inputValeurAnalogie = document.getElementById('valeurAnalogie');
        var inputArgumentation = document.getElementById('argumentationForm');
        var inputFile = document.getElementById('fileAnalogie');

        var vAnalogie = inputAnalogie.value
        var vValeurAnalogie = inputValeurAnalogie.value
        var vArgumentation = inputArgumentation.value
        var vFile = inputFile.value

        inputAnalogie.value = ''
        inputValeurAnalogie.value = ''  
        inputArgumentation.value = ''
        inputFile.value = ''
        fetch('https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&?analogie='+vAnalogie+'&?valeurAnalogie='+vValeurAnalogie+'&?argumentationForm='+vArgumentation+'&?fileAnalogie='+vFile, {
            method: 'GET',
        })
        .then((response) => {
            console.log(response);
        })
    })
}
)
