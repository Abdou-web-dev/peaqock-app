set width of containers and images to be 100% for responsivness purposes
do not leave empty classNames or unused variables in the code...
create organized components tree structure

---

Veuillez trouver ci-dessous le font à utiliser et les règles à respecter :

++Utiliser Framework (React Js)
++Utiliser CSS ou SCSS (de préférence SCSS)
++écrire la première lettre des classNames lowercase par ex : "search-form"
++Utiliser Ant Design  
++Tester la compatibilité entre les navigateurs (Chrome, Firefox, Edge...).
++Assurer l'intégration responsive.
++Segmenter le CSS en fichiers multiples (il est préférable de séparer son code CSS en plusieurs fichiers chacun correspondant à son module).
++Établir une convention de Nommage.
++Utiliser BEM (Bloc, Element, Modifier) (BEM est une méthodologie de nommage qui tend à découper les entités de votre page en blocs et éléments).
++Utiliser Javascript ou bien Typescript.
++Using Functional Components and Hooks Instead of Classes.
++Organiser les fichiers liés au même composant dans un meme dossier.
++Évitez le code répétitif.

Projet figma :

https://www.figma.com/file/0QVSc2KpN1hLxhVyDq3JnP/Welcome-to-Peaqock?node-id=0%3A1

antd Column breakpoints ::
xs screen < 576px and also default setting, could be a span value or an object containing above props number | object -
sm screen ≥ 576px, could be a span value or an object containing above props number | object -
md screen ≥ 768px, could be a span value or an object containing above props number | object -
lg screen ≥ 992px, could be a span value or an object containing above props number | object -
xl screen ≥ 1200px, could be a span value or an object containing above props number | object -
xxl screen ≥ 1600px, could be a span value or an object containing above props

json data
{
"p": "This page will highlight the different membership packages and the benefits and costs of each package. The initial plans to be configured are as presented below. The table should be configurable to update the sections with different feature, benefits and costs from time to time.",
"basicPlan": {
"icon": "/static/media/emoji_happy.f8cc2b987f02b1df9af74cd3f243f3ad.svg",
"label": "Basic",
"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc",
"btn": "{label: \"View Details\", price: \"FREE\"}"
},
"standardPlan": {
"icon": "/static/media/time_circle.41282e3dbc3142734bb3dbdcaa420413.svg",
"label": "Standard",
"text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente molestiae molestias, architecto fugit numquam repudiandae animi.",
"btn": "{label: \"View Details\", price: \"$ 1.500\"}"
},
"goldPlan": {
"icon": "/static/media/shield_done.f05355ef04ab04d8466e4359ccd6225e.svg",
"label": "Gold",
"text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptatem eligendi voluptatum perspiciatis sunt ducimus!",
"btn": "{label: \"View Details\", price: \"$ 2.500\"}"
},
"platinumPlan": {
"icon": "/static/media/lock.5753b6b2ddd597ab929bd8b7aa75a37f.svg",
"label": "Platinum",
"text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perspiciatis qui nesciunt corporis cumque impedit?",
"btn": "{label: \"View Details\", price: \"$ 5.000\"}"
}
}
