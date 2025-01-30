import { Button, Htag, Paragraph, Rating, Tag } from "@/components/";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>

      <Button appearance={"primary"} arrow="down">Button</Button>
      <Button appearance={"ghost"} arrow="right">Button</Button>

      <Paragraph size="l">123</Paragraph>
      <Paragraph>123</Paragraph>
      <Paragraph size="s">123</Paragraph>
      
      <Tag size="s" color="ghost">123</Tag>
      <Tag size="s" color="green">321</Tag>
      <Tag size="m" color="grey">das</Tag>
      <Tag size="s" color="primary">asd</Tag>
      <Tag size="s" color="red">dsa</Tag>
      
      <Rating rating={rating} isEditable setRating={setRating} />
      <Rating rating={4} />
    </>
  );
}
