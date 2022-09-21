import React from "react";
import { icons } from '../../Utils/Icons';

export function Footer({ CreateIconsCards }) {
  return (
    <>
      {icons.map(CreateIconsCards)}
      <p className="copyright">
        Copyright © The Top Of Cliff Developers - All Rights Reserved.
      </p>
      <p className="copyright">
        © 2020 - {new Date().getFullYear()} Clinto Ayamkudiyil.
      </p>
    </>
  );
}
