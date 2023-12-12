import { useState } from "react";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const DescriptionProduct = ({ children, maxChars = 150 }) => {
  let [expanded, setExpanded] = useState(true);

  // Memeriksa apakah prop children berupa string atau bukan
  const isString = typeof children === "string";

  // Mengambil panjang teks dari children atau dari properti spesifik jika children bukan string
  const textLength = isString ? children.length : 0;

  // Menyusun teks sesuai dengan kondisi
  let text = expanded
    ? children
    : textLength > maxChars
    ? `${children.substring(0, maxChars)} ...`
    : children;

  console.log("Text Length:", textLength); // Menambahkan console log

  return (
    <>
      <div>{text}</div>
      {textLength > maxChars && (
        <Button size="sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </>
  );
};

DescriptionProduct.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  maxChars: PropTypes.number,
};

export default DescriptionProduct;
