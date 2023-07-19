"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/commit-suggestions.5cf789bd.png","height":936,"width":1728,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUYHy4UGyghKjctHE9lNBPAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nB3Htw0AABCDQIz33/nDFUjQFpJ8DvKCKrsDAqsAIc9JjZcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 6337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/configuration-files.7610785b.png","height":666,"width":1728,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEUSGSgJCRVSe5VHeJVDfZwcKTh4s9KqiI0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgY2JiYmJmZmZgZmRgBAEGFgZWBhAAAALkACrSPAMeAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dark-mode2.1a8d5d90.png","height":650,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEUkJzA6Pz4vNDxGSUo2KEnoLSoMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgAAEWJiYGBkZmZkZGRmQGWIqBAQACxAAlhlrsiwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 9721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports CodeGroup, Code, Pre */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go"
};
function getPanelTitle({ title , language  }) {
    return title ?? languageNames[language] ?? "Code";
}
function ClipboardIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                strokeWidth: "0",
                d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                strokeLinejoin: "round",
                d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            })
        ]
    });
}
function CopyButton({ code  }) {
    let [copyCount, setCopyCount] = useState(0);
    let copied = copyCount > 0;
    useEffect(()=>{
        if (copyCount > 0) {
            let timeout = setTimeout(()=>setCopyCount(0), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        copyCount
    ]);
    return /*#__PURE__*/ _jsxs("button", {
        type: "button",
        className: clsx("group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
        onClick: ()=>{
            window.navigator.clipboard.writeText(code).then(()=>{
                setCopyCount((count)=>count + 1);
            });
        },
        children: [
            /*#__PURE__*/ _jsxs("span", {
                "aria-hidden": copied,
                className: clsx("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0"),
                children: [
                    /*#__PURE__*/ _jsx(ClipboardIcon, {
                        className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    }),
                    "Copy"
                ]
            }),
            /*#__PURE__*/ _jsx("span", {
                "aria-hidden": !copied,
                className: clsx("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !copied && "translate-y-1.5 opacity-0"),
                children: "Copied!"
            })
        ]
    });
}
function CodePanelHeader({ tag , label  }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1",
        children: [
            tag && /*#__PURE__*/ _jsx("div", {
                className: "dark flex",
                children: /*#__PURE__*/ _jsx(Tag, {
                    variant: "small",
                    children: tag
                })
            }),
            tag && label && /*#__PURE__*/ _jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
            }),
            label && /*#__PURE__*/ _jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function CodePanel({ tag , label , code , children  }) {
    let child = Children.only(children);
    return /*#__PURE__*/ _jsxs("div", {
        className: "group dark:bg-white/2.5",
        children: [
            /*#__PURE__*/ _jsx(CodePanelHeader, {
                tag: child.props.tag ?? tag,
                label: child.props.label ?? label
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ _jsx("pre", {
                        className: "overflow-x-auto p-4 text-xs text-white",
                        children: children
                    }),
                    /*#__PURE__*/ _jsx(CopyButton, {
                        code: child.props.code ?? code
                    })
                ]
            })
        ]
    });
}
function CodeGroupHeader({ title , children , selectedIndex  }) {
    let hasTabs = Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
        children: [
            title && /*#__PURE__*/ _jsx("h3", {
                className: "mr-auto pt-3 text-xs font-semibold text-white",
                children: title
            }),
            hasTabs && /*#__PURE__*/ _jsx(Tab.List, {
                className: "-mb-px flex gap-4 text-xs font-medium",
                children: Children.map(children, (child, childIndex)=>/*#__PURE__*/ _jsx(Tab, {
                        className: clsx("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none", childIndex === selectedIndex ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                        children: getPanelTitle(child.props)
                    }))
            })
        ]
    });
}
function CodeGroupPanels({ children , ...props }) {
    let hasTabs = Children.count(children) > 1;
    if (hasTabs) {
        return /*#__PURE__*/ _jsx(Tab.Panels, {
            children: Children.map(children, (child)=>/*#__PURE__*/ _jsx(Tab.Panel, {
                    children: /*#__PURE__*/ _jsx(CodePanel, {
                        ...props,
                        children: child
                    })
                }))
        });
    }
    return /*#__PURE__*/ _jsx(CodePanel, {
        ...props,
        children: children
    });
}
function usePreventLayoutShift() {
    let positionRef = useRef();
    let rafRef = useRef();
    useEffect(()=>{
        return ()=>{
            window.cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift (callback) {
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(()=>{
                let newTop = positionRef.current.getBoundingClientRect().top;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}
const usePreferredLanguageStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__.create)((set)=>({
        preferredLanguages: [],
        addPreferredLanguage: (language)=>set((state)=>({
                    preferredLanguages: [
                        ...state.preferredLanguages.filter((preferredLanguage)=>preferredLanguage !== language),
                        language
                    ]
                }))
    }));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages , addPreferredLanguage  } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = useState(0);
    let activeLanguage = [
        ...availableLanguages
    ].sort((a, z)=>preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef , preventLayoutShift  } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex)=>{
            preventLayoutShift(()=>addPreferredLanguage(availableLanguages[newSelectedIndex]));
        }
    };
}
const CodeGroupContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(false)));
function CodeGroup({ children , title , ...props }) {
    let languages = Children.map(children, (child)=>getPanelTitle(child.props));
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = Children.count(children) > 1;
    let Container = hasTabs ? Tab.Group : "div";
    let containerProps = hasTabs ? tabGroupProps : {};
    let headerProps = hasTabs ? {
        selectedIndex: tabGroupProps.selectedIndex
    } : {};
    return /*#__PURE__*/ _jsx(CodeGroupContext.Provider, {
        value: true,
        children: /*#__PURE__*/ _jsxs(Container, {
            ...containerProps,
            className: "not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
            children: [
                /*#__PURE__*/ _jsx(CodeGroupHeader, {
                    title: title,
                    ...headerProps,
                    children: children
                }),
                /*#__PURE__*/ _jsx(CodeGroupPanels, {
                    ...props,
                    children: children
                })
            ]
        })
    });
}
function Code({ children , ...props }) {
    let isGrouped = useContext(CodeGroupContext);
    if (isGrouped) {
        return /*#__PURE__*/ _jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: children
            }
        });
    }
    return /*#__PURE__*/ _jsx("code", {
        ...props,
        children: children
    });
}
function Pre({ children , ...props }) {
    let isGrouped = useContext(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return /*#__PURE__*/ _jsx(CodeGroup, {
        ...props,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SparkleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function SparkleIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#38BDF8",
                d: "M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#7DD3FC",
                d: "M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
            })
        ]
    });
}


