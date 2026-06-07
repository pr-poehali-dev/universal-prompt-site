import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5cd481a9-de3c-416c-8495-bc47c42b6b7e/files/eb5a034a-47e2-49ce-9d8b-04e22c96a62a.jpg";

const painPoints = [
  {
    icon: "Clock",
    text: "У меня ощущение, будто жизнь стоит на месте. Дни идут, я что-то делаю, но внутри чувство, что я способен на большее — и почему-то не живу в эту силу",
  },
  {
    icon: "RefreshCw",
    text: "Я как будто снова и снова прихожу в одну и ту же точку: одинаковые отношения, одинаковые проблемы с деньгами, одинаковое чувство разочарования в себе",
  },
  {
    icon: "EyeOff",
    text: "Внутри столько мыслей, идей, желаний… но как только нужно показать себя миру — я будто сжимаюсь и снова прячусь",
  },
  {
    icon: "TrendingDown",
    text: "Я устал жить от месяца к месяцу. Самое болезненное — я понимаю, что могу зарабатывать больше, но будто сам себя торможу",
  },
  {
    icon: "Users",
    text: "Когда вижу, как другие растут, проявляются, запускают проекты — внутри смесь боли и ощущения, что я опять опаздываю в своей жизни",
  },
  {
    icon: "Compass",
    text: "Я настолько привык подстраиваться под других и жить «как надо», что уже не понимаю, где вообще мои настоящие желания",
  },
];

const results = [
  { icon: "Zap", title: "Внутренняя опора", text: "Вы перестанете искать одобрения снаружи и найдёте устойчивость внутри себя — ту самую, которая не зависит от чужого мнения" },
  { icon: "TrendingUp", title: "Реальный рост дохода", text: "Уберёте внутренние блоки, которые держат вас на одном уровне. Начнёте действовать, а не откладывать" },
  { icon: "Shield", title: "Конец повторяющимся сценариям", text: "Поймёте корень повторяющихся ситуаций и выйдете из петли — в отношениях, деньгах, самореализации" },
  { icon: "Sun", title: "Энергия и желание жить", text: "Вернётся ощущение себя живым. Появится радость от простых вещей и желание двигаться вперёд" },
  { icon: "Target", title: "Ясность и направление", text: "Вы наконец поймёте, чего хотите на самом деле — и начнёте идти туда без лишних сомнений" },
  { icon: "Heart", title: "Принятие себя", text: "Исчезнет постоянная самокритика. Придёт умение быть на своей стороне — даже когда трудно" },
];

const programBlocks = [
  { week: "1–2", title: "Диагностика сценария", text: "Находим повторяющиеся паттерны. Понимаем, откуда они берутся и как работают именно у вас" },
  { week: "3–4", title: "Работа с корнем", text: "Идём вглубь: убеждения, детские решения, страхи. Мягко, но честно — туда, где реально застряло" },
  { week: "5–6", title: "Новая опора и выход", text: "Выстраиваем новую внутреннюю базу. Начинаете действовать из силы, а не из страха или долга" },
];

const formats = [
  {
    name: "Групповое сопровождение",
    duration: "6 недель",
    price: "от 12 500 ₽",
    badge: "",
    features: [
      "Еженедельные групповые встречи",
      "Работа в малой группе (до 8 человек)",
      "Поддержка в чате",
      "Практические задания",
      "Разбор ваших ситуаций",
    ],
    dark: false,
  },
  {
    name: "Личное сопровождение",
    duration: "6 недель",
    price: "от 22 000 ₽",
    badge: "Популярный",
    features: [
      "Индивидуальные сессии каждую неделю",
      "Персональный разбор вашей ситуации",
      "Поддержка между встречами",
      "Гибкий график",
      "Работа строго под ваш запрос",
    ],
    dark: false,
  },
  {
    name: "Глубокое сопровождение",
    duration: "10 недель",
    price: "30 500 ₽",
    badge: "Максимум",
    features: [
      "Полностью индивидуальный формат",
      "10 недель погружённой работы",
      "Сессии 2 раза в неделю",
      "Экстренная поддержка",
      "Работа на глубоком уровне изменений",
    ],
    dark: true,
  },
];

