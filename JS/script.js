//*************************************Tableau d'objet , qestion est reponse************************** */
const Question = [
    {
        Question: "Qui offre aiguille à Arya Stark",
        Reponse: {
            1: "Rob Stark",
            2: "John Snow",
            3: "Mestre Lewin",
            4: "Hodor"
        },
        BonneReponse: "John Snow"
    },
    {
        Question: "Quelle est la devise de la maison Stark",
        Reponse: {
            1: "Le nord s'en souvient",
            2: "Croître avec vigueur",
            3: "L'hiver vient",
            4: "Ce qui est mort ne peut jamais mourrir"
        },
        BonneReponse: "L'hiver vient"
    },
    {
        Question: "Combien de dragons possède daenerys",
        Reponse: {
            1: "4",
            2: "2",
            3: "Aucun",
            4: "3"
        },
        BonneReponse: "3"
    },
    {
        Question: "Comment appelle-t-on un bâtard de Dorne ?",
        Reponse: {
            1: "Snow",
            2: "Pyke",
            3: "Sand",
            4: "Waters"
        },
        BonneReponse: "Sand"
    },
    {
        Question: "Conbien de mari a eu Margaery Tyrell ?",
        Reponse: {
            1: "3",
            2: "Jamais marié",
            3: "2",
            4: "1"
        },
        BonneReponse: "3"
    },
    {
    Question: "Comment s’appelle l’homme qui entraîna arya a port réal ?",
    Reponse: {
        1: "Jaken h'ghar",
        2: "Le limier",
        3: "Syrio forel",
        4: "Ned stark"
    },
    BonneReponse: "Syrio forel"
    },
    {
    Question: "Comment s’appelle l’épée que samwell Tarly offre à ser jorah ?",
    Reponse: {
        1: "Dragon",
        2: "Grand griffe",
        3: "Corvenin",
        4: "empoigne"
    },
    BonneReponse: "Corvenin"
    },
    {
    Question: "Avec conbien d’épées a était fait le trône de fer ?",
    Reponse: {
        1: "600",
        2: "1000",
        3: "10000",
        4: "100"
    },
    BonneReponse: "1000"
    },
];

//*************************************Création des h2 et des input************************************* */
let ContainerQuestion = document.querySelector(".Container_quiz");
Question.forEach(function(listItem, index) {
    let mySectionIndice = 0;
    let content="";
    content +=`<div><h2  class="question_mySection`+ mySectionIndice +`">${listItem.Question}</h2> `;
    for (let key in listItem.Reponse) {
        if (listItem.Reponse.hasOwnProperty(key)) {
            let uniqueID = `scales-${key}-${index}`;
            content += `<label class="test" for="${uniqueID}"><fieldset><input id='${uniqueID}' class="mySection${mySectionIndice} Question-${index}" type='checkbox'><span>${listItem.Reponse[key]}</span></fieldset></label>`;
            mySectionIndice ++;
        }
    }
    content+='</div>';
    ContainerQuestion.innerHTML+=content;
})

//***************************disabled input quand input checked et calccul de bonne ou mauvaise reponse*/
let label = document.querySelectorAll('label');
let input = document.querySelectorAll("input[type=checkbox]");
let ReponseUtilisateur = [];
let Breponse = 0;
let checkedInputs = 0;
input.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
        if (this.checked) {
        checkedInputs++;
            let Inputs = this.id;
            let inputQuestion = document.getElementsByClassName('Question-'+Inputs.substring(9, 10));
            if (this.nextElementSibling.textContent === Question[Inputs.substring(9, 10)].BonneReponse) {
                this.parentNode.style.backgroundColor = "#a7c957";
                Breponse++;
            } else {
                this.parentNode.style.backgroundColor = "#e5383b";
            }
            for (const key in inputQuestion) {
                inputQuestion[key].disabled=true;
            } 
        }
    });
});


//******************************************Afiiche nombe de bonne reponse***************************** */
let boutton = document.querySelector("#BTN");
boutton.addEventListener("click", function() {

    if (checkedInputs === 8) {
        document.querySelector('.Container_question').innerHTML += "Vous avez " + Breponse + " bonnes réponses";
    } else {
        document.querySelector('.Container_question').innerHTML += "Vous n'avez pas terminé le quiz";
        
    }
});