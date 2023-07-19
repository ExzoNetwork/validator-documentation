(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/IconLink.jsx



function IconLink({ children , className , compact =false , large =false , icon: Icon , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        ...props,
        className: external_clsx_default()(className, "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300", compact ? "gap-x-2" : "gap-x-3"),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                className: external_clsx_default()("flex-none", large ? "h-6 w-6" : "h-4 w-4")
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "self-baseline text-white",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Logo.jsx


function Logo(props) {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "240",
        height: "30",
        viewBox: "0 0 570 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                clipPath: "url(#clip0_273_527)",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M93.3994 31.7998L97.4699 27.7025H85.6991V31.7998H93.3994ZM100.218 14.9933H78.2319V44.9788H100.218V40.5162H83.0284V19.456H100.218V14.9933Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M339.171 31.7998L343.241 27.7025H331.47V31.7998H339.171ZM345.989 14.9933H324.003V44.9788H345.989V40.5162H328.8V19.456H345.989V14.9933Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M114.921 13.9161H120.091L120.522 14.1329L128.492 24.5403L136.462 14.1329L136.893 13.9161H142.063L142.277 14.1329L131.292 28.2263L143.57 44.0541L143.356 44.271H138.186L137.754 44.0541L128.492 31.9123L119.229 44.0541L118.798 44.271H113.629L113.413 44.0541L125.691 28.2263L114.706 14.1329L114.921 13.9161Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M157.123 13.9161H180.603L180.819 14.1329L163.801 39.9346H180.819L181.033 40.1948V44.0541L180.819 44.271H155.831L155.615 44.0541L172.633 18.2526H157.123L156.908 18.0357V14.1329L157.123 13.9161Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M212.287 13.2657C221.076 13.2657 228.228 20.3774 228.228 29.0936C228.228 37.8097 221.076 44.9215 212.287 44.9215C203.498 44.9215 196.347 37.8097 196.347 29.0936C196.347 20.3774 203.498 13.2657 212.287 13.2657ZM212.287 17.8189C206.212 17.8189 201.301 22.8491 201.301 29.0936C201.301 35.338 206.212 40.3683 212.287 40.3683C218.362 40.3683 223.273 35.338 223.273 29.0936C223.273 22.8491 218.362 17.8189 212.287 17.8189Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M472.953 13.2657C481.742 13.2657 488.892 20.3774 488.892 29.0936C488.892 37.8097 481.742 44.9215 472.953 44.9215C464.164 44.9215 457.012 37.8097 457.012 29.0936C457.012 20.3774 464.164 13.2657 472.953 13.2657ZM472.953 17.8189C466.878 17.8189 461.966 22.8491 461.966 29.0936C461.966 35.338 466.878 40.3683 472.953 40.3683C479.027 40.3683 483.938 35.338 483.938 29.0936C483.938 22.8491 479.027 17.8189 472.953 17.8189Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M545.556 13.9161H549.433L549.649 14.1329V24.5403L561.927 14.1329L562.358 13.9161H567.959L568.173 14.1329L552.879 26.9254L569.897 44.0541L569.681 44.271H564.082L563.65 44.0541L549.649 29.744V44.0541L549.433 44.271H545.556L545.34 44.0541V14.1329L545.556 13.9161Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M362.743 13.9161H386.438L386.654 14.1329V18.0357L386.438 18.2526H376.745V44.0541L376.53 44.271H372.652L372.437 44.0541V18.2526H362.743L362.528 18.0357V14.1329L362.743 13.9161Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M401.601 13.9161H405.91L406.126 14.1329L413.018 37.116L419.696 14.5666L419.911 14.3498H424.22L424.436 14.5666L431.112 37.116L438.006 14.1329L438.221 13.9161H442.53L442.744 14.1329L433.483 44.0541L433.267 44.271H429.174L428.959 44.0541L422.065 21.7217L415.173 44.0541L414.957 44.271H410.864L410.649 44.0541L401.386 14.1329L401.601 13.9161Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M298.001 39.353L278.792 14.993H274.346V44.9785H278.792V20.6448L298.001 44.9785H302.421V14.993H298.001V39.353Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M525.821 31.2804C526.195 30.9843 526.516 30.6613 526.784 30.3651C528.255 28.696 529.057 26.4616 529.057 24.1194C529.057 19.5696 525.928 14.993 519.91 14.993H502.74V45.8717H507.312V18.8159H519.91C523.602 18.8159 525.232 21.4811 525.232 24.0924C525.232 25.4923 524.751 26.8385 523.922 27.7806C523.04 28.7767 521.809 29.3422 520.257 29.3959H515.497H508.624V33.2188H517.77L525.286 45.818H530.048L522.371 32.9227C523.868 32.5726 524.992 31.9266 525.821 31.2266V31.2804Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        opacity: "0.1",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.9512 45.4187C21.4316 45.4187 18.9939 45.0742 16.6792 44.4264C16.952 47.2975 17.4978 50.1456 18.3164 52.9339C26.7753 50.8806 34.4749 46.4109 40.4644 40.0349L40.337 39.9016C35.7709 43.3653 30.0998 45.4187 23.9466 45.4187H23.9512Z",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M38.562 7.49693L25.7098 0C21.9578 4.57533 19.1382 9.78919 17.3418 15.3292C27.2288 17.4148 35.9651 22.6653 42.4594 29.9924C46.3115 34.338 49.3722 39.4095 51.4187 44.9771V14.9939H51.4142L38.5665 7.49693H38.562Z",
                        fill: "url(#paint0_linear_273_527)"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        opacity: "0.3",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.8018 5.54131C21.8287 5.49519 21.8599 5.44907 21.8867 5.40295L21.8018 5.54131Z",
                        fill: "#A4A4A4"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.3273 44.6329C11.6788 45.832 5.79849 45.9744 0 44.9776L12.8567 52.4744L25.7135 59.9714L38.5657 52.4744L51.4224 44.9776C49.3759 39.4053 46.3152 34.334 42.4632 29.9928C35.7324 37.6001 26.8595 42.6163 17.3364 44.6329H17.3273Z",
                        fill: "url(#paint1_linear_273_527)"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 14.9964V44.9841C5.79849 45.9809 11.6789 45.8339 17.3273 44.6396C14.171 34.9468 14.3075 24.6799 17.3364 15.3364C19.1373 9.79628 21.9524 4.58242 25.7044 0.00708008L12.8476 7.50402L0 14.9964Z",
                        fill: "url(#paint2_linear_273_527)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear_273_527",
                        x1: "56.9535",
                        y1: "40.3604",
                        x2: "20.1596",
                        y2: "0.105607",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                offset: "1",
                                stopColor: "white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint1_linear_273_527",
                        x1: "54.9742",
                        y1: "37.9262",
                        x2: "-1.18553",
                        y2: "56.5178",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                offset: "1",
                                stopColor: "#F9F9F9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint2_linear_273_527",
                        x1: "1.1597",
                        y1: "50.8457",
                        x2: "20.0517",
                        y2: "-1.05255",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                offset: "1",
                                stopColor: "white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                        id: "clip0_273_527",
                        children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                            width: "570",
                            height: "60",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Button.jsx



function ButtonInner({ arrow =false , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10"
            }),
            children,
            " ",
            arrow ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                "aria-hidden": "true",
                children: "→"
            }) : null
        ]
    });
}
function Button({ href , className , arrow , children , ...props }) {
    className = external_clsx_default()(className, "group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white", arrow ? "pl-2.5 pr-[calc(9/16*1rem)]" : "px-2.5");
    return href ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: href,
        className: className,
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx(ButtonInner, {
            arrow: arrow,
            children: children
        })
    }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: className,
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx(ButtonInner, {
            arrow: arrow,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./src/components/SignUpForm.jsx



function SignUpForm() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "relative isolate mt-8 flex items-center pr-1",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Email address"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                required: true,
                type: "email",
                autoComplete: "email",
                name: "email",
                id: id,
                placeholder: "Email address",
                className: "peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Button, {
                type: "submit",
                arrow: true,
                children: "Get updates"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Intro.jsx





function BookIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z"
        })
    });
}
function FeedIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        })
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5"
        })
    });
}
function Intro() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                        className: "inline-block h-8 w-auto"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                className: "mt-14 font-display text-4xl/tight font-light text-white",
                children: [
                    "Guide to become an ",
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-sky-300",
                        children: "Exzo Network Node Validator"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "mt-4 text-sm/6 text-gray-300",
                children: "This guide describes the process to start a validator node on the Exzo Network. Nodes require some technical knowledge about networks and Unix Linux systems, but this guide will guide you through it all."
            }),
            /*#__PURE__*/ jsx_runtime.jsx(SignUpForm, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "https://docs.exzo.network/validating",
                        icon: BookIcon,
                        className: "flex-none",
                        children: "Documentation"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "https://github.com/ExzoNetwork/Exzo-Network-Blockchain",
                        icon: GitHubIcon,
                        className: "flex-none",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "https://twitter.com/Exzo_Network",
                        icon: TwitterIcon,
                        className: "flex-none",
                        children: "Community"
                    })
                ]
            })
        ]
    });
}
function IntroFooter() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
        className: "flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500",
        children: [
            "Brought to you by",
            " ",
            /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                href: "https://twitter.com/Exzo_Network",
                icon: TwitterIcon,
                compact: true,
                large: true,
                children: "Exzo Network"
            })
        ]
    });
}

