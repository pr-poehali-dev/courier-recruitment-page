import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время!");
    setFormData({ name: "", phone: "", message: "" });
  };

  const benefits = [
    {
      icon: "Wallet",
      title: "Высокий доход",
      description: "Зарабатывайте от 80 000₽ в месяц. Чем больше заказов — тем выше доход.",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Работайте когда удобно вам. Сами выбирайте время и количество смен.",
    },
    {
      icon: "TrendingUp",
      title: "Карьерный рост",
      description: "Станьте старшим курьером или координатором команды.",
    },
    {
      icon: "Shield",
      title: "Официальное трудоустройство",
      description: "Полное соблюдение ТК РФ, оплачиваемые больничные и отпуск.",
    },
    {
      icon: "Smartphone",
      title: "Удобное приложение",
      description: "Простой интерфейс для получения заказов и навигации.",
    },
    {
      icon: "Users",
      title: "Дружная команда",
      description: "Поддержка коллег и менеджеров в любое время.",
    },
  ];

  const bonuses = [
    {
      amount: "10 000₽",
      condition: "За первые 100 заказов",
      highlight: true,
    },
    {
      amount: "5 000₽",
      condition: "За выполнение плана недели",
      highlight: false,
    },
    {
      amount: "+30%",
      condition: "К ставке в выходные дни",
      highlight: false,
    },
    {
      amount: "3 000₽",
      condition: "За приведенного друга",
      highlight: false,
    },
  ];

  const requirements = [
    "Возраст от 18 лет",
    "Наличие смартфона на Android или iOS",
    "Ответственность и пунктуальность",
    "Готовность к физическим нагрузкам",
    "Знание города (желательно)",
    "Личный транспорт (велосипед, самокат или автомобиль)",
  ];

  const faqs = [
    {
      question: "Сколько можно заработать?",
      answer:
        "Средний доход курьера составляет 80 000 - 120 000₽ в месяц. Это зависит от количества выполненных заказов и вашей активности. Плюс бонусы и премии!",
    },
    {
      question: "Нужен ли опыт работы?",
      answer:
        "Опыт работы не требуется! Мы проведем полное обучение и расскажем обо всех тонкостях работы. Первые заказы вы будете выполнять под контролем наставника.",
    },
    {
      question: "Какой график работы?",
      answer:
        "График полностью гибкий. Вы сами выбираете удобное время и количество смен. Можно работать по выходным, в будни или совмещать с учебой.",
    },
    {
      question: "Когда я получу бонус 10 000₽?",
      answer:
        "Бонус начисляется после выполнения первых 100 заказов. Обычно это занимает 2-4 недели активной работы. Выплата происходит на следующий день после достижения цели.",
    },
    {
      question: "Нужен ли личный транспорт?",
      answer:
        "Да, необходим личный транспорт: велосипед, самокат, мопед или автомобиль. Это позволяет вам быть мобильным и выполнять больше заказов.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Оплата производится 2 раза в месяц на банковскую карту. Вы всегда видите свой заработок в приложении в режиме реального времени.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-secondary text-secondary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg mb-4">
              🎁 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              ПОЛУЧИ{" "}
              <span className="text-primary">10 000₽</span>
              <br />
              ЗА ПЕРВЫЕ 100 ЗАКАЗОВ
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-2xl mx-auto font-medium">
              Стань курьером и начни зарабатывать от 80 000₽ в месяц с гибким графиком
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transform hover:scale-105 transition-all"
                onClick={() =>
                  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ПОДАТЬ ЗАЯВКУ
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-bold border-2 border-primary text-secondary-foreground hover:bg-primary/10"
                onClick={() =>
                  document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="hsl(var(--background))"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      <section id="bonuses" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Бонусы и премии
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className={`${
                  bonus.highlight
                    ? "bg-primary border-primary shadow-2xl transform scale-105"
                    : "bg-card"
                } transition-all hover:scale-105`}
              >
                <CardContent className="p-6 text-center space-y-3">
                  {bonus.highlight && (
                    <div className="text-sm font-bold text-primary-foreground bg-secondary inline-block px-3 py-1 rounded-full">
                      ГЛАВНЫЙ БОНУС
                    </div>
                  )}
                  <div
                    className={`text-4xl font-black ${
                      bonus.highlight ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {bonus.amount}
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      bonus.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    {bonus.condition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Почему работать курьером выгодно?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Требования к кандидатам
          </h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary-foreground" size={16} />
                    </div>
                    <span className="text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Готов начать зарабатывать?
          </h2>
          <p className="text-center text-xl mb-12 text-secondary-foreground/80">
            Оставь заявку и мы свяжемся с тобой в течение 24 часов
          </p>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Дополнительная информация
                  </label>
                  <Textarea
                    placeholder="Расскажите о себе, вашем опыте или задайте вопрос"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="Send" className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 text-center space-y-2">
            <p className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Phone" size={20} />
              <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                +7 (495) 123-45-67
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Mail" size={20} />
              <a href="mailto:job@delivery.ru" className="hover:text-primary transition-colors">
                job@delivery.ru
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-secondary-foreground/70">
            © 2024 Служба доставки. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
