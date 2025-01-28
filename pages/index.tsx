import { Button, Htag } from "@/components/";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>

      <Button appearance={"primary"}>Button</Button>
      <Button appearance={"ghost"}>Button</Button>
    </>
  );
}
