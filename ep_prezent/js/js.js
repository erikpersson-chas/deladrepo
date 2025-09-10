/* Helper functions */

const qs = (selector) => document.querySelector(selector);

const qsa = (selector) => document.querySelectorAll(selector);

const create_el = (tag) => document.createElement(tag);

const add_classes = (el, class_string) => {
    if (!class_string || !class_string.trim()) return; // Skip if empty or only spaces
    const class_list = class_string.trim().split(/\s+/);
    el.classList.add(...class_list);
};

const header = create_el("header");
header.id = "header";
add_classes(header, "");

const header_h1 = create_el("h1");
header_h1.innerHTML = "S A D B O Y S";
add_classes(header_h1, "");

header.appendChild(header_h1);

const header_p1 = create_el("p");
header_p1.innerHTML = "Det här är sagan om";
add_classes(header_p1, "");

header.appendChild(header_p1);

const header_p2 = create_el("p");
header_p2.innerHTML = "coolaste katten i det Långa Landet Falukorv";
add_classes(header_p2, "");

header.appendChild(header_p2);

const main = create_el("main");
main.id = "main";
add_classes(main, "");

const main_p1 = create_el("p");
main_p1.innerHTML = "echo -e \"inga gäris bara habbar\" >> sysloggen # de e för tjejorna från södra latin som vi göre för";
add_classes(main_p1, "");

main.appendChild(main_p1);

const footer = create_el("footer");
footer.id = "footer";
add_classes(footer, "");

const footer_p1 = create_el("p");
footer_p1.innerHTML = "&copy Erik Persson";
add_classes(footer_p1, "");

footer.appendChild(footer_p1);

const body = qs('#body');
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
