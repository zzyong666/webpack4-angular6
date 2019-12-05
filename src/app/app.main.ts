import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './config/prod.config';
import { AppModule } from './app.module';

ProdConfig();

// 关闭热更新, 保证window.onunload执行
/* if (module['hot']) {
    module['hot'].accept();
} */

platformBrowserDynamic()
    .bootstrapModule(AppModule, { preserveWhitespaces: true })
    .then(success => console.log(`Application started`))
    .catch(err => console.error(err));
