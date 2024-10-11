import type { Trainer } from '@/entities/trainer';
import andreiMilashevichImg from '@/shared/assets/mentors/a-milashevich.webp';
import denisSaripovImg from '@/shared/assets/mentors/d-saripov.webp';
import hannaPratasevichImg from '@/shared/assets/mentors/h-pratasevich.webp';
import margaritaGolubevaImg from '@/shared/assets/mentors/m-golubeva.webp';

export const javaScriptEn: Trainer[] = [
  {
    name: 'Hanna Pratasevich',
    role: 'Software Engineering Team Leader @EPAM',
    bio: 'Hello, I\'m Anna - the course coordinator. Ten years ago, I graduated from Rolling Scopes School. Shortly thereafter, I returned to the school, but this time as a mentor and lecturer. However, that still felt insufficient, so I became a course coordinator. Today, I am a Team Lead at EPAM, working as a front-end developer. My heart is devoted to Angular, but I also respect other frameworks/libraries. I look forward to meeting each of you and hope to see you after graduation, perhaps as colleagues on projects!',
    photo: hannaPratasevichImg,
  },
  {
    name: 'Andrei Milashevich',
    role: '',
    bio: 'With over four years of experience in IT, including three-plus years as a Frontend Developer, Andrei has a solid experience in React and Angular. He is involved in mentorship programs, which not only enable him to share his knowledge with students but also provide opportunities for him to learn new things. Prior to his IT career, Andrei spent nine years as an aviation engineer, bringing a unique perspective and problem-solving skills to his current role. Andrei graduated from RS School in 2021 and has been working at EPAM ever since. His experience and expertise make him a valuable asset to any team.',
    photo: andreiMilashevichImg,
  },
  {
    name: 'Margarita Golubeva',
    role: '',
    bio: 'Having started out as an aspiring English teacher for IT professionals, Margarita decided to explore why this field attracts so many people. She started her journey out of pure curiosity, but quickly realized that programming was not just a hobby for her, but a true calling. After completing a front-end development course, she completely immersed herself in this world and now cannot imagine a single day without coding. Margarita continues to develop her skills in IT and strives to help others better understand and master this fascinating field.',
    photo: margaritaGolubevaImg,
  },
  {
    name: 'Denis Saripov',
    role: 'Frontend Developer at Yandex Serbia',
    bio: 'Denis is a Frontend Developer at Yandex with over four years of experience. Prior to joining Yandex, he worked as a Frontend Developer at VK. He possesses expertise in developing complex WYSIWYG and zero-code web applications, as well as collaborative applications that handle extensive graphic rendering, similar to Google Docs, Figma, and Miro.',
    photo: denisSaripovImg,
  },
];
