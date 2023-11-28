document.addEventListener('DOMContentLoaded', ()=>{
    const erasmusli1=document.getElementById('erasmusli1');
    const erasmusli2=document.getElementById('erasmusli2');
    const erasmusli3=document.getElementById('erasmusli3');
    const curseit="Discover the Erasmus IT/Programming courses at Kleos Farm – a haven of green tranquility far removed from the distractions of urban life. Nestled in nature, this serene environment offers students a unique setting free from air, water, light, and noise pollution. At Kleos Farm, IT students engage in hands-on networking challenges, while programmers craft the digital identity of the farm through website development. Beyond the tech focus, the farm is a vibrant hub of activity, teeming with animals and people alike. From collaborative projects to shared moments with the resident animals, Kleos Farm provides an immersive and holistic educational experience. Join us at Kleos Farm, where innovation harmonizes with nature, offering a refreshing and enriching Erasmus adventure. Welcome to a place where IT and programming education thrive amidst the calm and vitality of rural life.";
    const curseenvironment="Embark on a unique journey with Erasmus Environment Engineering courses at Kleos Farm, a sanctuary of green tranquility nestled far away from the clamor of urban life. Situated in the heart of nature, Kleos Farm provides an unparalleled setting free from air, water, light, and noise pollution. Immerse yourself in the world of environment engineering as you explore real-world challenges on the farm. Our students delve into sustainable practices, working amidst lush fields and participating in enriching field trips that offer hands-on experiences in environmental conservation. At Kleos Farm, our environment engineers don't just learn from textbooks; they engage with the land, collaborate with fellow students, and embark on adventures near the pristine ocean. Beyond the classroom, the farm is a lively community, fostering connections between students and the diverse ecosystem that surrounds them. Join us at Kleos Farm, where environment engineering meets the serenity of rural life. Welcome to a place where learning goes beyond the theoretical, and students actively contribute to a sustainable future, surrounded by the beauty of nature and the vastness of the ocean."
    const cursechemic="Step into the world of Erasmus Chemical Studies at Kleos Farm, a unique haven nestled amidst nature's embrace, far from the hustle and bustle of urban life. Here, aspiring chemists embark on a dynamic journey, delving into labs and hospitals to acquire invaluable knowledge applicable across various professions integrating chemistry and biology. Kleos Farm offers a holistic learning experience where chemical students not only explore theoretical concepts but also engage in hands-on experiments in state-of-the-art laboratories. These laboratories serve as dynamic spaces for discovery, fostering a deep understanding of the intricate relationship between chemistry and biology. Beyond the confines of traditional learning environments, Erasmus Chemical Studies at Kleos Farm extend into hospitals, providing students with real-world applications of their studies. Through practical experiences, they gain insights into the vital role chemistry plays in medical advancements and healthcare.Join us at Kleos Farm, where chemical studies unfold in a setting that seamlessly blends academic rigor with the tranquility of nature. Welcome to a place where chemistry meets biology, and students are empowered to apply their knowledge in meaningful ways across a spectrum of professions.";
    erasmusli1.addEventListener('mouseover',course1);
    erasmusli2.addEventListener('mouseover',course2);
    erasmusli3.addEventListener('mouseover',course3);
    const h1=document.getElementById('h2erasmus1');
    const h2=document.getElementById('h2erasmus2');
    const h3=document.getElementById('h2erasmus3');
    const erasmus=document.getElementById('erasmus');


    function course1()
    {
        erasmusli1.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        h1.style.color='black';
        h2.style.color='white';
        h3.style.color="white";
        erasmus.textContent=curseit;
        
    }
    function course2()
    {
        erasmusli2.style.backgroundColor='#C4D4E9';
        erasmusli1.style.backgroundColor='#223832';
        erasmusli3.style.backgroundColor='#223832';
        h2.style.color='black';
        h1.style.color='white';
        h3.style.color="white";
        erasmus.textContent=curseenvironment;
        
    }
    function course3()
    {
        erasmusli3.style.backgroundColor='#C4D4E9';
        erasmusli2.style.backgroundColor='#223832';
        erasmusli1.style.backgroundColor='#223832';
        h3.style.color='black';
        h2.style.color='white';
        h1.style.color="white";
        erasmus.textContent=cursechemic;
        
    }
})
