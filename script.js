// script.js
const lessons = [
    {
        title: "Photosynthesis",
        description: "Learn about the process by which green plants and some other organisms use sunlight to synthesize foods.",
        content: "Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy in the form of glucose..."
    },
    {
        title: "Cell Division",
        description: "An overview of the process of cell division, including mitosis and meiosis.",
        content: "Cell division is the process by which a parent cell divides into two or more daughter cells. It is a fundamental process for growth and reproduction..."
    },
    {
        title: "The Water Cycle",
        description: "Explore the continuous movement of water on, above, and below the surface of the Earth.",
        content: "The water cycle describes the continuous movement of water within the Earth and atmosphere. It involves processes such as evaporation, condensation, and precipitation..."
    }
];

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredLessons = lessons.filter(lesson => lesson.title.toLowerCase().includes(query));
    displayLessons(filteredLessons);
});

function displayLessons(lessons) {
    const lessonContainer = document.getElementById('lessonContainer');
    lessonContainer.innerHTML = ''; // Clear previous results

    lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'bg-white p-4 rounded shadow';
        lessonCard.innerHTML = `
            <h2 class="font-bold text-lg">${lesson.title}</h2>
            <p>${lesson.description}</p>
            <button class="mt-2 bg-blue-500 text-white p-2 rounded" onclick="alert('${lesson.content}')">Read More</button>
        `;
        lessonContainer.appendChild(lessonCard);
    });
}
