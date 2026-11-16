
import { useEffect, useState } from "react";
import "./App.css";

const habits = [
  {
    id: 1,
    icon: "🚰",
    title: "Suvni tejash",
    titleRu: "Экономия воды",
    description: "Suvdan foydalanishda tejamkor bo'lish",
    descriptionRu: "Бережное использование воды",
    points: 10,
    water: 2,
    plastic: 0,
    waste: 0,
    co2: 0.2,
  },
  {
    id: 2,
    icon: "🥤",
    title: "Plastikdan voz kechish",
    titleRu: "Отказ от пластика",
    description: "Bir martalik plastik mahsulot ishlatmaslik",
    descriptionRu: "Отказ от одноразового пластика",
    points: 15,
    water: 0,
    plastic: 1,
    waste: 0,
    co2: 0.5,
  },
  {
    id: 3,
    icon: "♻️",
    title: "Chiqindilarni saralash",
    titleRu: "Сортировка отходов",
    description: "Chiqindilarni alohida ajratish",
    descriptionRu: "Разделение отходов по категориям",
    points: 15,
    water: 0,
    plastic: 0,
    waste: 1,
    co2: 0.3,
  },
  {
    id: 4,
    icon: "🚲",
    title: "Velosipedda yurish",
    titleRu: "Поездки на велосипеде",
    description: "Qisqa masofalarda velosipeddan foydalanish",
    descriptionRu: "Использование велосипеда на коротких расстояниях",
    points: 20,
    water: 0,
    plastic: 0,
    waste: 0,
    co2: 1,
  },
  {
    id: 5,
    icon: "🌳",
    title: "Tabiatni asrash",
    titleRu: "Защита природы",
    description: "Atrof-muhitni toza saqlash",
    descriptionRu: "Сохранение чистоты окружающей среды",
    points: 15,
    water: 0,
    plastic: 0,
    waste: 0,
    co2: 0.2,
  },
  {
    id: 6,
    icon: "💡",
    title: "Elektr energiyasini tejash",
    titleRu: "Экономия электроэнергии",
    description: "Keraksiz chiroqlarni o'chirish",
    descriptionRu: "Выключение ненужного освещения",
    points: 10,
    water: 0,
    plastic: 0,
    waste: 0,
    co2: 0.5,
  },
];

