const q1=document.getElementById('q1');
const q2=document.getElementById('q2');
const q3=document.getElementById('q3');
const a1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const a2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const a3="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.";
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