import { type JSPath } from './courses-data.types';
import stage1 from '@/shared/assets/stages/stage-1.webp';
import stage2 from '@/shared/assets/stages/stage-2.webp';
import stage3 from '@/shared/assets/stages/stage-3.webp';

export const jsPathRu: JSPath[] = [
  {
    id: 1,
    title: 'Этап 1',
    description:
      'Все зарегистрированные автоматически имеют право на прохождение этого этапа. Первый этап продолжается 15 недель. На этом этапе включаются практические задания и тесты. Оценка может быть как автоматической, так и в форме перекрестной проверки между учащимися.',
    imageSrc: stage1,
    topics: ['Git', 'HTML', 'CSS', 'Основы JavaScript'],
  },
  {
    id: 2,
    title: 'Этап 2',
    description:
      'Чтобы перейти на второй этап, вам необходимо успешно выполнить задания и тесты первого этапа без пропуска сроков и пройти пробное техническое интервью с одним из наших менторов. Второй этап длится 20 недель. Вам будет назначен личный ментор, который будет отвечать на ваши вопросы. Этот этап включает в себя практические задания и тесты, которые будут проверяться и оцениваться вашим ментором, а также перекрестной проверкой других студентов. Помимо этого, проводятся пробные интервью с другими менторами.',
    imageSrc: stage2,
    topics: [
      'Advanced Javascript',
      'Security',
      'Testing',
      'Agile',
      'Networking',
      'web development tools',
    ],
  },
  {
    id: 3,
    title: 'Этап 3',
    description:
      'Обучение применению React или Angular (выбор за студентом). Чтобы записаться на курс, необходимо успешно пройти первые два этапа обучения. Формат: менторство, самостоятельные занятия, вебинары и общение в Discord. Практические занятия разбираются и оцениваются наставниками, а также перекрестной проверкой другими студентами. На протяжении всего обучения проводятся пробные интервью с другими менторами.',
    imageSrc: stage3,
    list: [
      'Выберите фреймворк: React или Angular.',
      'Коллективная разработка финального проекта.',
      'Фреймворк-зависимые интервью.',
    ],
  },
];
