const paragraphs = [
    "The rapid advancement of technology has transformed the way we live, work, and communicate. From smartphones to smart homes, innovation has brought convenience and efficiency to our daily lives. The rise of artificial intelligence and machine learning is set to redefine industries, creating new opportunities and challenges in the job market. As we move towards a more connected world, cybersecurity and data privacy have become crucial issues.",
    
    "Climate change is one of the most pressing issues facing humanity today. Rising temperatures, melting glaciers, and increasing sea levels are clear indicators of the impact human activities have on the environment. Governments and organizations worldwide are pushing for sustainable solutions to reduce carbon emissions and transition to renewable energy sources. Individual actions, like reducing waste and conserving energy, also play a vital role in addressing this global crisis.",
    
    "Mental health awareness has gained significant momentum in recent years. Society is beginning to acknowledge the importance of mental well-being alongside physical health. Issues like anxiety, depression, and burnout are no longer taboo subjects, encouraging people to seek help without fear of stigma. With the increasing focus on self-care and mindfulness, more resources are being dedicated to understanding and supporting mental health.",
    
    "Education is undergoing a significant transformation with the integration of digital tools and platforms. E-learning and online courses have opened up opportunities for people around the globe, making education more accessible and flexible. Digital literacy has become essential, as technology continues to shape the learning experience. However, the digital divide remains a concern, highlighting the importance of equitable access to technology.",
    
    "In an increasingly globalized world, embracing cultural diversity and promoting inclusion have become critical values. Understanding different traditions, beliefs, and practices enriches societies and fosters mutual respect. Efforts to promote diversity in workplaces, schools, and communities aim to create environments where everyone feels valued and included. The ongoing dialogue around equality and social justice has brought attention to the need for systemic change.",
    
    "Space exploration continues to captivate human curiosity and drive scientific discovery. Recent missions to Mars, advancements in space tourism, and the development of reusable rockets are reshaping the future of space travel. The search for extraterrestrial life and the possibility of colonizing other planets inspire new generations of scientists and explorers. As technology advances, humanity’s reach beyond Earth seems closer than ever.",
    
    "Physical fitness is not just about maintaining a healthy weight; it plays a crucial role in overall well-being. Regular exercise can boost mood, improve mental clarity, and reduce the risk of chronic diseases. With the rise of sedentary lifestyles, people are becoming more aware of the need to stay active. From yoga and Pilates to high-intensity interval training, there are countless ways to incorporate fitness into daily life.",
    
    "Social media has revolutionized the way people interact, share, and consume information. Platforms like Facebook, Instagram, and Twitter have become essential tools for communication, networking, and self-expression. While social media has democratized information and fostered connections, it also poses challenges like misinformation, cyberbullying, and addiction. Striking a balance between online engagement and real-world connections is essential.",
    
    "Art and creativity have always been fundamental aspects of human expression. From cave paintings to digital art, the mediums and techniques used by artists continue to evolve. Today, technology allows for new forms of artistic expression, like virtual reality experiences and generative art created by algorithms. Despite these advancements, the core of art remains rooted in storytelling and emotional connection.",
    
    "The future of work is being shaped by technological advancements, changing demographics, and evolving workforce expectations. Remote work and flexible hours are becoming more common, challenging traditional notions of the workplace. Automation and AI are transforming industries, raising questions about job displacement and reskilling. As the nature of work changes, companies are rethinking their strategies to attract and retain talent in a dynamic environment."
  ];

  
const form = document.getElementById("lorem-form")
const amount = document.getElementById("amount")
const lorem = document.getElementById("lorem")

form.onsubmit = function(e) {
    e.preventDefault()
    const value = parseInt(amount.value)
    if (isNaN(value) || value < 0) {
        lorem.innerHTML = paragraphs[0]
    } else {
        loremText = ''
        for (let i = 0; i < value; i++) {
            const index = Math.floor(Math.random() * 10)
            loremText += `<p>${paragraphs[index]}</p>`
        }

        lorem.innerHTML = loremText
    }
}