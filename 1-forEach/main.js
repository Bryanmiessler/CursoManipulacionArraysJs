const tasks = [
    {title: 'Design logo', status: 'Complete'},
    {title: 'Develop head', status: 'Incomplete'},
    {title: 'Develop Main', status: 'Complete'},
    {title: 'Develop Footer', status: 'Incomplete'},
];

const app = document.getElementById('app');
tasks.forEach(task => {
    app.innerHTML += `<li >${task.title} - ${task.status} <input type="checkbox"> </li>`;
});