const translations = {
  uz: {
    menu: "ASOSIY MENYU",
    dashboard: "Dashboard",
    habits: "Kunlik odatlar",
    statistics: "Statistika",
    history: "Tarix",
    tip: "Ekologik maslahat",
    tipText: "Kichik odatlar katta o'zgarishlarga olib keladi!",
    greeting: "Salom! Ekologik qahramon 🌍",
    welcomeLabel: "SENING KICHIK QADAMLARING",
    welcomeTitle: "Sayyorani birgalikda",
    welcomeTitle2: "asraymiz!",
    welcomeText: "Har bir ekologik odatimiz kelajak uchun muhim. Bugun ham tabiatga yordam ber!",
    doHabits: "Odatlarni bajarish",
    results: "Umumiy natijalar",
    contribution: "Ekologiyaga qo'shgan hissangiz",
    water: "Tejalgan suv",
    plastic: "Kamaytirilgan plastik",
    waste: "Saralangan chiqindi",
    co2: "Tejalgan CO₂",
    liters: "litr",
    pieces: "dona",
    kg: "kg",
    everyDrop: "💧 Har bir tomchi muhim",
    natureBenefit: "🌱 Tabiatga foyda",
    cleanFuture: "♻️ Toza kelajak",
    cleanAir: "🌍 Toza havo",
    todayProgress: "Bugungi progress",
    todayGoals: "Bugungi ekologik maqsadlaring",
    completed: "ta vazifa bajarildi",
    allHabits: "Barcha odatlarni ko'rish →",
    yourLevel: "🎖️ Sening darajang",
    level: "LEVEL",
    beginner: "Yashil boshlovchi",
    protector: "Tabiat himoyachisi",
    legend: "Eco afsona",
    collected: "XP to'plading",
    nextLevel: "Keyingi darajaga:",
    weekly: "📅 Haftalik faollik",
    lastSeven: "Oxirgi 7 kundagi bajarilgan odatlar",
    dailyTitle: "🌱 Kunlik ekologik odatlar",
    earnPoints: "Har bir vazifani bajarib, ball to'pla!",
    done: "bajarildi",
    completedBtn: "✓ Bajarildi",
    doBtn: "Bajarish",
    statsTitle: "📊 Ekologik statistika",
    resultsUntil: "Shu kungacha erishgan natijalaring",
    achievements: "🏆 Umumiy yutuqlar",
    totalPoints: "Jami to'plangan ball",
    totalHabits: "Jami bajarilgan odatlar",
    activeDays: "Ketma-ket faol kunlar",
    days: "kun",
    historyTitle: "🕒 Odatlar tarixi",
    previousResults: "Oldingi kunlardagi natijalaring",
    noHistory: "Hali tarix mavjud emas",
    startHabits: "Odatlarni bajarishni boshlang!",
    habitsDone: "ta odat bajarilgan",
    footer: "EcoTrack — Har bir kichik qadam katta o'zgarish!",
    ecoUser: "Eco User",
    waterShort: "Suv",
    plasticShort: "Plastik",
    wasteShort: "Chiqindi",
    co2Short: "CO₂",
  },
  ru: {
    menu: "ГЛАВНОЕ МЕНЮ",
    dashboard: "Главная",
    habits: "Ежедневные привычки",
    statistics: "Статистика",
    history: "История",
    tip: "Эко-совет",
    tipText: "Маленькие привычки приводят к большим переменам!",
    greeting: "Привет! Эко-герой 🌍",
    welcomeLabel: "ТВОИ МАЛЕНЬКИЕ ШАГИ",
    welcomeTitle: "Вместе сохраним",
    welcomeTitle2: "нашу планету!",
    welcomeText: "Каждая экологическая привычка важна для будущего. Помоги природе сегодня!",
    doHabits: "Выполнить привычки",
    results: "Общие результаты",
    contribution: "Твой вклад в экологию",
    water: "Сэкономлено воды",
    plastic: "Сокращено пластика",
    waste: "Отсортировано отходов",
    co2: "Сокращено CO₂",
    liters: "литров",
    pieces: "шт.",
    kg: "кг",
    everyDrop: "💧 Каждая капля важна",
    natureBenefit: "🌱 Польза природе",
    cleanFuture: "♻️ Чистое будущее",
    cleanAir: "🌍 Чистый воздух",
    todayProgress: "Прогресс за сегодня",
    todayGoals: "Твои экологические цели на сегодня",
    completed: "заданий выполнено",
    allHabits: "Посмотреть все привычки →",
    yourLevel: "🎖️ Твой уровень",
    level: "УРОВЕНЬ",
    beginner: "Зелёный новичок",
    protector: "Защитник природы",
    legend: "Эко-легенда",
    collected: "XP набрано",
    nextLevel: "До следующего уровня:",
    weekly: "📅 Активность за неделю",
    lastSeven: "Выполненные привычки за последние 7 дней",
    dailyTitle: "🌱 Ежедневные экопривычки",
    earnPoints: "Выполняй задания и получай баллы!",
    done: "выполнено",
    completedBtn: "✓ Выполнено",
    doBtn: "Выполнить",
    statsTitle: "📊 Экологическая статистика",
    resultsUntil: "Твои результаты на сегодняшний день",
    achievements: "🏆 Общие достижения",
    totalPoints: "Всего набрано баллов",
    totalHabits: "Всего выполнено привычек",
    activeDays: "Дней активности подряд",
    days: "дн.",
    historyTitle: "🕒 История привычек",
    previousResults: "Твои результаты за предыдущие дни",
    noHistory: "История пока отсутствует",
    startHabits: "Начни выполнять привычки!",
    habitsDone: "привычек выполнено",
    footer: "EcoTrack — Каждый маленький шаг меняет мир!",
    ecoUser: "Эко-пользователь",
    waterShort: "Вода",
    plasticShort: "Пластик",
    wasteShort: "Отходы",
    co2Short: "CO₂",
  },
};

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getSavedData = () => {
  try {
    return JSON.parse(localStorage.getItem("ecoTrackData")) || {};
  } catch {
    return {};
  }
};

