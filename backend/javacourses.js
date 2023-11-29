/*
The main thing that we are doing here is we are creating a variable for every list item, and every introduction
for the courses. We create a 'Mouseover' event listener. This event listener activates when you hover you mouse
over the declared text. When this event happens all of the other courses are going to be on deffault settings
only the list item will be changed which is hovered.
*/
document.addEventListener('DOMContentLoaded', ()=>{
    const erasmusli1=document.getElementById('erasmusli1');
    const erasmusli2=document.getElementById('erasmusli2');
    const erasmusli3=document.getElementById('erasmusli3');
    const erasmusli4=document.getElementById('erasmusli4');
    const erasmusli5=document.getElementById('erasmusli5');
    const curseit="Discover the Erasmus IT/Programming courses at Kleos Farm – a haven of green tranquility far removed from the distractions of urban life. Nestled in nature, this serene environment offers students a unique setting free from air, water, light, and noise pollution. At Kleos Farm, IT students engage in hands-on networking challenges, while programmers craft the digital identity of the farm through website development. Beyond the tech focus, the farm is a vibrant hub of activity, teeming with animals and people alike. From collaborative projects to shared moments with the resident animals, Kleos Farm provides an immersive and holistic educational experience. Join us at Kleos Farm, where innovation harmonizes with nature, offering a refreshing and enriching Erasmus adventure. Welcome to a place where IT and programming education thrive amidst the calm and vitality of rural life.";
    const curseenvironment="Embark on a unique journey with Erasmus Environment Engineering courses at Kleos Farm, a sanctuary of green tranquility nestled far away from the clamor of urban life. Situated in the heart of nature, Kleos Farm provides an unparalleled setting free from air, water, light, and noise pollution. Immerse yourself in the world of environment engineering as you explore real-world challenges on the farm. Our students delve into sustainable practices, working amidst lush fields and participating in enriching field trips that offer hands-on experiences in environmental conservation. At Kleos Farm, our environment engineers don't just learn from textbooks; they engage with the land, collaborate with fellow students, and embark on adventures near the pristine ocean. Beyond the classroom, the farm is a lively community, fostering connections between students and the diverse ecosystem that surrounds them. Join us at Kleos Farm, where environment engineering meets the serenity of rural life. Welcome to a place where learning goes beyond the theoretical, and students actively contribute to a sustainable future, surrounded by the beauty of nature and the vastness of the ocean.";
    const cursechemic="Step into the world of Erasmus Chemical Studies at Kleos Farm, a unique haven nestled amidst nature's embrace, far from the hustle and bustle of urban life. Here, aspiring chemists embark on a dynamic journey, delving into labs and hospitals to acquire invaluable knowledge applicable across various professions integrating chemistry and biology. Kleos Farm offers a holistic learning experience where chemical students not only explore theoretical concepts but also engage in hands-on experiments in state-of-the-art laboratories. These laboratories serve as dynamic spaces for discovery, fostering a deep understanding of the intricate relationship between chemistry and biology. Beyond the confines of traditional learning environments, Erasmus Chemical Studies at Kleos Farm extend into hospitals, providing students with real-world applications of their studies. Through practical experiences, they gain insights into the vital role chemistry plays in medical advancements and healthcare.Join us at Kleos Farm, where chemical studies unfold in a setting that seamlessly blends academic rigor with the tranquility of nature. Welcome to a place where chemistry meets biology, and students are empowered to apply their knowledge in meaningful ways across a spectrum of professions.";
    const cursehospitality="Embark on an exciting journey with Erasmus Hospitality Studies at Kleos Farm, an idyllic retreat surrounded by nature's beauty, offering a serene escape from the urban clamor. Here, hospitality students dive into immersive experiences, honing their skills in the art of service amidst the lush greenery and pristine surroundings.Kleos Farm becomes the training ground for future hospitality professionals as students learn to create exceptional guest experiences. From serving in charming restaurants to mastering the intricacies of hotel management, the farm provides a unique backdrop for hands-on learning.In addition to the unparalleled natural setting, Kleos Farm offers a host of activities and amenities, making it an ideal environment for hospitality education. Students not only refine their service skills but also cultivate a deep appreciation for the synergy between nature, service, and guest satisfaction.Join us at Kleos Farm, where hospitality studies blend seamlessly with the tranquility of rural life. Welcome to a place where students develop their talents against the backdrop of a thriving ecosystem, creating memorable experiences for guests in the heart of nature's bounty.";
    const cursechef="Embark on a culinary odyssey with Erasmus Culinary Arts at Kleos Farm, an exquisite haven enveloped by nature's serenity, offering a retreat from the urban hustle. Here, aspiring chefs immerse themselves in a world of flavors and techniques, where the vibrant greenery and fresh air inspire culinary creativity.Kleos Farm serves as the culinary canvas for students, providing a picturesque setting for hands-on training and experimentation. From cultivating ingredients in the farm's garden to crafting delectable dishes in state-of-the-art kitchens, culinary students at Kleos Farm experience the art and science of gastronomy in a unique environment.Beyond the culinary classrooms, Kleos Farm presents an array of opportunities for students to refine their skills. Whether exploring the diverse produce of the farm or collaborating with local artisans, culinary students gain a holistic understanding of the farm-to-table journey.Join us at Kleos Farm, where the culinary arts meet the tranquility of rural life. Welcome to a place where students don their chef hats amidst the natural beauty, creating gastronomic delights that celebrate the richness of both nature and culinary craftsmanship.";
    /*Above this comment, there is the five constant, that will be the text wich appears
    in the paragraph next to the list items. */
    /*Below this comment, there is the five mouse over events that will allow us to hover, if you have to expand
    the list, you just have to create the same things here, and also in the erasmusCourses page.*/
    erasmusli1.addEventListener('mouseover',course1);
    erasmusli2.addEventListener('mouseover',course2);
    erasmusli3.addEventListener('mouseover',course3);
    erasmusli4.addEventListener('mouseover',course4);
    erasmusli5.addEventListener('mouseover',course5);
    const h1=document.getElementById('h2erasmus1');
    const h2=document.getElementById('h2erasmus2');
    const h3=document.getElementById('h2erasmus3');
    const h4=document.getElementById('h2erasmus4');
    const h5=document.getElementById('h2erasmus5');
    const erasmus=document.getElementById('erasmus');


    //All of the functions will be the same, just changed to the right list item. It makes expanding this site easy.
    function course1()
    {
        erasmusli1.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        erasmusli4.style.backgroundColor='#223832';
        erasmusli5.style.backgroundColor='#223832';
        h1.style.color='black';
        h2.style.color='white';
        h3.style.color="white";
        h4.style.color="white";
        h5.style.color="white";
        erasmus.textContent=curseit;
        
    }
    function course2()
    {
        erasmusli2.style.backgroundColor='#C4D4E9';
        erasmusli1.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        erasmusli4.style.backgroundColor='#223832';
        erasmusli5.style.backgroundColor='#223832';
        h2.style.color='black';
        h1.style.color='white';
        h3.style.color="white";
        h4.style.color="white";
        h5.style.color="white";
        erasmus.textContent=curseenvironment;
        
    }
    function course3()
    {
        erasmusli3.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli1.style.backgroundColor='#223832';
        erasmusli4.style.backgroundColor='#223832';
        erasmusli5.style.backgroundColor='#223832';
        h3.style.color='black';
        h2.style.color='white';
        h1.style.color="white";
        h4.style.color="white";
        h5.style.color="white";
        erasmus.textContent=cursechemic;
        
    }
    function course4()
    {
        erasmusli4.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli1.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        erasmusli5.style.backgroundColor='#223832';
        h4.style.color='black';
        h2.style.color='white';
        h1.style.color="white";
        h3.style.color="white";
        h5.style.color="white";
        erasmus.textContent=cursehospitality; 
    }
    function course5()
    {
        erasmusli5.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli1.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        erasmusli4.style.backgroundColor='#223832';
        h5.style.color='black';
        h2.style.color='white';
        h1.style.color="white";
        h3.style.color="white";
        h4.style.color="white";
        erasmus.textContent=cursechef; 
    }
})
