// const loadAndExecuteFunctions = async () => {
//     const entryFiles = await import.meta.glob('./file*.js'); // Загружаем все файлы, соответствующие шаблону

//     for (const path in entryFiles) {
//         const module = await entryFiles[path](); // Динамически импортируем модуль
//         module.default(); // Вызываем экспортируемую функцию по умолчанию
//     }
// };

// loadAndExecuteFunctions();
