## Foundation CRM

**Foundation CRM** — это проект который я создаю с целью получения новых и закрепления старых знаний в области Frontend-разработки.

Суть проекта заключается в создании системы управления товарами и заказами для интернет магазина путём использования REST API.

#### Как это должно работать?

Предположим пользователь создал товары в категории "Кроссовки", значит в его интернет магазине мы может получить доступ к этим товаром вот таким образом:

```javascript
const url = `https://.../api/categories?categoryId=${id}`
const response = await fetch(url)
const data = await response.json()
console.log(data)
/* Получам список кроссовок */
```

С помощью подобных запросов можно будет взаимодействовать с товарами, их параметрами, категориями, заказами и тд.

![App Screenshot](https://i.postimg.cc/c4vS32z0/image.png)

По возможности буду дополнять [мою](https://excalidraw.com/#json=6_NvoDzP5QHXLa9TlgaOo,IFr4DCoZwrCu0GEcoAUytw) схему на [Excalidraw](https://excalidraw.com).

## Технологии

Проект будет построен с использованием фреймворка [Next.js](https://nextjs.org). В качестве базы данных я буду использовать [Vercel Postgres](https://vercel.com/storage/postgres), а для взаимодействия с ней я буду использовать [Drizzle](https://orm.drizzle.team), так как он более производительный по сравнению с [Prisma](https://www.prisma.io), когда речь идёт о Edge-функциях. Возможно в дальнейшем я буду использовать [PolyScale](https://www.polyscale.ai) для кэширования базы данных.

Аутентификация пользователей будет происходить с использованием библиотеки [Auth.js](https://authjs.dev), а работа с Email через сервис [Resend](https://resend.com).

Дополнительно принял добавить в проект интернационализацию с помощью библиотеки [next-intl](https://next-intl-docs.vercel.app)

## Обо мне

Меня зовут Айнур, мне 21 год, студент. Изучаю Web-разработку c 17 лет с перерывом в один год, так как проходил военную службу.

Сейчас ищу компанию, в которой смогу начать полноценную карьеру в качестве Frontend-разработчика.

#### Мои Контакты

- **Электронная почта:** yarulinainur@gmail.com
- **Телефон:** +7 (906) 957-34-83
- **Telegram:** [@yarulinainur](https://t.me/yarulinainur)
- **WhatsApp:** [ваш_профиль](https://wa.me/79069573483)
- **Вконтакте:** [yarulinainur](https://vk.com/yarulinainur)
- **HeadHunter** [Резюме](https://seversk.hh.ru/resume/cc083949ff0b8eed430039ed1f714f61723771)