/***/ }),

/***/ 4740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Tag */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const variantStyles = {
    medium: "rounded-lg px-1.5 ring-1 ring-inset"
};
const colorStyles = {
    emerald: {
        small: "text-emerald-500 dark:text-emerald-400",
        medium: "ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
    },
    sky: {
        small: "text-sky-500",
        medium: "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"
    },
    amber: {
        small: "text-amber-500",
        medium: "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"
    },
    rose: {
        small: "text-red-500 dark:text-rose-500",
        medium: "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"
    },
    zinc: {
        small: "text-zinc-400 dark:text-zinc-500",
        medium: "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"
    }
};
const valueColorMap = {
    get: "emerald",
    post: "sky",
    put: "amber",
    delete: "rose"
};
function Tag({ children , variant ="medium" , color =valueColorMap[children.toLowerCase()] ?? "emerald"  }) {
    return /*#__PURE__*/ _jsx("span", {
        className: clsx("font-mono text-[0.625rem] font-semibold leading-6", variantStyles[variant], colorStyles[color][variant]),
        children: children
    });
}


/***/ }),

/***/ 3778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ generateRssFeed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8684);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7834);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4582);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FeedProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9126);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4021);
/* harmony import */ var _pages_index_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(831);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__, _pages_index_mdx__WEBPACK_IMPORTED_MODULE_7__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__, _pages_index_mdx__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function generateRssFeed() {
    let siteUrl = "https://validator.exzo.network";
    let author = {
        name: "Joe Davola",
        email: "crazy.joe@example.com"
    };
    let feed = new feed__WEBPACK_IMPORTED_MODULE_3__.Feed({
        title: "Commit",
        description: "Open-source Git client for macOS minimalists",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`
        }
    });
    let contentHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToStaticMarkup(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeedProvider__WEBPACK_IMPORTED_MODULE_5__/* .FeedProvider */ .$, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.MDXProvider, {
            components: _components_mdx__WEBPACK_IMPORTED_MODULE_6__,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Test"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_index_mdx__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            ]
        })
    }));
    let articles = contentHtml.split(/(?<=<\/article>)\s*(?=<article)/);
    for (let article of articles){
        let meta = JSON.parse(article.match(/<script type="text\/metadata">(.*?)<\/script>/)[1]);
        let url = `${siteUrl}/#${meta.id}`;
        feed.addItem({
            title: meta.title,
            id: url,
            link: url,
            content: article,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(meta.date)
        });
    }
    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.mkdir)("./public/rss", {
        recursive: true
    });
    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.writeFile)("./public/rss/feed.xml", feed.rss2(), "utf8");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _images_commit_suggestions_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2214);
