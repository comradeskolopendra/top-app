import {Button, Htag, Input, Paragraph, Rating, Tag} from "@/components/";
import { IMenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { FC, useState } from "react";


const Home: FC<HomeProps> = ({ menu, firstCategory }) => {
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

        <Input placeholder={"test"}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  
  const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
   firstCategory: firstCategory,
  })

  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown> {
  firstCategory: number;
  menu: IMenuItem[];
}