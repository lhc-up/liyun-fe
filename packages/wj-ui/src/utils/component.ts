import type { App } from 'vue-demi';

export const withInstall = <T>(component: T) => {
    const c = component as any;
    c.install = (app: App) => {
        app.component(c.name, c);
    }
    return c;
}