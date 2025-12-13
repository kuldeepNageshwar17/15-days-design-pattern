/* eslint-disable react/prop-types */
import { useState, Children, cloneElement } from "react";

export default function Tabs({ children, defaultIndex = 0 }) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const setIndex = (i) => {
    setSelectedIndex(i);
  };

  // Inject selectedIndex and setIndex into direct compound children (List, Panels)
  return (
    <>
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, { selectedIndex, setIndex });
      })}
    </>
  );
}

function List({ children, selectedIndex, setIndex, className = "" }) {
  // Clone children so each Tab receives its index + control props
  return (
    <div className={`tabs-list ${className}`.trim()} role="tablist">
      {Children.map(children, (child, index) => {
        if (!child) return null;
        return cloneElement(child, { index, selectedIndex, setIndex });
      })}
    </div>
  );
}

function Tab({ children, index = 0, selectedIndex, setIndex, className = "" }) {
  // If used outside Tabs/List, render a neutral button
  if (typeof selectedIndex === "undefined" || typeof setIndex === "undefined") {
    return (
      <button type="button" className={`tab ${className}`.trim()}>
        {children}
      </button>
    );
  }

  const isSelected = index === selectedIndex;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={`tab ${isSelected ? "tab-active" : ""} ${className}`.trim()}
      onClick={() => setIndex(index)}
    >
      {children}
    </button>
  );
}

function Panels({ children, selectedIndex, className = "" }) {
  // Clone panels to attach index and selectedIndex
  return (
    <div className={`tabs-panels ${className}`.trim()}>
      {Children.map(children, (child, index) => {
        if (!child) return null;
        return cloneElement(child, { index, selectedIndex });
      })}
    </div>
  );
}

function Panel({ children, index = 0, selectedIndex, className = "" }) {
  // If used outside Tabs/Panels, render the content plainly
  if (typeof selectedIndex === "undefined") {
    return <div className={`tab-panel ${className}`.trim()}>{children}</div>;
  }

  if (index !== selectedIndex) return null;

  return (
    <div role="tabpanel" className={`tab-panel ${className}`.trim()}>
      {children}
    </div>
  );
}

// Attach compound subcomponents
Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panels = Panels;
Tabs.Panel = Panel;