function App() {
  const [records, setRecords] = useState(getSavedData);
  const [activePage, setActivePage] = useState("dashboard");

  const [language, setLanguage] = useState(
    () => localStorage.getItem("ecoLanguage") || "uz"
  );

  const [theme, setTheme] = useState(
    () => localStorage.getItem("ecoTheme") || "dark"
  );

  const t = translations[language];

  useEffect(() => {
    localStorage.setItem("ecoTrackData", JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    localStorage.setItem("ecoLanguage", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("ecoTheme", theme);
  }, [theme]);

  const today = getToday();
  const completedToday = records[today] || [];

  const toggleHabit = (id) => {
    setRecords((prev) => {
      const current = prev[today] || [];
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      return {
        ...prev,
        [today]: updated,
      };
    });
  };

  const allCompleted = Object.values(records).flat();

  const totalPoints = allCompleted.reduce((sum, id) => {
    const habit = habits.find((item) => item.id === id);
    return sum + (habit?.points || 0);
  }, 0);

  const level = Math.floor(totalPoints / 100) + 1;
  const levelProgress = totalPoints % 100;

  const totalStats = allCompleted.reduce(
    (stats, id) => {
      const habit = habits.find((item) => item.id === id);

      if (habit) {
        stats.water += habit.water;
        stats.plastic += habit.plastic;
        stats.waste += habit.waste;
        stats.co2 += habit.co2;
      }

      return stats;
    },
    { water: 0, plastic: 0, waste: 0, co2: 0 }
  );

  const progress = Math.round(
    (completedToday.length / habits.length) * 100
  );

  const getStreak = () => {
    let streak = 0;
    const date = new Date();

    while (true) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const key = `${year}-${month}-${day}`;

      if (!records[key] || records[key].length === 0) break;

      streak++;
      date.setDate(date.getDate() - 1);
    }

    return streak;
  };

  const weekData = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const key = `${year}-${month}-${day}`;

    return {
      day: date.toLocaleDateString(language === "uz" ? "uz-UZ" : "ru-RU", {
        weekday: "short",
      }),
      count: (records[key] || []).length,
    };
  });

  const monthsUz = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr",
  ];

  const monthsRu = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];

  const now = new Date();

  const dateText =
    language === "uz"
      ? `${now.getDate()}-${monthsUz[now.getMonth()]}, ${now.getFullYear()}-yil`
      : `${now.getDate()} ${monthsRu[now.getMonth()]} ${now.getFullYear()} г.`;

  const formatDate = (date) => {
    const parts = date.split("-");
    return language === "uz"
      ? `${parts[2]}.${parts[1]}.${parts[0]}`
      : `${parts[2]}.${parts[1]}.${parts[0]}`;
  };

  const levelName =
    level < 3 ? t.beginner : level < 6 ? t.protector : t.legend;

  const historyDates = Object.keys(records)
    .filter((key) => records[key].length > 0)
    .sort((a, b) => b.localeCompare(a));

  return (
    <div className={`app ${theme}`}>
      <aside className="sidebar">
        <div className="logo">
          <span>🌿</span>
          <h2>EcoTrack</h2>
        </div>

        <p className="menu-title">{t.menu}</p>

        <nav>
          <button
            className={activePage === "dashboard" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("dashboard")}
          >
            <span>▦</span> {t.dashboard}
          </button>

          <button
            className={activePage === "habits" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("habits")}
          >
            <span>✓</span> {t.habits}
          </button>

          <button
            className={activePage === "statistics" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("statistics")}
          >
            <span>▥</span> {t.statistics}
          </button>

          <button
            className={activePage === "history" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("history")}
          >
            <span>◷</span> {t.history}
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="eco-tip">
            <span>🌱</span>
            <h4>{t.tip}</h4>
            <p>{t.tipText}</p>
          </div>
          <p className="version">EcoTrack v1.0</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topbar-title">
            <p className="date">{dateText}</p>
            <h2>{t.greeting}</h2>
          </div>

          <div className="header-actions">
            <div className="settings-buttons">
              <button
                className="setting-btn"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              <button
                className="setting-btn language-btn"
                onClick={() =>
                  setLanguage((prev) => (prev === "uz" ? "ru" : "uz"))
                }
              >
                {language === "uz" ? "🇷🇺 RU" : "🇺🇿 UZ"}
              </button>
            </div>

            <div className="profile">
              <div className="profile-icon">🌳</div>
              <div>
                <h4>{t.ecoUser}</h4>
                <p>Level {level}</p>
              </div>
            </div>
          </div>
        </header>

        {activePage === "dashboard" && (
          <>
            <section className="welcome">
              <div>
                <span className="welcome-label">{t.welcomeLabel}</span>
                <h1>{t.welcomeTitle}<br />{t.welcomeTitle2}</h1>
                <p>{t.welcomeText}</p>
                <button onClick={() => setActivePage("habits")}>
                  {t.doHabits} <span>→</span>
                </button>
              </div>
              <div className="welcome-art">🌍</div>
            </section>

            <section className="section-heading">
              <div>
                <h2>{t.results}</h2>
                <p>{t.contribution}</p>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon water">💧</div>
                <p>{t.water}</p>
                <h2>{totalStats.water} <small>{t.liters}</small></h2>
                <span>{t.everyDrop}</span>
              </div>

              <div className="stat-card">
                <div className="stat-icon plastic">♻️</div>
                <p>{t.plastic}</p>
                <h2>{totalStats.plastic} <small>{t.pieces}</small></h2>
                <span>{t.natureBenefit}</span>
              </div>

              <div className="stat-card">
                <div className="stat-icon waste">🗑️</div>
                <p>{t.waste}</p>
                <h2>{totalStats.waste} <small>{t.kg}</small></h2>
                <span>{t.cleanFuture}</span>
              </div>

              <div className="stat-card">
                <div className="stat-icon co2">🌳</div>
                <p>{t.co2}</p>
                <h2>{totalStats.co2.toFixed(1)} <small>{t.kg}</small></h2>
                <span>{t.cleanAir}</span>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="panel progress-panel">
                <div className="panel-heading">
                  <div>
                    <h3>{t.todayProgress}</h3>
                    <p>{t.todayGoals}</p>
                  </div>
                  <span className="percentage">{progress}%</span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="progress-caption">
                  {completedToday.length} / {habits.length} {t.completed}
                </p>

                {habits.slice(0, 4).map((habit) => (
                  <div className="mini-habit" key={habit.id}>
                    <span>{habit.icon}</span>
                    <p>{language === "uz" ? habit.title : habit.titleRu}</p>
                    <span className={completedToday.includes(habit.id) ? "done" : "pending"}>
                      {completedToday.includes(habit.id) ? "✓" : "○"}
                    </span>
                  </div>
                ))}

                <button
                  className="text-button"
                  onClick={() => setActivePage("habits")}
                >
                  {t.allHabits}
                </button>
              </div>

              <div className="panel level-panel">
                <h3>{t.yourLevel}</h3>
                <div className="level-circle">
                  <span>🌿</span>
                  <h2>{level}</h2>
                  <p>{t.level}</p>
                </div>
                <h3 className="level-name">{levelName}</h3>
                <p>{totalPoints} XP {t.collected}</p>
                <div className="progress-track level-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${levelProgress}%` }}
                  />
                </div>
                <small>{t.nextLevel} {100 - levelProgress} XP</small>
              </div>
            </section>

            <section className="panel week-panel">
              <h3>{t.weekly}</h3>
              <p>{t.lastSeven}</p>
              <div className="week-chart">
                {weekData.map((item, index) => (
                  <div className="chart-column" key={index}>
                    <span>{item.count}</span>
                    <div className="chart-bar-bg">
                      <div
                        className="chart-bar"
                        style={{
                          height: `${Math.max((item.count / habits.length) * 100, 4)}%`,
                        }}
                      />
                    </div>
                    <small>{item.day}</small>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === "habits" && (
          <section className="page-content">
            <div className="section-heading">
              <div>
                <h2>{t.dailyTitle}</h2>
                <p>{t.earnPoints}</p>
              </div>
              <span className="today-badge">{dateText}</span>
            </div>

            <div className="habit-summary">
              <h3>{completedToday.length} / {habits.length} {t.done}</h3>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="habits-grid">
              {habits.map((habit) => {
                const done = completedToday.includes(habit.id);

                return (
                  <div className={`habit-card ${done ? "habit-done" : ""}`} key={habit.id}>
                    <div className="habit-icon">{habit.icon}</div>
                    <span className="xp">+{habit.points} XP</span>
                    <h3>{language === "uz" ? habit.title : habit.titleRu}</h3>
                    <p>{language === "uz" ? habit.description : habit.descriptionRu}</p>
                    <button
                      className={done ? "complete-btn completed-btn" : "complete-btn"}
                      onClick={() => toggleHabit(habit.id)}
                    >
                      {done ? t.completedBtn : t.doBtn}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activePage === "statistics" && (
          <section className="page-content">
            <div className="section-heading">
              <div>
                <h2>{t.statsTitle}</h2>
                <p>{t.resultsUntil}</p>
              </div>
            </div>

            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon water">💧</div>
                <p>{t.water}</p>
                <h2>{totalStats.water} <small>{t.liters}</small></h2>
              </div>
              <div className="stat-card">
                <div className="stat-icon plastic">♻️</div>
                <p>{t.plastic}</p>
                <h2>{totalStats.plastic} <small>{t.pieces}</small></h2>
              </div>
              <div className="stat-card">
                <div className="stat-icon waste">🗑️</div>
                <p>{t.waste}</p>
                <h2>{totalStats.waste} <small>{t.kg}</small></h2>
              </div>
              <div className="stat-card">
                <div className="stat-icon co2">🌳</div>
                <p>{t.co2}</p>
                <h2>{totalStats.co2.toFixed(1)} <small>{t.kg}</small></h2>
              </div>
            </section>

            <div className="panel achievements-panel">
              <h3>{t.achievements}</h3>
              <div className="achievement">
                <span>⭐</span>
                <div>
                  <h4>{totalPoints} XP</h4>
                  <p>{t.totalPoints}</p>
                </div>
              </div>
              <div className="achievement">
                <span>🌿</span>
                <div>
                  <h4>{allCompleted.length}</h4>
                  <p>{t.totalHabits}</p>
                </div>
              </div>
              <div className="achievement">
                <span>🔥</span>
                <div>
                  <h4>{getStreak()} {t.days}</h4>
                  <p>{t.activeDays}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === "history" && (
          <section className="page-content">
            <div className="section-heading">
              <div>
                <h2>{t.historyTitle}</h2>
                <p>{t.previousResults}</p>
              </div>
            </div>

            <div className="panel history-panel">
              {historyDates.length === 0 ? (
                <div className="empty-history">
                  <span>🌱</span>
                  <h3>{t.noHistory}</h3>
                  <p>{t.startHabits}</p>
                </div>
              ) : (
                historyDates.map((date) => (
                  <div className="history-item" key={date}>
                    <div>
                      <h4>{formatDate(date)}</h4>
                      <p>{records[date].length} {t.habitsDone}</p>
                    </div>
                    <span>
                      +{habits
                        .filter((habit) => records[date].includes(habit.id))
                        .reduce((sum, habit) => sum + habit.points, 0)} XP
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        <footer>
          <p>🌿 {t.footer}</p>
          <span>© 2026 EcoTrack</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
