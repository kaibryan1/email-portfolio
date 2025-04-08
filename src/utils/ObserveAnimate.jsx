"use client";

import React, { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export default function ObserveAnimate() {
  // Set up the intersection observer
  const { ref, elements } = useIntersectionObserver({
    threshold: 0.3,
  });

  useEffect(() => {
    //   Get all the p tags
    const items = document.querySelectorAll("p");

    // Loop through each item and add the ref to it
    items.map((item, index) => {
      // Create a unique ref for each
      const paraRef = (element) => {
        if (element) {
          element.dataset.itemIndex = index;
          ref(element); // Pass to our main ref function
        }
      };
    });
  }, []);
  return <></>;
}
