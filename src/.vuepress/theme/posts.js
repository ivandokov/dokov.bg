import { strtoupper } from './util';

let SortByTimestamp = function (a, b) {
    const aTime = new Date(a.frontmatter.date).getTime();
    const bTime = new Date(b.frontmatter.date).getTime();
    return bTime - aTime;
};

export function Posts(pages) {
    return pages.filter(page => {
        return page.frontmatter.type === 'post';
    });
}

export function SortedPosts(pages) {
    return Posts(pages).sort(SortByTimestamp);
}

export function ByCategories(pages) {
    let posts = {};

    pages.forEach(page => {
        const match = page.path.match(/(\/[^\/]+\/)(.+)?$/);

        if (!match || !page.frontmatter.type || ['index', 'post'].indexOf(page.frontmatter.type) < 0) {
            return;
        }

        const path = match[1];

        if (match[2] === undefined) {
            posts[path] = posts[path] || {pages: []};
            posts[path].page = page;
        } else {
            posts[path] = posts[path] || {
                pages: []
            };
            posts[path].pages.push(page);
        }

        posts[path].pages.sort(SortByTimestamp);
    });

    return posts;
}

export function GetCategory(page) {
    let match = page.path.match(/^(\/([^\/]+)\/)/i);
    let path = match[1];
    let title = strtoupper(match[2] || '');

    return path[1] && match[2] ? {path, title} : null;
}

export function FindByPath(pages, path) {
    return SortedPosts(pages).find(page => page.path === path);
}

export function FindByOffset(pages, page, offset) {
    let posts = SortedPosts(pages);
    let postIndex = posts.findIndex(p => p.path === page.path);

    return posts[(postIndex + offset)] || null;
}