const testimonials = [
  {
    name: "Марина, 34 года",
    text: "После первых трёх встреч я поняла, почему всё время выбирала одних и тех же мужчин. Это было как щелчок. Сейчас в отношениях, о которых давно мечтала.",
    result: "Вышла из токсичных отношений, нашла себя",
  },
  {
    name: "Артём, 29 лет",
    text: "Я три года «собирался» запустить свой проект. За 6 недель работы — запустил. Деньги пошли на третьей неделе после окончания программы.",
    result: "Запустил бизнес, вырос в доходе в 2,5 раза",
  },
  {
    name: "Ольга, 41 год",
    text: "Думала, что проблема в обстоятельствах. Оказалось — в голове. Теперь я понимаю свои реакции и управляю ими, а не они мной.",
    result: "Восстановила отношения с семьёй, сменила работу",
  },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", format: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(180deg, rgba(20,50,25,0.85) 0%, transparent 100%)", backdropFilter: "blur(8px)" }}>
        <div className="font-display text-white text-xl font-light tracking-wide">
          Перепиши свой сценарий
        </div>
        <div className="hidden md:flex gap-8">
          {[["О программе", "about"], ["Результаты", "results"], ["Цены", "pricing"], ["Записаться", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-white text-sm font-body transition-colors duration-200">
              {label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 py-4 flex flex-col items-center gap-4 md:hidden"
            style={{ background: "hsl(var(--forest))" }}>
            {[["О программе", "about"], ["Результаты", "results"], ["Цены", "pricing"], ["Записаться", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-white/90 hover:text-white font-body text-base">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Фон" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(15,45,20,0.88) 0%, rgba(20,55,25,0.75) 50%, rgba(60,45,10,0.7) 100%)" }} />
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 blob animate-float opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />
        <div className="absolute bottom-32 left-10 w-48 h-48 blob-2 animate-float opacity-10"
          style={{ animationDelay: "2s", background: "radial-gradient(circle, hsl(140 60% 60%) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--gold))" }} />
            <span className="text-white/80 text-sm font-body">Программа личного сопровождения</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-6 opacity-0 animate-fade-in-up delay-100"
            style={{ animationFillMode: "forwards" }}>
            Ты готов жить{" "}
            <span className="gold-shimmer">иначе</span>?
          </h1>

          <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 opacity-0 animate-fade-in-up delay-200"
            style={{ animationFillMode: "forwards" }}>
            Для тех, кто устал повторять одни и те же ошибки, откладывать жизнь на потом и жить «не в полную силу»
          </p>
          <p className="font-body text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-300"
            style={{ animationFillMode: "forwards" }}>
            6 или 10 недель глубокой работы — и вы выходите в реализацию, деньги и настоящую себя
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-400"
            style={{ animationFillMode: "forwards" }}>
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Хочу участвовать
            </button>
            <button className="btn-outline" onClick={() => scrollTo("about")}>
              Узнать подробнее
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-in-up delay-500"
            style={{ animationFillMode: "forwards" }}>
            {[["200+", "клиентов"], ["6 лет", "практики"], ["97%", "рекомендуют"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-light" style={{ color: "hsl(var(--gold-light))" }}>{num}</div>
                <div className="font-body text-white/50 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/40" />
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 px-6 gradient-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 -translate-y-1/2 translate-x-1/3"
          style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4" style={{ color: "hsl(var(--forest))" }}>
              Узнаёшь себя?
            </h2>
            <p className="font-body mt-4 text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Если хотя бы одно из этих ощущений знакомо — эта программа для тебя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-6 card-hover shadow-sm"
                style={{ border: "1px solid hsl(var(--border))" }}>
                <div className="quote-mark">"</div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--gold-pale))" }}>
                  <Icon name={point.icon} fallback="Circle" size={20} style={{ color: "hsl(var(--forest))" }} />
                </div>
                <p className="font-body text-sm leading-relaxed italic" style={{ color: "hsl(var(--foreground))" }}>
                  «{point.text}»
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-green" onClick={() => scrollTo("contact")}>
              Да, это про меня — хочу изменить это
            </button>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-20 px-6 relative overflow-hidden" style={{ background: "hsl(var(--forest))" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-80 h-80 blob"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />
          <div className="absolute bottom-10 right-10 w-60 h-60 blob-2"
            style={{ background: "radial-gradient(circle, hsl(140 60% 70%) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mt-4">
              Что изменится в вашей жизни
            </h2>
            <p className="font-body text-white/60 mt-4 text-lg max-w-2xl mx-auto">
              Не обещания «легко и быстро». Реальные изменения, которые происходят в процессе работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <div key={i} className="rounded-3xl p-6 card-hover"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 gradient-gold">
                  <Icon name={r.icon} fallback="Circle" size={22} style={{ color: "hsl(var(--forest))" }} />
                </div>
                <h3 className="font-display text-xl text-white font-medium mb-3">{r.title}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PROGRAM */}
      <section id="about" className="py-20 px-6 gradient-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4" style={{ color: "hsl(var(--forest))" }}>
              Как устроена программа
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {[
                ["Это не курс", "Никаких видеоуроков и домашних заданий ради галочки. Это живая работа вместе с автором — по вашему конкретному запросу"],
                ["Глубина, а не поверхность", "Мы не работаем с симптомами. Мы находим и меняем то, что стоит за повторяющимися сценариями"],
                ["Безопасное пространство", "Здесь можно быть собой — без осуждения, без «правильных ответов», без масок"],
                ["Результат, а не процесс", "Каждая встреча ведёт к конкретному сдвигу. Вы чувствуете изменения уже в ходе работы"],
              ].map(([title, text], i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} style={{ color: "hsl(var(--forest))" }} />
                  </div>
                  <div>
                    <div className="font-body font-semibold mb-1" style={{ color: "hsl(var(--forest))" }}>{title}</div>
                    <div className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {programBlocks.map((block, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 card-hover shadow-sm" style={{ border: "1px solid hsl(var(--border))" }}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="px-3 py-1 rounded-full text-xs font-body font-semibold"
                      style={{ background: "hsl(var(--gold-pale))", color: "hsl(var(--forest))" }}>
                      Неделя {block.week}
                    </div>
                    <h4 className="font-display text-lg font-medium" style={{ color: "hsl(var(--forest))" }}>{block.title}</h4>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{block.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Записаться на программу
            </button>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4" style={{ color: "hsl(var(--forest))" }}>
              Кто ведёт программу
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto overflow-hidden"
                style={{ borderRadius: "40% 60% 60% 40% / 40% 50% 50% 60%" }}>
                <img
                  src="https://cdn.poehali.dev/projects/5cd481a9-de3c-416c-8495-bc47c42b6b7e/bucket/1aa9b95f-7410-4b10-812b-b2654318bf07.png"
                  alt="Автор программы"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-3xl p-4 shadow-lg" style={{ border: "1px solid hsl(var(--border))" }}>
                <div className="font-display text-3xl font-light" style={{ color: "hsl(var(--gold))" }}>6</div>
                <div className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>лет практики</div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl font-light mb-2" style={{ color: "hsl(var(--forest))" }}>
                Гульмира Абу
              </h3>
              <p className="font-body text-sm mb-6" style={{ color: "hsl(var(--gold))" }}>Психолог, коуч, ведущий программы</p>

              <div className="space-y-4 mb-8">
                {[
                  "6 лет в практической психологии и работе со сценариями",
                  "200+ клиентов, прошедших трансформацию",
                  "Личный опыт преодоления кризисов и выхода из повторяющихся паттернов",
                  "Работаю с реальными изменениями, а не красивыми словами",
                  "Каждый клиент — отдельная история, отдельный подход",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} style={{ color: "hsl(var(--forest))" }} />
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-3xl font-display text-lg leading-relaxed italic"
                style={{ borderLeft: "4px solid hsl(var(--gold))", background: "hsl(var(--gold-pale))", color: "hsl(var(--forest))" }}>
                «Мой путь начался с личного кризиса. Именно поэтому я знаю изнутри, как сложно — и как реально — выйти в другую жизнь»
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 gradient-green-soft relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4" style={{ color: "hsl(var(--forest))" }}>
              Истории изменений
            </h2>
            <p className="font-body mt-4 text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
              Реальные люди. Реальные результаты.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 card-hover shadow-sm flex flex-col"
                style={{ border: "1px solid hsl(var(--border))" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: "hsl(var(--gold))", fill: "hsl(var(--gold))" }} />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed italic flex-1 mb-6" style={{ color: "hsl(var(--foreground))" }}>
                  «{t.text}»
                </p>
                <div>
                  <div className="font-body font-semibold text-sm" style={{ color: "hsl(var(--forest))" }}>{t.name}</div>
                  <div className="font-body text-xs mt-1" style={{ color: "hsl(var(--gold))" }}>{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4" style={{ color: "hsl(var(--forest))" }}>
              Форматы и стоимость
            </h2>
            <p className="font-body mt-4 text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
              Выберите то, что подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="rounded-3xl p-7 card-hover flex flex-col relative overflow-hidden"
                style={f.dark
                  ? { background: "linear-gradient(160deg, hsl(140, 35%, 22%) 0%, hsl(140, 28%, 30%) 50%, hsl(43, 50%, 35%) 100%)", border: "2px solid transparent" }
                  : { background: "hsl(var(--cream))", border: "2px solid hsl(var(--gold))" }
                }>
                {f.badge && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-body font-semibold"
                    style={f.dark
                      ? { background: "hsl(var(--gold))", color: "hsl(var(--forest))" }
                      : { background: "hsl(var(--forest))", color: "white" }}>
                    {f.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-medium mb-1" style={{ color: f.dark ? "white" : "hsl(var(--forest))" }}>
                    {f.name}
                  </h3>
                  <div className="font-body text-sm" style={{ color: f.dark ? "rgba(255,255,255,0.6)" : "hsl(var(--muted-foreground))" }}>
                    {f.duration}
                  </div>
                </div>

                <div className="font-display text-4xl font-light mb-6"
                  style={{ color: f.dark ? "hsl(var(--gold-light))" : "hsl(var(--forest))" }}>
                  {f.price}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {f.features.map((feat, j) => (
                    <li key={j} className="flex gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: f.dark ? "rgba(192,150,50,0.2)" : "hsl(var(--gold-pale))" }}>
                        <Icon name="Check" size={10} style={{ color: f.dark ? "hsl(var(--gold-light))" : "hsl(var(--forest))" }} />
                      </div>
                      <span className="font-body text-sm leading-relaxed"
                        style={{ color: f.dark ? "rgba(255,255,255,0.75)" : "hsl(var(--foreground))" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={f.dark ? "btn-primary" : "btn-green"} onClick={() => scrollTo("contact")}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(140, 35%, 22%) 0%, hsl(140, 28%, 30%) 50%, hsl(43, 50%, 35%) 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 blob animate-float"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mt-4">
              Сделайте первый шаг
            </h2>
            <p className="font-body text-white/70 mt-4 text-base leading-relaxed max-w-md mx-auto">
              Заполните форму — я свяжусь с вами в течение нескольких часов и расскажу, как именно мы можем работать
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl p-10 text-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={30} style={{ color: "hsl(var(--forest))" }} />
              </div>
              <h3 className="font-display text-3xl text-white font-light mb-3">Заявка отправлена!</h3>
              <p className="font-body text-white/70 leading-relaxed">
                Я получила ваше сообщение и свяжусь с вами совсем скоро. Это — первый шаг к вашему новому сценарию.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-white/70 text-sm mb-2">Ваше имя *</label>
                  <input required
                    className="w-full px-4 py-3 rounded-2xl font-body text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-body text-white/70 text-sm mb-2">Телефон / Telegram *</label>
                  <input required
                    className="w-full px-4 py-3 rounded-2xl font-body text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                    placeholder="+7 или @username"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-white/70 text-sm mb-2">Интересующий формат</label>
                <select
                  className="w-full px-4 py-3 rounded-2xl font-body text-sm text-white focus:outline-none transition-colors appearance-none"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", colorScheme: "dark" }}
                  value={formData.format}
                  onChange={e => setFormData({ ...formData, format: e.target.value })}>
                  <option value="" style={{ background: "hsl(var(--forest))" }}>Выберите формат</option>
                  <option value="group" style={{ background: "hsl(var(--forest))" }}>Групповое сопровождение — 6 недель</option>
                  <option value="personal" style={{ background: "hsl(var(--forest))" }}>Личное сопровождение — 6 недель</option>
                  <option value="deep" style={{ background: "hsl(var(--forest))" }}>Глубокое сопровождение — 10 недель (30 500 ₽)</option>
                  <option value="consult" style={{ background: "hsl(var(--forest))" }}>Сначала хочу бесплатную консультацию</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-white/70 text-sm mb-2">Расскажите о себе (необязательно)</label>
                <textarea rows={3}
                  className="w-full px-4 py-3 rounded-2xl font-body text-sm text-white placeholder-white/40 focus:outline-none transition-colors resize-none"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                  placeholder="Что сейчас происходит в вашей жизни? Что хотите изменить?"
                  value={formData.comment}
                  onChange={e => setFormData({ ...formData, comment: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Отправить заявку
              </button>

              <p className="font-body text-white/40 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-6" style={{ background: "hsl(var(--gold-pale))" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4" style={{ color: "hsl(var(--forest))" }}>
            Сейчас — подходящий момент
          </h2>
          <p className="font-body text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Если вы дочитали до этого места — значит, что-то внутри уже готово к изменениям. Не откладывайте.
          </p>
          <button className="btn-green" onClick={() => scrollTo("contact")}>
            Записаться на программу
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ background: "hsl(var(--forest))" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-white/70 text-lg font-light">
            Перепиши свой сценарий
          </div>
          <div className="font-body text-white/40 text-sm text-center">
            Программа личного сопровождения
          </div>
          <button onClick={() => scrollTo("contact")}
            className="font-body text-white/60 hover:text-white text-sm transition-colors">
            Записаться
          </button>
        </div>
      </footer>
    </div>
  );
}