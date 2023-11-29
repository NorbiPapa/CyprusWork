const q1=document.getElementById('q1');
const q2=document.getElementById('q2');
const q3=document.getElementById('q3');
const a1="At Kleos self-sustainable farm, we use a wide range of traditional skills to support life, focusing on producing over consuming. Some of the principles we apply are consistent with those of permaculture, that is, a self-sustainable farm makes use of everything on the homestead to create a symbiotic relationship where nothing goes to waste. To this extend, Kleos produces a variety of organic products of the highest quality & nutritional value for its residents as well as members of the local community and beyond.";
const a2="Our dream is that we create a perfect place far from the urban concrete jungle, without any light, noise, air or water pollution. We can create a peacful place where students, workers and families embrace the nature again as we supposed to. You can relax here or work with the perfect peace of mind, with animals all around you, and eat healthy with tasty, full green vegetables.";
const a3="At Kleos, students & young adults have the opportunity to see in practice the theory taught in their school curriculum, while studying outdoors with ShipCon teachers and experts; in this way they will be able to comprehend important concepts covering a wide range of educational areas, while at the same time develop an affection and care for the flora and fauna.  This is so important for the young generation, who will understand the value of nature and the longer-term benefits for people while at the same time equipped with valuable lifelong skills & knowledge. Furthermore, at Kleos we welcome Erasmus+ VET students from a wide range of fields, such as construction, maintenance, wood working, culinary, animal care, agriculture/agronomists, irrigation, to name a few, to do their practice/traineeship, in a truly wonderful environment.";
var answer=document.getElementById('answer');
q1.addEventListener('click',question1);
q2.addEventListener('click',question2);
q3.addEventListener('click',question3);
const li1=document.getElementById('li1');
const li2=document.getElementById('li2');
const li3=document.getElementById('li3');

function question1()
{
    li1.style.backgroundColor='#C4D4E9';
    li2.style.backgroundColor='#223832';
    li3.style.backgroundColor='#223832';
    q1.style.color='black';
    q2.style.color='white';
    q3.style.color='white';
    answer.textContent=a1;
    
}

function question2()
{
    li2.style.backgroundColor='#C4D4E9';
    li1.style.backgroundColor='#223832';
    li3.style.backgroundColor='#223832';
    q2.style.color='black';
    q1.style.color='white';
    q3.style.color='white';
    answer.textContent=a2;

}
function question3()
{
    li3.style.backgroundColor='#C4D4E9';
    li2.style.backgroundColor='#223832';
    li1.style.backgroundColor='#223832';
    q3.style.color='black';
    q1.style.color='white';
    q2.style.color='white';
    answer.textContent=a3;
}