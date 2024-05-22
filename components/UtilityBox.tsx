import { h } from 'https://cdn.skypack.dev/preact@latest';
import htm from 'https://cdn.skypack.dev/htm@latest';

const html = htm.bind(h);

export const UtilityBox = ({ href, children, active }) => {
    const linkClasses = active
        ? "inline-block py-1 px-3 rounded-md bg-blue-700 pointer-events-none transition-colors duration-200 text-white"
        : "inline-block py-1 px-3 rounded-md bg-blue-500 hover:bg-blue-700 transition-colors duration-200 text-white";
    return html`
        <li class="mx-1">
            <a 
                href=${href} 
                class=${linkClasses}
            >
            ${children}
            </a>
        </li>
    `;
};