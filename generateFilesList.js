import fs from 'fs';
import path from 'path';

// Функция для рекурсивного получения всех файлов .js
const getAllJsFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            // Если это директория, рекурсивно ищем в ней
            results = results.concat(getAllJsFiles(filePath));
        } else if (file.endsWith('.js')) {
            // Если это файл .js, добавляем его в результаты
            results.push(filePath);
        }
    });

    return results;
};

const directoryPath = path.join(process.cwd(), 'src/scripts');

const generateDynamicLoader = () => {
    const currentFiles = getAllJsFiles(directoryPath)
        .map(file => path.relative(directoryPath, file).replace(/\\/g, '/'));

    // Читаем существующий dynamicLoader.js, если он есть
    let existingLoaderContent = '';
    const loaderFilePath = path.join(directoryPath, 'dynamicLoader.js');
    
    if (fs.existsSync(loaderFilePath)) {
        existingLoaderContent = fs.readFileSync(loaderFilePath, 'utf-8');
    }

    // Извлекаем файлы из существующего dynamicLoader.js
    const existingFiles = existingLoaderContent.match(/import\('(.+?)'\)/g)?.map(match => match[1]) || [];

    // Удаляем файлы, которые больше не существуют
    const filesToRemove = existingFiles.filter(file => !currentFiles.includes(file));
    
    // if (filesToRemove.length > 0) {
    //     console.log('Удалены следующие файлы:', filesToRemove);
    // }

    // Генерируем новый контент для dynamicLoader.js
    const output = `const loadAndExecuteFunctions = async () => {
        const modules = [${currentFiles.map(file => `import('${file}')`).join(', ')}];

        for (const modulePromise of modules) {
            const module = await modulePromise;
            if (module.default) {
                module.default();
            }
        }
    };

    loadAndExecuteFunctions();`;

    fs.writeFileSync(loaderFilePath, output);
    console.log('Файл dynamicLoader.js был обновлён!');
};

// Инициализация генерации при первом запуске
generateDynamicLoader();

export default generateDynamicLoader;