/* harmony import */ var _images_configuration_files_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6337);
/* harmony import */ var _images_dark_mode2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7834);
/* harmony import */ var _components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4514);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9721);
/* harmony import */ var _lib_generateRssFeed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3778);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__, _components_Code__WEBPACK_IMPORTED_MODULE_6__, _lib_generateRssFeed__WEBPACK_IMPORTED_MODULE_7__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__, _components_Code__WEBPACK_IMPORTED_MODULE_6__, _lib_generateRssFeed__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 







async function getStaticProps() {
    if (true) {
        await (0,_lib_generateRssFeed__WEBPACK_IMPORTED_MODULE_7__/* .generateRssFeed */ .e)();
    }
    return {
        props: {}
    };
}
function _createMdxContent(props) {
    const _components = Object.assign({
        article: "article",
        img: "img",
        h2: "h2",
        a: "a",
        p: "p",
        h3: "h3",
        ul: "ul",
        li: "li",
        pre: "pre",
        code: "code"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.article, {
                id: "this-guide-describes-the-process-to-start-a-validator-node-on-the-exzo-network",
                title: "This guide describes the process to start a validator node on the Exzo Network",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.img, {
                        src: _images_commit_suggestions_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
                        alt: ""
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#this-guide-describes-the-process-to-start-a-validator-node-on-the-exzo-network",
                            children: "This guide describes the process to start a validator node on the Exzo Network"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Nodes require some technical knowledge about networks and Unix Linux systems. Before starting, make sure you can accomplish necessary tasks such as:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Installation and configuration of Unix / Linux systems\nNetwork configuration (open ports, firewall configuration, NAT configuration, etc.)\nWillingness to keep the system functional and updated"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h3, {
                        id: "-hardware-and-operating-system-os-requirements",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__/* .SparkleIcon */ .Q, {}),
                            " Hardware and Operating System (OS) Requirements"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "You can run the software on any Linux platform by making your own settings and installing the necessary libraries and dependencies."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "In our tests, the software ran for weeks without problems on Ubuntu 20.04 and RHEL 8."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Although it is possible to run the node on OSX or Windows, it is not recommended."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h3, {
                        id: "-cpu",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__/* .SparkleIcon */ .Q, {}),
                            " CPU"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "12 cores / 24 threads, or more"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "2.8GHz, or faster"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "AVX2 instruction support (to use official release binaries, self-compile otherwise)"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Support for AVX512f and/or SHA-NI instructions is helpful"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "The AMD Zen3 series is popular with the validator community"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h3, {
                        id: "-ram",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__/* .SparkleIcon */ .Q, {}),
                            " RAM"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "128GB, or more"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Motherboard with 256GB capacity suggested"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h3, {
                        id: "-gpu",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__/* .SparkleIcon */ .Q, {}),
                            " GPU"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "PCIe Gen3 x4 NVME SSD, or better"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Accounts: 500GB, or larger. High TBW (Total Bytes Written)"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Ledger: 1TB or larger. High TBW suggested"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "OS: (Optional) 500GB, or larger. SATA OK"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Accounts and ledger can be stored on the same disk, however due to high IOPS, this is not recommended"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "The Samsung 970 and 980 Pro series SSDs are popular with the validator community"
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ],
                ...{
                    date: "2023-04-06T00:00Z"
                }
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.article, {
                id: "step-1-install-the-exzo-network-tool-suite",
                title: "Step 1. Install the Exzo Network Tool Suite",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.img, {
                        src: _images_configuration_files_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                        alt: ""
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-1-install-the-exzo-network-tool-suite",
                            children: "Step 1. Install the Exzo Network Tool Suite"
                        })
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
                        children: [
                            "Check the latest release available visiting our ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                                href: "https://github.com/ExzoNetwork/exzo-program-library",
                                children: "GitHub"
                            }),
                            " page, at the time of writing this guide is 0.3.4 as you will see in the following image"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Download Exzo install tool"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node]$ wget https://github.com/exzo/exzo-chain/releases/download/v0.3.4/exzo-install-init-x86_64-unknown-linux-gnu\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Then assign execution permissions"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node$] chmod +x exzo-install-init-x86_64-unknown-linux-gnu\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Install the last release, replacing LATEST_RELEASE for release number"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "./exzo-install-init-x86_64-unknown-linux-gnu LATEST_RELEASE"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node]$ ./exzo-install-init-x86_64-unknown-linux-gnu 0.3.4\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You will get an output similar to this"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: 'Configuration: /home/exzonode/.config/exzo/install/config.yml\nActive release directory: /home/exzonode/.local/share/exzo/install/active_release\n* Release version: 0.3.4\n* Release URL: https://github.com/exzo/exzo-chain/releases/download/v0.3.4/exzo-release-x86_64-unknown-linux-gnu.tar.bz2\nUpdate successful\nAdding export PATH="/home/exzonode/.local/share/exzo/install/active_release/bin:$PATH" to /home/exzonode/.bash_profile\nClose and reopen your terminal to apply the PATH changes or run the following in your existing shell:\nexport PATH="/home/exzonode/.local/share/exzo/install/active_release/bin:$PATH"\n'
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Execute export PATH command as the terminal suggest you"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: '[exzo@node]$ export PATH="/home/exzonode/.local/share/exzonode/install/active_release/bin:$PATH"\n'
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Important, use the export command that your terminal shows since it is different for each user"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Use the “exzo” command to see a complete list of all available actions, which indicates that you have successfully installed the software."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
                        children: [
                            "Visit our wiki ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                                href: "https://docs.exzo.network/command_line#exzo_network_cli",
                                children: "here"
                            }),
                            " to obtain more information related to using the Exzo Network CLI."
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-2-configure-the-exzo-cli",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-2-configure-the-exzo-cli",
                            children: "Step 2. Configure the Exzo CLI"
                        }),
                        ...{
                            date: "Step 2"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.img, {
                        src: _images_dark_mode2_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: ""
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "dark-mode-support",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#dark-mode-support",
                            children: "Dark mode support"
                        }),
                        ...{
                            date: "2023-03-06T00:00Z"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Connect CLI with Exzo mainnet or testnet using exzo config set command"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Exzo Network Testnet CLI configuration:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node]$ exzo config set --url https://rpc-test-1.exzo.network/rpc\nConfig File: /home/user/.config/exzo/cli/config.yml\nRPC URL: https://rpc-test-1.exzo.network/rpc\nWebSocket URL: wss://rpc-test-1.exzo.network/rpc (computed)\nKeypair Path: /home/user/.config/exzo/id.json \nCommitment: confirmed \n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Confirm the cluster Is reachable and checks your software/cluster version"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo transaction-count\n17729450\n[exzo@node ~]$ exzo --version\nexzo-cli 0.3.4\n[exzo@node ~]$ exzo cluster-version\n0.3.4\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You can update your version if it differs from that of the cluster using the next command"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "exzo-install-init VERSION_NUMBER"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Join the gossip network and try to view all the other nodes in the cluster"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node~]$ exzo-gossip spy --entrypoint bootnode-test.exzo.network:8001\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: 'You should see in the terminal the list of active nodes in the network as well as your computer in "Spy" mode'
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.img, {
                        src: _images_dark_mode2_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: ""
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-3-system-tuning",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-3-system-tuning",
                            children: "Step 3. System Tuning"
                        }),
                        ...{
                            date: "Step 3"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Increase UDP buffers"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: '[exzo@node ~]$ sudo bash -c "cat >/etc/sysctl.d/20-exzo-udp-buffers.conf <<EOF\n> # Increase UDP buffer size\n> net.core.rmem_default = 134217728\n> net.core.rmem_max = 134217728\n> net.core.wmem_default = 134217728\n> net.core.wmem_max = 134217728\n> EOF"\n'
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ sudo sysctl -p /etc/sysctl.d/20-exzo-udp-buffers.conf\n[sudo] password for exzonode: \nnet.core.rmem_default = 134217728\nnet.core.rmem_max = 134217728\nnet.core.wmem_default = 134217728\nnet.core.wmem_max = 134217728\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Increase memory-mapped files limit"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: '[exzo@node ~]$ sudo bash -c "cat >/etc/sysctl.d/20-exzo-mmaps.conf <<EOF\n# Increase memory mapped files limit\nvm.max_map_count = 500000\nEOF"\n'
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ sudo systemctl daemon-reload\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ sudo bash -c cat >/etc/security/limits.d/90-exzo-nofiles.conf EOF\n> # Increase process file descriptor count limit\n> * - nofile 500000\n> EOF\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-4-create-your-identity--vote-account",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-4-create-your-identity--vote-account",
                            children: "Step 4. Create Your Identity & Vote Account"
                        }),
                        ...{
                            date: "Step 4"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Before proceeding we need to understand what these two accounts functions are."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "vote-account",
                        children: "Vote Account:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "A vote account can be created with the create-vote-account command. The vote account can be configured when first created or after the validator is running. All aspects of the vote account can be changed except for the vote account address, which is fixed for the lifetime of the account. This account collects rewards from the commission that the node has set."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
                        children: [
                            "Visit ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                                href: "https://docs.exzo.network/validating#acc_management",
                                children: "vote account management"
                            }),
                            " docs for more information."
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "validator-identity",
                        children: "Validator Identity:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: 'The validator identity is a system account that is used to pay for all the vote transaction fees submitted to the vote account. Because the validator is expected to vote on most valid blocks it receives, the validator identity account is frequently (potentially multiple times per second) signing transactions and paying fees. For this reason, the validator identity keypair must be stored as a "hot wallet" in a keypair file on the same system the validator process is running. Because a hot wallet is generally less secure than an offline or "cold" wallet, the validator operator may choose to store only enough XZO on the identity account to cover voting fees for a limited amount of time, such as a few weeks or months. The validator identity account could be periodically topped off from a more secure wallet.'
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "This practice can reduce the risk of loss of funds if the validator node's disk or file system becomes compromised or corrupted."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "The validator identity is required to be provided when a voting account is created. The validator identity can also be changed after an account is created by using the vote-update-validator command."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Note: You will have to save both seeds, for your identity and vote account, in the case you lose your seeds you will lose control over the account, please be careful."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "generate-identity",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#generate-identity",
                            children: "Generate identity"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "option-1-system-keypair---create-an-identity-keypair-for-your-validator-by-running",
                        children: "Option 1. System Keypair - Create an identity keypair for your validator by running"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen new -o ~/validator-keypair.json\nGenerating a new keypair\nFor added security, enter a BIP39 passphrase\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\nBIP39 Passphrase (empty for none): \nWrote new keypair to /home/exzonode/validator-keypair.json\n=========================================================================\npubkey: FncgcZc6QAo6utJyZvp5Cp9eNxXvG9T7yCFKdH6VdXin\n=========================================================================\nSave this seed phrase to recover your new keypair:\ncoach omit master vapor certain case powder stock swarm voice viable evil\n=========================================================================\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "The identity public key can now be viewed by running"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen pubkey ~/validator-keypair.json\nFncgcZc6QAo6utJyZvp5Cp9eNxXvG9T7yCFKdH6VdXin\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "By default, the validator-keypair.json is stored in the “ /home/user ” directory. You can change “~/”"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "to use the directory you prefer."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Now that you have a keypair, set the exzo configuration to use your validator keypair for all following commands"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node~]$ exzo config set --keypair ~/validator-keypair.json\nonfig File: /home/exzonode/.config/exzo/cli/config.yml\nRPC URL: https://rpc-test-1.exzo.network/rpc\nWebSocket URL: wss://rpc-test-1.exzo.network/rpc (computed)\nKeypair Path: /home/user/.config/exzo/id.json \nCommitment: confirmed \n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "option-2-paper-wallet-identity-you-can-create-a-paper-wallet-for-your-identity-file-instead-of-writing-the-keypair-file-to-disk-with",
                        children: "Option 2. Paper Wallet Identity You can create a paper wallet for your identity file instead of writing the keypair file to disk with"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen new --no-outfile\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "The corresponding identity public key can now be viewed by running"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen pubkey ASK\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "create-vote-account",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#create-vote-account",
                            children: "Create Vote Account"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Create a vote-account keypair and create the vote account on the network."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen new -o ~/vote-account-keypair.json\nGenerating a new keypair\nFor added security, enter a BIP39 passphrase\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\nBIP39 Passphrase (empty for none): \nWrote new keypair to /home/exzospanish/vote-account-keypair.json\n=============================================================================\npubkey: FM8V7mFGtC7msjXZhn8gzfgXVGSVJyWrYno4tW5rNjCY\n=============================================================================\nSave this seed phrase to recover your new keypair:\nloan illegal clip style electric use elevator repeat auto mule educate cotton\n=============================================================================\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "now-that-we-have-created-our-identity-and-vote-account-it-is-time-to-link-them-to-be-able-to-identify-ourselves-in-the-network-and-synchronize-our-node",
                        children: "Now that we have created our identity and vote account, it is time to link them to be able to identify ourselves in the network and synchronize our node."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h3, {
                        id: "-to-do-this-we-will-need-some-xzo-native-funds-in-the-identity-account-these-will-serve-two-functions",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SparkleIcon__WEBPACK_IMPORTED_MODULE_5__/* .SparkleIcon */ .Q, {}),
                            " To do this, we will need some XZO Native funds in the identity account, these will serve two functions:"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Relate the identity account and the vote account in the next step (Create Vote account in the network)"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.li, {
                                children: "Pay the commissions of the transactions in which the node participates"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You should have your public address noted, in any case, you can see it again"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-keygen pubkey ~/validator-keypair.json\nFncgcZc6QAo6utJyZvp5Cp9eNxXvG9T7yCFKdH6VdXin\nexzo@node ~]$ \n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You can see how much balance the account has with the following command"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "exzo@node ~]$ \nexzo balance FncgcZc6QAo6utJyZvp5Cp9eNxXvG9T7yCFKdH6VdXin\n0\nexzo@node ~]$\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Send some XZO Native from our Exzo Wallet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "If you check the balance, you will now see your XZO balance in the identity account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "exzo@node ~]$ \nexzo balance FncgcZc6QAo6utJyZvp5Cp9eNxXvG9T7yCFKdH6VdXin\n1.5 XZO\nexzo@node ~]$ \n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Now that we have some XZO in the identity account, it's time to create the vote account on the blockchain"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json\nSignature: 4Mo33Y6SNkBUjtCpdfdmCeBK5T7eMkAyRKQ7QZz12EDZx8qs6j2Tj9G26vBUBpjTbz95zUdhMEU3dV8TRsh6evNz\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "note-if-you-are-using-an-identity-stored-in-a-paper-wallet-instead-of-a-keypair-system-file-on-your-computer-replace-validator-keypairjson--for--ask--which-will-suggest-you-enter-your-seed-corresponding-to-the-identity-account",
                        children: "Note: If you are using an identity stored in a paper wallet instead of a Keypair system file on your computer, replace ~/validator-keypair.json  for  ASK  which will suggest you enter your seed corresponding to the identity account."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "Keypair files are stored on your computer and therefore can be exposed in case your security is compromised, only send a sufficient amount of XZO Native to pay commissions for a period of time, 1-3 months, an amount of 100-300 XZO should be sufficient for a considerable period of time.”"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-5-connect-your-validator",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-5-connect-your-validator",
                            children: "Step 5. Connect Your Validator"
                        }),
                        ...{
                            date: "Step 5"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "The command that allows executing the node is “exzo-validator” if you write it in the console you will be able to see all the possible arguments and options when executing your node."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "If your computer does not have a GPU or is not compatible with CUDA, you should not add --cuda in the command line.\nBy default, the ledger will grow until there is no more space left on the hard drive, adding the arg --limit-ledger-size we will limit the file to a maximum of 500 GB.\nYou can control the range of ports that the node will use to connect, by default it is recommended to open port range 8000-10000.\nMake sure your system clock is synchronized."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "the-system-without-a-compatible-gpu-or-cuda",
                        children: "The system without a compatible GPU or CUDA"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ screen exzo-validator --identity ~/validator-keypair.json --vote-account ~/vote-account-keypair.json --ledger /home/exzonode/ledger/ --rpc-port 8899 --dynamic-port-range 8000-8010 --entrypoint bootstrap-testnet.exzo.network:8001 --limit-ledger-size --expected-shred-version 17211 --max-genesis-archive-unpacked-size 707374182 --log -\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "a-system-with-a-compatible-gpu-or-cuda-available",
                        children: "A system with a compatible GPU or CUDA available"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ screen exzo-validator --cuda --identity ~/validator-keypair.json --vote-account ~/vote-account-keypair.json --ledger /home/exzonode/ledger/ --rpc-port 8899 --dynamic-port-range 8000-8010 --entrypoint bootstrap-testnet.exzo.network:8001 --limit-ledger-size --expected-shred-version 17211 --max-genesis-archive-unpacked-size 707374182 --log -\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h3, {
                        id: "custom-or-optional-settings",
                        children: "Custom or optional settings"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                                        children: "“--identity ASK” and/or “--vote-account ASK” If you are using paper wallets instead of keypairs on the system, you need to change the path to the corresponding file by the “ASK” argument."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                                        children: "“--limit-ledger-size size”  You can limit the size of the ledger to a maximum of 100 GB by replacing size for 50,000,000, you can assign another value as long as it is higher."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-6-delegate-stake",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-6-delegate-stake",
                            children: "Step 6. Delegate stake"
                        }),
                        ...{
                            date: "Step 6"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "By default, your node will not have any delegated balance. So that the node can act as a leader and receive a reward for validation it is necessary that it always have 10,000 or more delegated XZO, either from the node owner, from other delegates, or the sum of both. The easiest way to delegate your coins is from the Exzo wallet."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.h2, {
                        id: "step-7-check-your-node",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.a, {
                            href: "#step-7-check-your-node",
                            children: "Step 7. Check your node"
                        }),
                        ...{
                            date: "Step 7"
                        }
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You will be able to see your node in the list of active nodes and identify it by your vote account and/or identity, the list of ports it is using, and its public IP, in a new window run “exzo-gossip spy”"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.pre, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.code, {
                            children: "[exzo@node ~]$ exzo-gossip spy --entrypoint bootstrap-testnet.exzo.network:8001\n"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components.p, {
                        children: "You will also see the process open on your server if you run “htop” command"
                    })
                ],
                ...{
                    date: "2023-03-17T00:00Z"
                }
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.useMDXComponents)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = require("feed");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,21], () => (__webpack_exec__(831)));
module.exports = __webpack_exports__;

})();