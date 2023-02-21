import React from "react";

export default function (props) {
  return (
    <div class={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
      <strong>{props.type}</strong> {props.warn}
      {/* <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  );
}
