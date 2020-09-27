import React from "react";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx("checkbox")}>
      <label>
        <input type="checkbox" {...rest} checked={checked} />
        <div className={cx("icon")}>
          {checked ? (
            <AiFillCheckCircle className={cx("checked")} />
          ) : (
            <AiOutlineCheckCircle />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
