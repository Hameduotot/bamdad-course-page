import { useEffect } from "react";

import DescriptionAndCourse from "../componnets/DescriptionAndCourse/DescriptionAndCourse";

export default function Home({ res }) {
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs?.forEach((img) => {
      const newImgSrc = img.src.replace(
        "http://localhost:3000",
        "https://tms.bamdad.co"
      );
      img.src = newImgSrc;
    });
  }, [res]);

  function createMarkup() {
    return { __html: res.describle };
  }

  function HtmlHardCodePart() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <>
      <DescriptionAndCourse
        product={res.lessonProducts}
        Description={HtmlHardCodePart}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  
  let res = await fetch("https://tms.bamdad.co/api/Lesson/GetLessonDet", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Id: id }),
  });
  res = await res.json();
  res = await res.data;
  return {
    props: {
      res,
    },
  };
}
