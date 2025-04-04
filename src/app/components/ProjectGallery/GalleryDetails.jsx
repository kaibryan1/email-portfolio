import React from "react";
import styles from "./GalleryDetails.module.scss";

export default function GalleryDetails({ data }) {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
