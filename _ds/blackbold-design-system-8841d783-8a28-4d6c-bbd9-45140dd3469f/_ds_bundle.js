/* @ds-bundle: {"format":3,"namespace":"BLACKBOLDDesignSystem_8841d7","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"SocialIcon","sourcePath":"components/buttons/SocialIcon.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Avatar","sourcePath":"components/media/Avatar.jsx"},{"name":"SectionHeading","sourcePath":"components/media/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"b77ca8bd47f0","components/buttons/SocialIcon.jsx":"7e09e3cef463","components/disclosure/Accordion.jsx":"ee2aac3912e9","components/forms/Field.jsx":"5d38a29de9ed","components/forms/Toggle.jsx":"e870ed79382d","components/media/Avatar.jsx":"c527e93e4b8f","components/media/SectionHeading.jsx":"15035ad5c60b","components/surfaces/Badge.jsx":"287c23ae435a","components/surfaces/Card.jsx":"c62225b2df2b","components/surfaces/Stat.jsx":"c0da580ed0ea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BLACKBOLDDesignSystem_8841d7 = window.BLACKBOLDDesignSystem_8841d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BLACKBOLD primary action — a liquid-glass pill button.
 * Variants: primary (gradient), ghost, white. Sizes: sm, md, lg.
 * `icon` takes a Unicons class (e.g. "uil-message"); it nudges right on hover.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconLeft,
  block = false,
  as = "button",
  className = "",
  ...rest
}) {
  const cls = ["bb-btn", variant === "ghost" && "bb-btn--ghost", variant === "white" && "bb-btn--white", size === "sm" && "bb-btn--sm", size === "lg" && "bb-btn--lg", block && "bb-btn--block", className].filter(Boolean).join(" ");

  // Cursor-tracked ripple, matching the source liquid-glass behaviour.
  const handleMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${(e.clientX - r.left) / r.width * 100}%`);
    e.currentTarget.style.setProperty("--my", `${(e.clientY - r.top) / r.height * 100}%`);
    rest.onMouseMove && rest.onMouseMove(e);
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest, {
    onMouseMove: handleMove
  }), iconLeft && /*#__PURE__*/React.createElement("i", {
    className: `uil ${iconLeft} bb-btn__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("i", {
    className: `uil ${icon} bb-btn__icon`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/SocialIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular glass icon button used for social links and compact actions.
 * `icon` is a Unicons class (e.g. "uil-github-alt"). Lifts and brightens on hover.
 */
function SocialIcon({
  icon,
  href,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["bb-social", size === "lg" && "bb-social--lg", className].filter(Boolean).join(" ");
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `uil ${icon}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
/**
 * Glass accordion. Pass `items` as [{ icon, title, rows: [] }].
 * One panel open at a time; `defaultOpen` is the starting index.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  className = ""
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: ["bb-accordion", className].filter(Boolean).join(" ")
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bb-accordion__item" + (open === i ? " bb-accordion__item--open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bb-accordion__header",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, it.icon && /*#__PURE__*/React.createElement("i", {
    className: `uil ${it.icon} bb-accordion__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bb-accordion__title"
  }, it.title), /*#__PURE__*/React.createElement("i", {
    className: "uil uil-angle-down bb-accordion__chevron",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bb-accordion__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-accordion__panel-inner"
  }, (it.rows || []).map((r, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "bb-accordion__row"
  }, r)))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Frosted input / textarea with floating-style label.
 * Set `multiline` for a textarea. Focus ring uses the violet tint.
 */
function Field({
  label,
  multiline = false,
  rows = 5,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `f-${label.toString().toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["bb-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "bb-field__label",
    htmlFor: fieldId
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "bb-field__control",
    rows: rows
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "bb-field__control"
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Glass toggle switch (used for the dark/light theme control and any boolean).
 * Controlled via `checked` + `onChange(next)`.
 */
function Toggle({
  checked = false,
  onChange,
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": label,
    className: ["bb-toggle", className].filter(Boolean).join(" "),
    onClick: () => onChange && onChange(!checked)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bb-toggle__thumb"
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/media/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular avatar with a glass ring. Sizes: sm, md, lg.
 */
function Avatar({
  src,
  alt = "",
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["bb-avatar", size === "sm" && "bb-avatar--sm", size === "lg" && "bb-avatar--lg", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("img", _extends({
    className: cls,
    src: src,
    alt: alt
  }, rest));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/media/SectionHeading.jsx
try { (() => {
/**
 * Centered section heading: chevron-flanked eyebrow, large title, optional subtitle.
 * Matches the BLACKBOLD section pattern (eyebrow over "My introduction").
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["bb-heading", className].filter(Boolean).join(" ")
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "bb-eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "bb-heading__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "bb-heading__sub"
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small pill label for tags, statuses and metadata.
 * Tones: default (violet tint), solid, success, warning, danger.
 * `icon` is an optional Unicons class.
 */
function Badge({
  children,
  tone = "default",
  icon,
  className = "",
  ...rest
}) {
  const cls = ["bb-badge", tone === "solid" && "bb-badge--solid", tone === "success" && "bb-badge--success", tone === "warning" && "bb-badge--warning", tone === "danger" && "bb-badge--danger", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `uil ${icon}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Frosted glass card — the core BLACKBOLD surface for services, skills,
 * portfolio tiles and any grouped content. Set `interactive` for hover lift.
 */
function Card({
  children,
  interactive = false,
  className = "",
  ...rest
}) {
  const cls = ["bb-card", interactive && "bb-card--interactive", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headline metric — a big value over a small label, in a frosted tile.
 * Used in the about section (e.g. "2000+ Completed Meta/Reel").
 */
function Stat({
  value,
  label,
  className = "",
  ...rest
}) {
  const cls = ["bb-stat", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bb-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "bb-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

})();
