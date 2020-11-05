const SortByTimestamp = function (a, b) {
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

export function FindByPath(pages, path) {
    return SortedPosts(pages).find(page => page.path === path);
}

export function FindByOffset(pages, page, offset) {
    let posts = SortedPosts(pages);
    let postIndex = posts.findIndex(p => p.path === page.path);

    return posts[(postIndex + offset)] || null;
}
