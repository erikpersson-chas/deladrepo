/* Helper functions */

const qs = (selector) => document.querySelector(selector);

const qsa = (selector) => document.querySelectorAll(selector);

const create_el = (tag) => document.createElement(tag);

const add_classes = (el, class_string) => {
    if (!class_string || !class_string.trim()) return; // Skip if empty or only spaces
    const class_list = class_string.trim().split(/\s+/);
    el.classList.add(...class_list);
};

const header = create_el('header');
header.id = "header";
add_classes(header, "");

const main = create_el('main');
main.id = "main";
add_classes(main, "");

const footer = create_el('footer');
footer.id = "footer";
add_classes(footer, "");

const body = qs('#body');
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
