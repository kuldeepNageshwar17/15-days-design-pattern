/* eslint-disable react/prop-types */
import { useState } from "react";

/**
 * Render-prop Toggle component
 * Usage:
 * <Toggle>{({on, toggle, reset}) => (...)}</Toggle>
 */
export default function Toggle({ children, initial = false }) {
  const [on, setOn] = useState(!!initial);

  const toggle = () => setOn((o) => !o);
  const reset = () => setOn(!!initial);

  // children is expected to be a function (render-prop)
  return typeof children === "function"
    ? children({ on, toggle, reset })
    : null;
}
