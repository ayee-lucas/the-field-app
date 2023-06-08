interface Props {
  text: string
  title:string
  body:string
  firstLine:string
}

export default function PostFormatted(text: string): Props {
  const firstLine = text.split('\n')[0];
  const title = firstLine.length > 100 ? `${firstLine.substring(0, 100)}...` : firstLine;
  const body = firstLine.length
  > 100 ? text
    : text.substring(firstLine.length);

  /*   console.log({
    title, body, firstLine,
  }); */

  return {
    title,
    body,
    firstLine,
    text,
  };
}
