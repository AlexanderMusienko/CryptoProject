import React from "react";

export default function NMDiv({ children, ...props }) {
  return (
    <div {...props} style={{ margin: 0 }}>
      {children}
    </div>
  );
}
