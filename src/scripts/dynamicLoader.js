const loadAndExecuteFunctions = async () => {
        const modules = [import('dynamicLoader.js'), import('main.js'), import('modules/burger-toggle.js'), import('modules/form.js'), import('modules/init-swiper.js'), import('modules/timer.js'), import('test.js')];

        for (const modulePromise of modules) {
            const module = await modulePromise;
            if (module.default) {
                module.default();
            }
        }
    };

    loadAndExecuteFunctions();