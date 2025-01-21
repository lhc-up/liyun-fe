import { PageStructure, PaperStructure } from '../dataStructures/question';
import { Page } from './page';

export class Paper {
    id: string;
    code: string;
    name: string;
    private readonly pageMap: Map<string, Page> = new Map();
    resourceIds: Set<string> = new Set();
    constructor(props: PaperStructure) {
        this.id = props.id;
        this.name = props.name;
        this.code = props.code;
        
        try {
            const ids = JSON.parse(props.resourceJson);
            this.resourceIds = new Set(ids);
        } catch {}

        const pageList = JSON.parse(props.paperJson);
        pageList.forEach((o: PageStructure) => {
            this.addPage(o);
        });
    }

    addPage(page: Page | PageStructure) {
        if (page instanceof Page) {
            this.pageMap.set(page.pageId, page);
        } else {
            const o = new Page(page);
            this.pageMap.set(o.pageId, o);
        }
    }

    get pageList(): Page[] {
        return Array.from(this.pageMap.values());
    }
}