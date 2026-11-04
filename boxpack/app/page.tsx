const steps = [
  {
    number: "ШАГ 1",
    title: "Оставляете заявку",
    description: "Через сайт или Telegram",
  },
  {
    number: "ШАГ 2",
    title: "Получаете расчёт",
    description: "Под ваш объем и формат работы",
  },
  {
    number: "ШАГ 3",
    title: "Подписываем договор",
    description: "Через ЭДО.",
  },
  {
    number: "ШАГ 4",
    title: "Планируем запуск",
    description: "От поставщика или транспортной компании",
  },
  {
    number: "ШАГ 5",
    title: "Доставляете товар",
    description: "С видеоконтролем каждого этапа.",
  },
  {
    number: "ШАГ 6",
    title: "Отслеживаете процесс",
    description: "На маркетплейсы по всей России",
  },
  {
    number: "ШАГ 7",
    title: "Получаете результат",
    description: "Отчеты и прозрачную статистику",
  },
];

const services = [
  {
    title: "Приёмка и инвентаризация",
    description: "Принимаем поставки любого объема и размещаем товар на адресное хранение.",
  },
  {
    title: "Проверка на брак",
    description: "Контроль качества перед отправкой покупателю.",
  },
  {
    title: "Автоматизация процессов",
    description: "Автоматические линии и видеоконтроль каждого заказа.",
  },
  {
    title: "Сборка заказов",
    description: "Быстрая комплектация заказов по данным маркетплейсов.",
  },
  {
    title: "Отправка на маркетплейсы",
    description: "FBO и FBS для всех крупных площадок.",
  },
  {
    title: "Хранение товаров",
    description: "Безопасное адресное хранение продукции.",
  },
  {
    title: "Интеграции",
    description: "Синхронизация с маркетплейсами и CRM.",
  },
];

const advantages = [
  {
    title: "Скорость",
    description: "До 20 000 товаров за смену и отправка день в день.",
  },
  {
    title: "Точность",
    description: "99.8% точность сборки благодаря автоматизации.",
  },
  {
    title: "Надёжность",
    description: "Страхование товара и круглосуточный контроль.",
  },
  {
    title: "Поддержка",
    description: "Персональный менеджер и оперативная помощь.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Шапка сайта */}
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#home" aria-label="BOXPACK — главная">
            BOXPACK
          </a>

          <nav className="nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#video">Видеофиксация</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#cases">Кейсы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <a className="menu-button" href="#contacts">
            Связаться
          </a>
        </div>
      </header>

      <main>
        {/* Первый экран */}
        <section className="hero" id="home">
          <div className="wrap hero-inner">
            <div>
              <span className="eyebrow">Автоматизированный фулфилмент</span>
              <h1>Фулфилмент, который держит сроки и репутацию</h1>
              <p className="hero-copy">
                Автоматизированная упаковка, видеоконтроль каждого заказа и 
                отправка в день поступления. Мы берем на себя хранение, сборку,
                 маркировку и логистику.
              </p>

              <div className="hero-links">
                <a className="text-link" href="#calculator">
                  Рассчитать стоимость <span aria-hidden="true">→</span>
                </a>
                <a className="button" href="#contacts">
                  Получить консультацию
                </a>
              </div>

              <div className="stats" id="calculator">
                <div className="stat">
                  <strong>5000+</strong>
                  <span>заказов обрабатываем</span>
                </div>
                <div className="stat">
                  <strong>99,8%</strong>
                  <span>точность сборки</span>
                </div>
                <div className="stat">
                  <strong>FBO/FBS</strong>
                  <span>Все маркетплейсы</span>
                </div>
              </div>
            </div>

            <div className="video-placeholder" id="video">
              <p>Video</p>
            </div>
          </div>
        </section>

        {/* Как начать работать с нами */}
        <section className="section" id="steps">
          <div className="wrap">
            <div className="section-heading">
              <h2>Как начать работать с нами</h2>
              <p>
                Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
              </p>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <p className="step-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Услуги фулфилмента */}
        <section className="section services-section" id="services">
          <div className="wrap">
            <div className="section-heading">
              <h2>Услуги фулфилмента</h2>
              <p>
                Полный цикл обработки товара от приемки до доставки.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Почему выбирают BOXPACK */}
        <section className="advantages" id="cases">
          <div className="wrap">
            <div className="section-heading">
              <h2>Почему выбирают BOXPACK</h2>
            </div>

            <div className="advantages-grid">
              {advantages.map((advantage) => (
                <article className="advantage-card" key={advantage.title}>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Контакты и подвал */}
      <footer className="footer" id="contacts">
        <div className="wrap footer-inner">
          <a className="logo" href="#home">
            BOXPACK
          </a>
          <span>Vavilkin</span>
          <a href="mailto:info@boxpack.ru">Связаться с нами</a>
        </div>
      </footer>
    </>
  );
}
