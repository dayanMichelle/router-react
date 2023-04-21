import { EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrKey || event.shiftKey;
    const isManageableEvent = target === undefined || target == "_self";
    if (isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };
  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
