interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Expense Tracker',
    description: `What if you can track all your expense in one place when you can able to track previous history of you transactions.`,
    imgSrc: '/static/images/google.png',
    href: 'https://budget-tracker-bmikr83hw-devgans-projects.vercel.app/',
  },
  {
    title: 'Nike Shoe App',
    description: `Imagine you have a shoe product and you need nice looking website to promote your product. This Nike shoe product app is your next product app.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://nikeshoeapp.netlify.app/',
  },
]

export default projectsData