;// CONCATENATED MODULE: external "motion"
const external_motion_namespaceObject = require("motion");
;// CONCATENATED MODULE: ./src/components/StarField.jsx



const stars = [
    // [cx, cy, dim, blur]
    [
        4,
        4,
        true,
        true
    ],
    [
        4,
        44,
        true
    ],
    [
        36,
        22
    ],
    [
        50,
        146,
        true,
        true
    ],
    [
        64,
        43,
        true,
        true
    ],
    [
        76,
        30,
        true
    ],
    [
        101,
        116
    ],
    [
        140,
        36,
        true
    ],
    [
        149,
        134
    ],
    [
        162,
        74,
        true
    ],
    [
        171,
        96,
        true,
        true
    ],
    [
        210,
        56,
        true,
        true
    ],
    [
        235,
        90
    ],
    [
        275,
        82,
        true,
        true
    ],
    [
        306,
        6
    ],
    [
        307,
        64,
        true,
        true
    ],
    [
        380,
        68,
        true
    ],
    [
        380,
        108,
        true,
        true
    ],
    [
        391,
        148,
        true,
        true
    ],
    [
        405,
        18,
        true
    ],
    [
        412,
        86,
        true,
        true
    ],
    [
        426,
        210,
        true,
        true
    ],
    [
        427,
        56,
        true,
        true
    ],
    [
        538,
        138
    ],
    [
        563,
        88,
        true,
        true
    ],
    [
        611,
        154,
        true,
        true
    ],
    [
        637,
        150
    ],
    [
        651,
        146,
        true
    ],
    [
        682,
        70,
        true,
        true
    ],
    [
        683,
        128
    ],
    [
        781,
        82,
        true,
        true
    ],
    [
        785,
        158,
        true
    ],
    [
        832,
        146,
        true,
        true
    ],
    [
        852,
        89
    ]
];
const constellations = [
    [
        [
            247,
            103
        ],
        [
            261,
            86
        ],
        [
            307,
            104
        ],
        [
            357,
            36
        ]
    ],
    [
        [
            586,
            120
        ],
        [
            516,
            100
        ],
        [
            491,
            62
        ],
        [
            440,
            107
        ],
        [
            477,
            180
        ],
        [
            516,
            100
        ]
    ],
    [
        [
            733,
            100
        ],
        [
            803,
            120
        ],
        [
            879,
            113
        ],
        [
            823,
            164
        ],
        [
            803,
            120
        ]
    ]
];
function Star({ blurId , point: [cx, cy, dim, blur]  }) {
    let groupRef = (0,external_react_.useRef)();
    let ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let delay = Math.random() * 2;
        let animations = [
            (0,external_motion_namespaceObject.animate)(groupRef.current, {
                opacity: 1
            }, {
                duration: 4,
                delay
            }),
            (0,external_motion_namespaceObject.animate)(ref.current, {
                opacity: dim ? [
                    0.2,
                    0.5
                ] : [
                    1,
                    0.6
                ],
                scale: dim ? [
                    1,
                    1.2
                ] : [
                    1.2,
                    1
                ]
            }, {
                delay,
                duration: Math.random() * 2 + 2,
                direction: "alternate",
                repeat: Infinity
            })
        ];
        return ()=>{
            for (let animation of animations){
                animation.cancel();
            }
        };
    }, [
        dim
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("g", {
        ref: groupRef,
        className: "opacity-0",
        children: /*#__PURE__*/ jsx_runtime.jsx("circle", {
            ref: ref,
            cx: cx,
            cy: cy,
            r: 1,
            style: {
                transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
                opacity: dim ? 0.2 : 1,
                transform: `scale(${dim ? 1 : 1.2})`
            },
            filter: blur ? `url(#${blurId})` : undefined
        })
    });
}
function Constellation({ points  }) {
    let ref = (0,external_react_.useRef)();
    let uniquePoints = points.filter((point, pointIndex)=>points.findIndex((p)=>String(p) === String(point)) === pointIndex);
    let isFilled = uniquePoints.length !== points.length;
    (0,external_react_.useEffect)(()=>{
        let sequence = (0,external_motion_namespaceObject.timeline)([
            [
                ref.current,
                {
                    strokeDashoffset: 0,
                    visibility: "visible"
                },
                {
                    duration: 5,
                    delay: Math.random() * 3 + 2
                }
            ],
            ...isFilled ? [
                [
                    ref.current,
                    {
                        fill: "rgb(255 255 255 / 0.02)"
                    },
                    {
                        duration: 1
                    }
                ]
            ] : []
        ]);
        return ()=>{
            sequence.cancel();
        };
    }, [
        isFilled
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                ref: ref,
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: `M ${points.join("L")}`,
                className: "invisible"
            }),
            uniquePoints.map((point, pointIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Star, {
                    point: point
                }, pointIndex))
        ]
    });
}
function StarField() {
    let blurId = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 881 211",
        fill: "white",
        "aria-hidden": "true",
        className: "pointer-events-none absolute -right-44 top-14 w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("filter", {
                    id: blurId,
                    children: /*#__PURE__*/ jsx_runtime.jsx("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: ".5"
                    })
                })
            }),
            constellations.map((points, constellationIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Constellation, {
                    points: points
                }, constellationIndex)),
            stars.map((point, pointIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Star, {
                    point: point,
                    blurId: blurId
                }, pointIndex))
        ]
    });
}

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/components/ThemeToggle.jsx



function ThemeIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
        })
    });
}
function ThemeToggle() {
    let [mounted, setMounted] = (0,external_react_.useState)(false);
    let { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: "group absolute right-4 top-4 z-50 -m-2.5 p-2.5",
        onClick: ()=>setTheme(otherTheme),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "sr-only",
                children: [
                    "Switch to ",
                    otherTheme,
                    " theme"
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ThemeIcon, {
                className: "h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.jsx





function Timeline() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            className: "absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                        id: id,
                        width: "6",
                        height: "8",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M0 0H6M0 8H6",
                            className: "stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10",
                            fill: "none"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                    width: "100%",
                    height: "100%",
                    fill: `url(#${id})`
                })
            ]
        })
    });
}
function Glow() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                className: "absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                                id: `${id}-desktop`,
                                cx: "100%",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(56, 189, 248, 0.3)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "53.95%",
                                        stopColor: "rgba(0, 71, 255, 0.09)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(10, 14, 23, 0)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                                id: `${id}-mobile`,
                                cy: "100%",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(56, 189, 248, 0.3)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "53.95%",
                                        stopColor: "rgba(0, 71, 255, 0.09)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(10, 14, 23, 0)"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        fill: `url(#${id}-desktop)`,
                        className: "hidden lg:block"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        fill: `url(#${id}-mobile)`,
                        className: "lg:hidden"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"
            })
        ]
    });
}
function FixedSidebar({ main , footer  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Glow, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(StarField, {}),
                                    main
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6",
                            children: footer
                        })
                    ]
                })
            })
        ]
    });
}
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(FixedSidebar, {
                main: /*#__PURE__*/ jsx_runtime.jsx(Intro, {}),
                footer: /*#__PURE__*/ jsx_runtime.jsx(IntroFooter, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ThemeToggle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Timeline, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "space-y-20 py-20 sm:space-y-32 sm:py-32",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7411);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4021);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6788);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Commit - Open-source Git client for macOS minimalists"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                attribute: "class",
                disableTransitionOnChange: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.MDXProvider, {
                    components: _components_mdx__WEBPACK_IMPORTED_MODULE_5__,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6788:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

"use strict";
module.exports = require("focus-visible");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7834:
/***/ ((module) => {

"use strict";
module.exports = import("@mdx-js/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,21], () => (__webpack_exec__(5857)));
module.exports = __webpack_exports__;

})();